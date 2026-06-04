import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { sendInquiryNotification } from "@/lib/mailer";

const DATA_FILE = path.join(process.cwd(), "data", "inquiries.json");

function readInquiries(): any[] {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writeInquiries(items: any[]) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const inquiry = {
      name,
      email,
      service,
      message,
      createdAt: new Date().toISOString(),
    };

    try {
      const inquiries = readInquiries();
      inquiries.push(inquiry);
      writeInquiries(inquiries);
    } catch (err) {
      console.error("Failed to save inquiry (Normal on Vercel):", err);
    }

    await sendInquiryNotification({ name, email, service, message });

    return NextResponse.json({ message: "Inquiry sent successfully." }, { status: 200 });
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json({ error: "Failed to process inquiry." }, { status: 500 });
  }
}
