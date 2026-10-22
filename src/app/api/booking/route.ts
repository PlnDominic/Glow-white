import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendPatientConfirmation, sendBusinessNotification } from "@/lib/mailer";

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

  if (!supabase) {
    console.error("Supabase is not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY); booking not stored.");
  } else {
    const { error } = await supabase.from("bookings").insert({
      booking_id: booking.bookingId,
      service: booking.service,
      clinician: booking.clinician,
      date: booking.date,
      time_slot: booking.timeSlot,
      patient_name: booking.patientName,
      email: booking.email,
      phone: booking.phone,
      dob: booking.dob,
      gender: booking.gender,
      notes: booking.notes,
      status: booking.status,
    });
    // Don't fail the patient's booking over storage; the emails still go out.
    if (error) console.error("Failed to save booking to Supabase:", error);
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
  const results = await Promise.allSettled([
    sendPatientConfirmation(emailPayload),
    sendBusinessNotification(emailPayload),
  ]);
  const labels = ["patient confirmation", "business notification"];
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`Failed to send ${labels[i]} email for ${bookingId}:`, r.reason);
  });

  return NextResponse.json({ bookingId, message: "Booking confirmed." }, { status: 201 });
}
