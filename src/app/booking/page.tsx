"use client";

import { useState } from "react";
import Link from "next/link";

type Service = "checkup" | "whitening" | "veneers" | "advanced_replacement" | "orthodontics" | "restorative";

const SERVICES = [
  { id: "checkup" as Service, label: "Checkup", sub: "Routine hygiene", icon: "clean_hands" },
  { id: "whitening" as Service, label: "Whitening", sub: "Professional glow", icon: "auto_awesome" },
  { id: "veneers" as Service, label: "Veneers", sub: "Smile design", icon: "interests" },
  { id: "advanced_replacement" as Service, label: "Advance Replacement", sub: "Dentures, bridges and implants", icon: "join_inner" },
  { id: "orthodontics" as Service, label: "Orthodontics", sub: "Braces and aligners", icon: "align_items_stretch" },
  { id: "restorative" as Service, label: "Restorative", sub: "Advanced repair", icon: "medical_services" },
];

const TIME_SLOTS = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "14:00", "14:30", "15:00",
  "15:30", "16:00", "16:30", "17:00", "17:30",
];

const SERVICE_LABELS: Record<Service, string> = {
  checkup: "Checkup",
  whitening: "Whitening",
  veneers: "Veneers",
  advanced_replacement: "Advance Replacement",
  orthodontics: "Orthodontics",
  restorative: "Restorative",
};

function formatDate(d: string) {
  if (!d) return "";
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

function getFilteredTimeSlots(dateStr: string) {
  if (!dateStr) return TIME_SLOTS;
  const d = new Date(dateStr + "T00:00:00");
  const day = d.getDay(); // 0: Sun, 1-4: Mon-Thu, 5: Fri, 6: Sat

  if (day === 0) { // Sunday: 2:00 PM — 6:00 PM
    return TIME_SLOTS.filter((t) => t >= "14:00" && t < "18:00");
  }
  if (day === 5 || day === 6) { // Friday — Saturday: 8:00 AM — 5:00 PM
    return TIME_SLOTS.filter((t) => t >= "08:00" && t < "17:00");
  }
  // Monday — Thursday: 8:00 AM — 6:00 PM
  return TIME_SLOTS.filter((t) => t >= "08:00" && t < "18:00");
}

function ConfirmationScreen({
  bookingId, name, service, date, timeSlot,
}: {
  bookingId: string; name: string; service: Service; date: string; timeSlot: string;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-8 py-24">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <div>
          <h1 className="text-4xl font-headline font-extrabold text-on-background mb-3">Booking Confirmed</h1>
          <p className="text-on-surface-variant font-body">
            Thank you, <strong>{name}</strong>. Your appointment has been received and is pending confirmation.
          </p>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-lg border border-outline-variant/10 text-left space-y-4 font-body">
          <div className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-outline-variant">Booking Reference</span>
            <span className="font-headline font-bold text-primary text-lg">{bookingId}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Service</span>
            <span className="font-bold text-on-surface">{SERVICE_LABELS[service]}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Date</span>
            <span className="font-bold text-on-surface">{formatDate(date)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Time</span>
            <span className="font-bold text-on-surface">{timeSlot}</span>
          </div>
        </div>
        <p className="text-xs text-on-surface-variant font-body">
          A confirmation email will be sent to you. For changes, call <strong>053 964 7100 | 027 184 2345</strong>.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-bold shadow-lg hover:opacity-90 transition-all font-body"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default function Booking() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<Service | null>(null);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const today = new Date().toISOString().split("T")[0];
  const canStep1 = !!service;
  const canStep2 = !!date && !!timeSlot && !!patientName.trim() && !!email.trim() && !!phone.trim() && !!dob && !!gender;

  async function handleSubmit() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, date, timeSlot, patientName, email, phone, notes, dob, gender }),
      });
      let data;
      const contentType = res.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(text.slice(0, 100) || "Server returned a non-JSON response.");
      }

      if (!res.ok) throw new Error(data.error ?? "Booking failed. Please try again.");
      setBookingId(data.bookingId);
      setStep(4);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (step === 4 && bookingId) {
    return (
      <ConfirmationScreen
        bookingId={bookingId}
        name={patientName}
        service={service!}
        date={date}
        timeSlot={timeSlot}
      />
    );
  }

  const stepLabels = ["01 Consultation", "02 Schedule", "03 Confirmation"];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <header className="pt-32 pb-20 px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <span className="text-primary font-bold text-[12px] uppercase tracking-[0.2em] mb-4 block font-body">Precision Care</span>
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-background leading-[1.1] mb-8">
            Your smile, <br />
            <span className="text-secondary italic font-light">perfectly curated.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-body">
            Experience dental excellence where clinical precision meets a sanctuary of tranquility. Select your preferred care path below.
          </p>
        </div>
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 w-full aspect-video">
            <img
              className="object-cover w-full h-full"
              alt="Modern clinic interior"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbhiNq4DFpLBZB9CZZhZAet56aOZb-tYcdLXF58Mqg1CSZnB4csZ_rwKfEhtY2ub7r5t7vD02LUsSYQeQTfusyyAPi4QJdsMQy2wzGeeC6uByQ2Is6ANWFWGpQS_QLh063UBNIfuMByvfFEmF1kK1JCeFkF0_Cm9SaEqOHGYOWkHP0nMpTh2yKRWSTxMfwS0JvAgdNejW6xWreSRjCaMgsvoq6xlqMZqi378826uZfbLw0OflqZOH-nV5WfuDpLVRc-rM2UfYE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </header>

      <main className="px-8 pb-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Progress Indicator */}
            <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest font-body mb-8">
              {stepLabels.map((label, i) => (
                <div key={label} className="flex items-center space-x-2">
                  <span className={step === i + 1 ? "text-primary" : step > i + 1 ? "text-tertiary" : "text-slate-400"}>
                    {label}
                  </span>
                  {i < 2 && <span className="material-symbols-outlined text-xs text-slate-300">arrow_forward_ios</span>}
                </div>
              ))}
            </div>

            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-xl border border-outline-variant/10">
              {/* ── STEP 1: Service Selection ── */}
              {step === 1 && (
                <div className="space-y-10">
                  {/* Service Selection */}
                  <div className="space-y-6">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-primary font-body">
                      01. Choose Service
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                      {SERVICES.map((s) => {
                        const isSelected = service === s.id;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setService(s.id)}
                            className={`flex flex-col p-6 rounded-2xl border-2 text-left transition-all ${
                              isSelected
                                ? "bg-white border-primary ring-4 ring-primary/5 shadow-lg scale-105"
                                : "bg-surface-container-low border-transparent hover:border-primary/20 hover:bg-white"
                            }`}
                          >
                            <span className={`material-symbols-outlined mb-4 ${isSelected ? "text-primary" : "text-on-surface-variant"}`}>
                              {s.icon}
                            </span>
                            <span className="font-headline font-bold text-lg mb-1">{s.label}</span>
                            <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider font-body">
                              {s.sub}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      disabled={!canStep1}
                      onClick={() => setStep(2)}
                      className="w-full md:w-auto bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      <span>Continue</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    {!canStep1 && (
                      <p className="text-[10px] text-on-surface-variant mt-3 font-body">
                        Please select a service to continue.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* ── STEP 2: Date, Time & Patient Info ── */}
              {step === 2 && (
                <div className="space-y-10">
                  {/* Date & Time */}
                  <div className="space-y-6">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-primary font-body">
                      03. Time & Date
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold text-outline-variant uppercase ml-1">Preferred Date <span className="text-primary">*</span></span>
                        <input
                          required
                          className="w-full p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-sm"
                          type="date"
                          min={today}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold text-outline-variant uppercase ml-1">Arrival Window <span className="text-primary">*</span></span>
                        <div className="grid grid-cols-4 gap-2">
                          {getFilteredTimeSlots(date).map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setTimeSlot(t)}
                              className={`p-2.5 rounded-lg text-xs font-bold transition-all ${
                                timeSlot === t
                                  ? "bg-primary text-on-primary shadow-md"
                                  : "bg-surface-container-low hover:bg-primary hover:text-white"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Patient Details */}
                  <div className="space-y-6">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-primary font-body">
                      04. Your Details
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-body">
                      <div className="space-y-2 md:col-span-2">
                        <span className="text-[10px] font-bold text-outline-variant uppercase ml-1">Full Name <span className="text-primary">*</span></span>
                        <input
                          required
                          className="w-full p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-sm"
                          type="text"
                          placeholder="e.g. Kwame Mensah"
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-outline-variant uppercase ml-1">Email Address <span className="text-primary">*</span></span>
                        <input
                          required
                          className="w-full p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-sm"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-outline-variant uppercase ml-1">Phone Number <span className="text-primary">*</span></span>
                        <input
                          required
                          className="w-full p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-sm"
                          type="tel"
                          placeholder="055 000 0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-outline-variant uppercase ml-1">Gender <span className="text-primary">*</span></span>
                        <select
                          className="w-full p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-sm appearance-none"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-outline-variant uppercase ml-1">Date of Birth <span className="text-primary">*</span></span>
                        <input
                          className="w-full p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-sm"
                          type="date"
                          max={today}
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <span className="text-[10px] font-bold text-outline-variant uppercase ml-1">Notes (optional)</span>
                        <textarea
                          className="w-full p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all text-sm resize-none"
                          rows={3}
                          placeholder="Any concerns or special requests..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-8 py-4 rounded-full font-bold border-2 border-outline-variant/30 text-on-surface-variant hover:border-primary/30 transition-all font-body"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!canStep2}
                      onClick={() => setStep(3)}
                      className="flex-1 md:flex-none bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      <span>Review Booking</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                  {!canStep2 && (
                    <p className="text-[10px] text-on-surface-variant font-body">
                      Please fill in all required fields to continue.
                    </p>
                  )}
                </div>
              )}

              {/* ── STEP 3: Review & Confirm ── */}
              {step === 3 && (
                <div className="space-y-10">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-widest text-primary font-body mb-6">
                      Review Your Appointment
                    </p>
                    <div className="space-y-4 font-body text-sm">
                      {[
                        { label: "Service", value: SERVICE_LABELS[service!] },
                        { label: "Date", value: formatDate(date) },
                        { label: "Time", value: timeSlot },
                        { label: "Patient", value: patientName },
                        { label: "Gender", value: gender.charAt(0).toUpperCase() + gender.slice(1) },
                        { label: "DOB", value: dob },
                        { label: "Email", value: email },
                        { label: "Phone", value: phone },
                        ...(notes ? [{ label: "Notes", value: notes }] : []),
                      ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between items-start border-b border-outline-variant/10 pb-3">
                          <span className="text-on-surface-variant w-24 shrink-0">{label}</span>
                          <span className="font-bold text-on-surface text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {error && (
                    <div className="bg-error-container text-on-error-container rounded-xl p-4 text-sm font-body font-medium">
                      {error}
                    </div>
                  )}

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-8 py-4 rounded-full font-bold border-2 border-outline-variant/30 text-on-surface-variant hover:border-primary/30 transition-all font-body"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="flex-1 md:flex-none bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span>Confirming...</span>
                          <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Booking</span>
                          <span className="material-symbols-outlined">check_circle</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[10px] text-on-surface-variant font-body">
                    By confirming, you agree to our patient care guidelines and cancellation policy.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-primary text-on-primary p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <span className="material-symbols-outlined text-6xl">verified</span>
              </div>
              <h3 className="font-headline font-bold text-2xl mb-4 leading-tight">Patient <br />Assurance</h3>
              <p className="text-sm text-on-primary-container leading-relaxed mb-6 font-body">
                We prioritize your comfort. Every appointment includes a private consultation and personalized care plans tailored to your needs.
              </p>
              <ul className="space-y-4 font-body">
                <li className="flex items-center space-x-3 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>Direct insurance billing</span>
                </li>
                <li className="flex items-center space-x-3 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>Complimentary consultation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/40 p-8 rounded-[2rem] shadow-sm">
              <div className="flex items-center space-x-1 text-primary mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="italic text-on-background/80 text-sm mb-6 leading-relaxed font-body">
                &quot;The sanctuary atmosphere here is like no other clinic. I actually look forward to my dental visits now.&quot;
              </p>
              <div className="flex items-center space-x-3 font-body">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">AK</div>
                <div>
                  <p className="text-xs font-bold text-on-background">Angela Koduah</p>
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold">Patient since 2021</p>
                </div>
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-outline-variant/30 rounded-[2rem] text-center bg-surface-container-lowest shadow-inner">
              <p className="text-sm font-bold text-on-surface-variant mb-4 font-body">Questions about your treatment?</p>
              <div className="flex flex-col gap-2">
                <a className="text-primary font-bold text-xl font-headline hover:underline" href="tel:0539647100">053 964 7100</a>
                <a className="text-primary font-bold text-xl font-headline hover:underline" href="tel:0271842345">027 184 2345</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
