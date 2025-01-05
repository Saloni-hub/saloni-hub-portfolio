import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    console.log("Received contact request");
    const { name, email, message } = await req.json();
    
    // Log the request data
    console.log({ name, email, message });

    // Check if all required fields are provided
    if (!name || !email || !message) {
      console.error('Validation failed: Missing fields');
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

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

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in contact API:', error);  // Log the actual error
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
