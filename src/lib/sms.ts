// Arkesel SMS (https://developers.arkesel.com) – v2 API.
// Env: ARKESEL_API_KEY, ARKESEL_SENDER_ID (max 11 chars, must be approved by Arkesel),
//      BUSINESS_PHONE (comma-separated numbers to alert on new bookings).

const ENDPOINT = "https://sms.arkesel.com/api/v2/sms/send";

/** Normalise a Ghana number to international format without "+": 0539647100 -> 233539647100 */
export function normalizePhone(raw: string): string | null {
  let n = raw.replace(/[^\d+]/g, "");
  if (n.startsWith("+")) n = n.slice(1);
  else if (n.startsWith("00")) n = n.slice(2);
  else if (n.startsWith("0")) n = "233" + n.slice(1);
  else if (n.length === 9) n = "233" + n;
  return /^\d{11,15}$/.test(n) ? n : null;
}

async function sendSms(recipients: string[], message: string) {
  const apiKey = process.env.ARKESEL_API_KEY;
  if (!apiKey) throw new Error("ARKESEL_API_KEY is not configured");

  const numbers = recipients.map((r) => normalizePhone(r)).filter((n): n is string => !!n);
  if (numbers.length === 0) throw new Error("No valid SMS recipient numbers");

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      sender: process.env.ARKESEL_SENDER_ID ?? "GloWhite",
      message,
      recipients: numbers,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  const text = await res.text();
  let json: { status?: string; message?: string } = {};
  try {
    json = JSON.parse(text);
  } catch {}
  if (!res.ok || (json.status && json.status !== "success")) {
    throw new Error(`Arkesel error ${res.status}: ${text.slice(0, 300)}`);
  }
}

interface SmsBooking {
  bookingId: string;
  patientName: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
}

const SERVICE_SHORT: Record<string, string> = {
  checkup: "Checkup",
  whitening: "Whitening",
  veneers: "Veneers",
  advanced_replacement: "Advance Replacement",
  orthodontics: "Orthodontics",
  restorative: "Restorative",
};

export async function sendPatientSms(b: SmsBooking) {
  const service = SERVICE_SHORT[b.service] ?? b.service;
  await sendSms(
    [b.phone],
    `Hi ${b.patientName}, your GloWhite Dental appointment request (${service}) for ${b.date} at ${b.timeSlot} is received and pending confirmation. Ref: ${b.bookingId}. Questions? Call 053 964 7100.`
  );
}

export async function sendBusinessSms(b: SmsBooking) {
  const to = (process.env.BUSINESS_PHONE ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  if (to.length === 0) throw new Error("BUSINESS_PHONE is not configured");
  const service = SERVICE_SHORT[b.service] ?? b.service;
  await sendSms(
    to,
    `New booking ${b.bookingId}: ${b.patientName} (${b.phone}), ${service}, ${b.date} ${b.timeSlot}.`
  );
}
