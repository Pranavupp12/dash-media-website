'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailPayload {
  to: string;
  subject: string;
  message: string;
}

export async function sendCandidateEmail({ to, subject, message }: EmailPayload) {
  try {
    // Verify connection config
    await transporter.verify();

    // Send mail
    await transporter.sendMail({
      from: `"Dash Media Careers" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: message, // Plain text version
      html: `<div style="font-family: sans-serif; white-space: pre-wrap;">${message}</div>`, // HTML version preserves spacing
    });

    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, error: "Failed to send email" };
  }
}