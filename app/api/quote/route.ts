import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      product,
      capacity,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"JIN YANG HU Website" <${process.env.SMTP_USER}>`,
      to: process.env.QUOTE_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Quote Request - ${product || "General Inquiry"}`,

      text: `
New quotation request

Name: ${name}
Company: ${company || "-"}
Email: ${email}
Phone / WhatsApp: ${phone || "-"}
Product / Model: ${product || "-"}
Required Load Capacity: ${capacity || "-"}

Message:
${message}
      `,

      html: `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto">
          <div style="background:#111;padding:24px;color:white">
            <h2 style="margin:0;color:#ff6500">New Quote Request</h2>
            <p style="margin:8px 0 0;color:#bbb">
              Received from jinyanghulifting.com
            </p>
          </div>

          <div style="padding:25px;border:1px solid #ddd">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company || "-"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone / WhatsApp:</strong> ${phone || "-"}</p>
            <p><strong>Product / Model:</strong> ${product || "-"}</p>
            <p><strong>Required Load Capacity:</strong> ${capacity || "-"}</p>

            <hr style="margin:25px 0">

            <p><strong>Message:</strong></p>
            <p style="white-space:pre-line">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully.",
    });
  } catch (error) {
    console.error("QUOTE EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send quote request.",
      },
      { status: 500 }
    );
  }
}