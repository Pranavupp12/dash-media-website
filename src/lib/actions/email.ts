'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // Dynamic check
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
    
    // Send mail
    await transporter.sendMail({
      from: `"Dash Media Careers" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: message, // Plain text fallback
      // ✅ Great usage of white-space: pre-wrap to keep your formatting
      html: `<div style="font-family: sans-serif; font-size: 16px; color: #333; white-space: pre-wrap;">${message}</div>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, error: "Failed to send email" };
  }
}