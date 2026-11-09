import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SuccessResponse = { ok: true };
type ErrorResponse = { ok: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY" });
  }

  if (!process.env.CONTACT_TO_EMAIL) {
    return res.status(500).json({ ok: false, error: "Missing CONTACT_TO_EMAIL" });
  }

  if (!process.env.CONTACT_FROM_EMAIL) {
    return res.status(500).json({ ok: false, error: "Missing CONTACT_FROM_EMAIL" });
  }

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name}: ${subject}`,
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend rejected email:", error);
      return res.status(500).json({ ok: false, error: error.message });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Resend send failed:", error);
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
}