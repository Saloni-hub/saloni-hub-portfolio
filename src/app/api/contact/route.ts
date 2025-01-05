import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
// from
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pandeysaloni4july@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      to: '"Saloni Pandey" <pandeysaloni4july@gmail.com>',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };
    
    
    

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);  // Log the actual error for better debugging
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
