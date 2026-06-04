"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("General Consultation");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to connect to the server. Please check your connection.");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="pt-32 pb-20 px-8 max-w-7xl mx-auto w-full text-center md:text-left relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[12px] uppercase tracking-[0.2em] text-primary mb-4 block font-bold font-body">Get in Touch</span>
            <h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-background leading-[0.95]">
              Connect with <br /> Excellence.
            </h1>
          </div>
          <div className="hidden md:block pb-2">
            <div className="flex items-center gap-4 text-outline font-body">
              <span className="w-20 h-[1px] bg-outline-variant"></span>
              <span className="text-[10px] uppercase tracking-widest">Precision Care</span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-8 pb-24 max-w-7xl mx-auto w-full">
        {/* Bento Grid Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Inquiry Form */}
          <section className="md:col-span-7 bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-xl border border-outline-variant/10">
            <div className="mb-10">
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">Send a Message</h2>
              <p className="text-on-surface-variant max-w-md font-body">Our team typically responds within 24 business hours to all clinical inquiries.</p>
            </div>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-3xl">check</span>
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700 font-body mb-6">Thank you for reaching out. Our team will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-green-700 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-body">
                {status === "error" && (
                  <div className="bg-red-50 text-red-700 px-6 py-4 rounded-xl text-sm font-medium border border-red-100 italic">
                    {errorMsg}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant ml-1">Full Name</label>
                    <input
                      required
                      className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-1 focus:ring-primary/40 focus:bg-white transition-all text-on-surface"
                      placeholder="Kojo Mensah"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant ml-1">Email Address</label>
                    <input
                      required
                      className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-1 focus:ring-primary/40 focus:bg-white transition-all text-on-surface"
                      placeholder="glowhitedental24@gmail.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant ml-1">Service of Interest</label>
                  <select 
                    className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-1 focus:ring-primary/40 focus:bg-white transition-all text-on-surface"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option>General Consultation</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Veneers</option>
                    <option>Dental Implants</option>
                    <option>Orthodontics</option>
                    <option>Teeth Whitening</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant ml-1">Your Message</label>
                  <textarea
                    required
                    className="w-full px-6 py-4 rounded-xl bg-surface-container-low border-none focus:ring-1 focus:ring-primary/40 focus:bg-white transition-all text-on-surface resize-none"
                    placeholder="How can we help you achieve your perfect smile?"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button 
                  disabled={status === "loading"}
                  className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:translate-y-0"
                >
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </section>

          {/* Contact Details Sidebar */}
          <aside className="md:col-span-5 space-y-6">
            {/* Communication Card */}
            <div className="bg-primary text-on-primary rounded-[2rem] p-8 md:p-10 relative overflow-hidden group shadow-2xl">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
              <h3 className="text-2xl font-headline font-bold mb-8 relative z-10">Direct Contact</h3>
              <div className="space-y-8 relative z-10 font-body">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">call</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest mb-1">Phone Lines</p>
                    <p className="text-xl font-headline font-medium">053 964 7100</p>
                    <p className="text-xl font-headline font-medium">027 184 2345</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">mail</span>
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest mb-1">Email</p>
                    <p className="text-xl font-headline font-medium">glowhitedental24@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-surface-container-high rounded-[2rem] p-8 border border-outline-variant/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <h3 className="text-lg font-bold text-on-surface font-headline">Clinic Hours</h3>
              </div>
              <ul className="space-y-4 font-body">
                <li className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant font-medium">Monday — Thursday</span>
                  <span className="text-on-surface font-bold">8:00 AM — 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant font-medium">Friday — Saturday</span>
                  <span className="text-on-surface font-bold">8:00 AM — 5:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant font-medium">Sunday</span>
                  <span className="text-on-surface font-bold">2:00 PM — 6:00 PM</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Location Section */}
        <section className="mt-20">
          <div className="bg-surface-container-low rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[500px] shadow-sm">
            <div className="p-10 md:p-20 flex flex-col justify-center">
              <span className="text-[12px] uppercase tracking-[0.2em] text-primary mb-4 block font-bold font-body">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-background leading-tight mb-8">
                Located in the heart <br /> of North Legon.
              </h2>
              <div className="space-y-6 font-body">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div>
                    <p className="text-xl text-on-surface font-semibold">Glowhite Dental Clinic</p>
                    <address className="not-italic text-on-surface-variant leading-relaxed">
                      North Legon on the Madina Ritz Junction Agbogba Road,<br />
                      Adjacent the new Benab Oil Filling Station,<br />
                      Accra
                    </address>
                  </div>
                </div>
                <a
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline group"
                  href="https://www.google.com/maps?q=5.6869645925391135,-0.189538546566105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="relative min-h-[350px] lg:min-h-full overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=5.6869645925391135,-0.189538546566105&z=17&output=embed"
                title="GloWhite Dental Clinic Location"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0, minHeight: 350 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-surface-container-lowest rounded-[3rem] p-8 md:p-12 shadow-xl border border-outline-variant/10">
          <div className="w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-inner">
            <img
              alt="Clinic Interior"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdM_-46e_uvSCZTq-UGFT816Gdx3pdNWhWMLAYe-y1pbCmicTscSH0m0eMAe2kGP_9gCBzO5ewE0HJqbe7lLj-QHkuaJTCOc7_gxsNcnNH1BcTGkbGFiMHH4TcKBhFCYd5Cjbcsh7OzVaQ6zFaqx6vSONfGU1NNhaFfn4Ha5SNL_JDTrL5FBOE633vTEyvneBYpAxPekfwZkiKlNXU1QqSEkSOT792cqHESb5Z8GAkpubOpTpf0kSkakitTL799_ZCzXyCPUo"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-headline font-bold text-on-surface">Precision in Every Detail.</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed font-body">
              Our facility is designed to provide a sanctuary from the stress of clinical procedures. From our ergonomic chairs to our advanced diagnostic imaging, every element serves your comfort and health.
            </p>
            <div className="flex gap-6 font-body font-bold text-primary">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>State-of-the-art</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Comfort Focused</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
