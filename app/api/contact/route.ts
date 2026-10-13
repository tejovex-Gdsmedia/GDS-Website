import { NextResponse } from "next/server";

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

    // TODO: Send email or forward to Google Sheet / CRM destination
    console.log("Contact form submission received:", { name, phone, email, message });

    return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
