import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer transporter config for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,      // Your Gmail address
    pass: process.env.GMAIL_PASSKEY,      // Your Gmail App Password
  },
});

// HTML Email Template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px;">
      <h2 style="color: #6C63FF;">New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #6C63FF; padding-left: 10px;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #999;">Reply directly to respond.</p>
    </div>
  </div>
`;

// Send email with Nodemailer
async function sendEmail({ name, email, message }) {
  const mailOptions = {
    from: 'Portfolio Contact Form',
    to: process.env.EMAIL_ADDRESS,
    subject: `New message from ${name}`,
    html: generateEmailTemplate(name, email, message),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Email send error:', error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const emailSent = await sendEmail(payload);

    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: 'Email sent successfully!',
      });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send email.',
    }, { status: 500 });

  } catch (error) {
    console.error('Server Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while sending the message.',
    }, { status: 500 });
  }
}
