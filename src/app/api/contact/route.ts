import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    console.log("Received contact request");
    const { name, email, message } = await req.json();
    
    console.log({ name, email, message });

    if (!name || !email || !message) {
      console.error('Validation failed: Missing fields');
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    console.log('Creating transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pandeysaloni4july@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    });

    console.log('Transporter created');

    const mailOptions = {
      from: 'pandeysaloni4july@gmail.com',
      to: '"Saloni Pandey" <pandeysaloni4july@gmail.com>',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    console.log('Sending email...');
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in contact API:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

