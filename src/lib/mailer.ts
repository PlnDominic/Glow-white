import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM = `"${process.env.SMTP_FROM_NAME ?? "GloWhite Dental Clinic"}" <${process.env.SMTP_USER}>`;

function formatDate(d: string) {
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const SERVICE_LABELS: Record<string, string> = {
  checkup: "Checkup – Routine Hygiene",
  whitening: "Whitening – Professional Glow",
  veneers: "Veneers – Smile Design",
  advanced_replacement: "Advance Replacement – Dentures, Bridges and Implant",
  orthodontics: "Orthodontics – Braces and Aligners",
  restorative: "Restorative – Advanced Repair",
};

const CLINICIAN_LABELS: Record<string, string> = {
  sarah: "Dr. Sarah Chen (Aesthetic)",
  marcus: "Dr. Marcus Vance (Director)",
};

interface BookingDetails {
  bookingId: string;
  patientName: string;
  email: string;
  phone: string;
  service: string;
  clinician: string;
  date: string;
  timeSlot: string;
  dob: string;
  gender: string;
  notes?: string;
}

interface InquiryDetails {
  name: string;
  email: string;
  service: string;
  message: string;
}

function baseTemplate(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>
    body { margin: 0; padding: 0; background: #f7f9fc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #191c1e; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
    .header { background: #003f87; padding: 32px 40px; text-align: center; }
    .header h1 { color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; letter-spacing: -0.5px; }
    .header p { color: #bbd0ff; font-size: 13px; margin: 6px 0 0; }
    .body { padding: 40px; }
    .ref-box { background: #f0f4ff; border-left: 4px solid #003f87; border-radius: 8px; padding: 16px 20px; margin-bottom: 28px; }
    .ref-box .label { font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #727784; font-weight: 700; }
    .ref-box .value { font-size: 22px; font-weight: 800; color: #003f87; margin-top: 4px; }
    table.details { width: 100%; border-collapse: collapse; font-size: 14px; }
    table.details tr td { padding: 12px 0; border-bottom: 1px solid #e0e3e6; vertical-align: top; }
    table.details tr:last-child td { border-bottom: none; }
    table.details td:first-child { color: #727784; font-weight: 600; width: 130px; }
    table.details td:last-child { color: #191c1e; font-weight: 700; }
    .cta { margin-top: 32px; text-align: center; }
    .cta a { display: inline-block; background: #003f87; color: #ffffff; text-decoration: none; padding: 14px 36px; border-radius: 100px; font-size: 14px; font-weight: 700; }
    .note { margin-top: 28px; background: #f7f9fc; border-radius: 8px; padding: 16px 20px; font-size: 13px; color: #424752; line-height: 1.6; }
    .footer { background: #f0f4ff; padding: 24px 40px; text-align: center; font-size: 11px; color: #727784; }
    .footer strong { color: #003f87; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>GloWhite Dental Clinic</h1>
      <p>Precision Care · Tranquil Experience</p>
    </div>
    <div class="body">
      ${body}
    </div>
    <div class="footer">
      <strong>GloWhite Dental Clinic</strong> · Rowi Junction, Adenta, Accra (near Papa's Pizza)<br />
      053 964 7100 &nbsp;|&nbsp; 027 184 2345 &nbsp;|&nbsp; Mon – Thu: 8am – 6pm &nbsp;|&nbsp; Fri – Sat: 8am – 5pm &nbsp;|&nbsp; Sun: 2pm – 6pm
    </div>
  </div>
</body>
</html>`;
}

export async function sendPatientConfirmation(b: BookingDetails) {
  const html = baseTemplate(
    "Your Appointment is Confirmed – GloWhite Dental Clinic",
    `
    <p style="font-size:16px; font-weight:700; margin-top:0;">Hi ${b.patientName},</p>
    <p style="font-size:14px; color:#424752; line-height:1.7; margin-bottom:28px;">
      Your appointment request has been received and is <strong>pending confirmation</strong>.
      Our team will reach out if any changes are needed. See your details below.
    </p>

    <div class="ref-box">
      <div class="label">Booking Reference</div>
      <div class="value">${b.bookingId}</div>
    </div>

    <table class="details">
      <tr><td>Service</td><td>${SERVICE_LABELS[b.service] ?? b.service}</td></tr>
      <tr><td>Clinician</td><td>${CLINICIAN_LABELS[b.clinician] ?? b.clinician}</td></tr>
      <tr><td>Date</td><td>${formatDate(b.date)}</td></tr>
      <tr><td>Time</td><td>${b.timeSlot}</td></tr>
      <tr><td>Gender</td><td>${b.gender.charAt(0).toUpperCase() + b.gender.slice(1)}</td></tr>
      <tr><td>Date of Birth</td><td>${b.dob}</td></tr>
      <tr><td>Phone</td><td>${b.phone}</td></tr>
      ${b.notes ? `<tr><td>Notes</td><td>${b.notes}</td></tr>` : ""}
    </table>

    <div class="note">
      <strong>Need to reschedule or cancel?</strong><br />
      Call us at <strong>053 964 7100</strong> at least 24 hours before your appointment.
      Quoting your reference number <strong>${b.bookingId}</strong> will help us locate your booking quickly.
    </div>

    <div class="cta">
      <a href="tel:0539647100">Call the Clinic</a>
    </div>
    `
  );

  await transporter.sendMail({
    from: FROM,
    to: b.email,
    subject: `Appointment Confirmed – ${b.bookingId} | GloWhite Dental Clinic`,
    html,
  });
}

export async function sendBusinessNotification(b: BookingDetails) {
  const html = baseTemplate(
    `New Booking: ${b.bookingId}`,
    `
    <p style="font-size:16px; font-weight:700; margin-top:0;">New Appointment Request</p>
    <p style="font-size:14px; color:#424752; line-height:1.7; margin-bottom:28px;">
      A new booking has been submitted through the website. Details are below.
    </p>

    <div class="ref-box">
      <div class="label">Booking Reference</div>
      <div class="value">${b.bookingId}</div>
    </div>

    <table class="details">
      <tr><td>Patient</td><td>${b.patientName}</td></tr>
      <tr><td>Email</td><td>${b.email}</td></tr>
      <tr><td>Phone</td><td>${b.phone}</td></tr>
      <tr><td>Service</td><td>${SERVICE_LABELS[b.service] ?? b.service}</td></tr>
      <tr><td>Clinician</td><td>${CLINICIAN_LABELS[b.clinician] ?? b.clinician}</td></tr>
      <tr><td>Gender</td><td>${b.gender.charAt(0).toUpperCase() + b.gender.slice(1)}</td></tr>
      <tr><td>Date of Birth</td><td>${b.dob}</td></tr>
      <tr><td>Date</td><td>${formatDate(b.date)}</td></tr>
      <tr><td>Time</td><td>${b.timeSlot}</td></tr>
      <tr><td>Submitted</td><td>${new Date().toLocaleString("en-GB", { timeZone: "Africa/Accra" })}</td></tr>
      ${b.notes ? `<tr><td>Notes</td><td>${b.notes}</td></tr>` : ""}
    </table>
    `
  );

  await transporter.sendMail({
    from: FROM,
    to: process.env.BUSINESS_EMAIL,
    subject: `New Booking [${b.bookingId}] – ${b.patientName} · ${SERVICE_LABELS[b.service] ?? b.service}`,
    html,
  });
}

export async function sendInquiryNotification(i: InquiryDetails) {
  const html = baseTemplate(
    `New Contact Inquiry: ${i.name}`,
    `
    <p style="font-size:16px; font-weight:700; margin-top:0;">New Website Message</p>
    <p style="font-size:14px; color:#424752; line-height:1.7; margin-bottom:28px;">
      You have received a new inquiry from the contact form.
    </p>

    <table class="details">
      <tr><td>Sender Name</td><td>${i.name}</td></tr>
      <tr><td>Sender Email</td><td>${i.email}</td></tr>
      <tr><td>Interested In</td><td>${i.service}</td></tr>
      <tr><td>Submitted</td><td>${new Date().toLocaleString("en-GB", { timeZone: "Africa/Accra" })}</td></tr>
    </table>

    <div class="note">
      <strong>Message Content:</strong><br />
      <p style="white-space: pre-wrap;">${i.message}</p>
    </div>
    `
  );

  await transporter.sendMail({
    from: FROM,
    to: process.env.BUSINESS_EMAIL,
    replyTo: i.email,
    subject: `New Inquiry – ${i.name} · ${i.service}`,
    html,
  });
}
