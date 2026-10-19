import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { sendPatientConfirmation, sendBusinessNotification } from "@/lib/mailer";

const DATA_FILE = path.join(process.cwd(), "data", "bookings.json");
// Vercel's filesystem is read-only, so local persistence only works in dev/self-hosted.
// On Vercel the emails below are the record of the booking.
const CAN_PERSIST = !process.env.VERCEL;

function readBookings(): object[] {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writeBookings(bookings: object[]) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { service, clinician, date, timeSlot, patientName, email, phone, notes, dob, gender } = body;

  if (!service || !date || !timeSlot || !patientName || !email || !phone || !dob || !gender) {
    return NextResponse.json({ error: "Missing required fields. Please ensure all mandatory fields (*) are filled." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const bookingDate = new Date(date);
  if (isNaN(bookingDate.getTime()) || bookingDate < new Date(new Date().toDateString())) {
    return NextResponse.json({ error: "Please select a valid future date." }, { status: 400 });
  }

  const bookingId = `GW-${Date.now().toString(36).toUpperCase()}`;

  const booking = {
    bookingId,
    service,
    clinician: clinician || "First Available Specialist",
    date,
    timeSlot,
    patientName,
    email,
    phone,
    dob,
    gender,
    notes: notes ?? "",
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  if (CAN_PERSIST) {
    try {
      const bookings = readBookings();
      bookings.push(booking);
      writeBookings(bookings);
    } catch (err) {
      console.error("Failed to save booking to local file:", err);
      // Continue despite failure
    }
  }

  // Send emails — fire both in parallel, don't block the response on failure
  const emailPayload = {
    bookingId,
    patientName,
    email,
    phone,
    service,
    clinician: clinician || "First Available Specialist",
    date,
    timeSlot,
    dob,
    gender,
    notes: notes ?? "",
  };
  await Promise.allSettled([
    sendPatientConfirmation(emailPayload),
    sendBusinessNotification(emailPayload),
  ]);

  return NextResponse.json({ bookingId, message: "Booking confirmed." }, { status: 201 });
}

export async function GET() {
  const bookings = readBookings();
  return NextResponse.json({ bookings });
}
