import { NextResponse } from "next/server";

// Google Apps Script Web App URL bound to the GDS Media leads sheet.
// Set in .env.local — see .env.local.example. Submissions are logged but not
// forwarded if this is unset, so local dev works without it.
const SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const website = formData.get("website"); // honeypot

    if (website) {
      // Spam detected via honeypot
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const submission = {
      name: String(name),
      phone: String(phone),
      email: String(email),
      message: String(message),
      submittedAt: new Date().toISOString(),
    };

    console.log("Contact form submission received:", submission);

    if (SHEET_WEBHOOK_URL) {
      try {
        const sheetResponse = await fetch(SHEET_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submission),
        });
        if (!sheetResponse.ok) {
          console.error("Google Sheet webhook responded with", sheetResponse.status);
        }
      } catch (sheetError) {
        // Don't fail the user's submission if the sheet is unreachable.
        console.error("Failed to forward submission to Google Sheet:", sheetError);
      }
    } else {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL is not set — submission was not forwarded to Google Sheets.");
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
