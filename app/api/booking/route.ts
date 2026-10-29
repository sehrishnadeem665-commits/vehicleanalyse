import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';

const bookingSchema = z.object({
  clientName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phoneNumber: z.string().trim().min(1).max(40),
  packageType: z.enum(['basic', 'standard', 'premium']),
  vehicleType: z.string().trim().min(1).max(80),
  vinPlateNumber: z.string().trim().max(120).optional().or(z.literal('')),
  instruction: z.string().trim().max(2000).optional().or(z.literal('')),
  website: z.string().max(200).optional(),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please submit valid form data.' }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check your form details and try again.' }, { status: 400 });
  }

  const data = parsed.data;
  if (data.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_EMAIL;

  if (!smtpHost || !smtpUser || !smtpPassword || !recipient || !Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
    return NextResponse.json(
      { error: 'Email delivery is not configured. Please contact support.' },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: smtpUser, pass: smtpPassword },
  });

  const subject = `New booking request: ${data.vehicleType}`;
  const notes = data.instruction || 'No additional instructions.';
  const vinPlate = data.vinPlateNumber || 'Not provided';

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: recipient,
      replyTo: data.email,
      subject,
      text: [
        'New vehicle booking request',
        '',
        `Client Name: ${data.clientName}`,
        `Email: ${data.email}`,
        `Phone Number: ${data.phoneNumber}`,
        `Package: ${data.packageType.charAt(0).toUpperCase()}${data.packageType.slice(1)}`,
        `Vehicle Type: ${data.vehicleType}`,
        `VIN/Plate Number: ${vinPlate}`,
        '',
        'Instruction:',
        notes,
      ].join('\n'),
      html: `
        <h2>New vehicle booking request</h2>
        <p><strong>Client Name:</strong> ${escapeHtml(data.clientName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone Number:</strong> ${escapeHtml(data.phoneNumber)}</p>
        <p><strong>Package:</strong> ${escapeHtml(data.packageType.charAt(0).toUpperCase() + data.packageType.slice(1))}</p>
        <p><strong>Vehicle Type:</strong> ${escapeHtml(data.vehicleType)}</p>
        <p><strong>VIN/Plate Number:</strong> ${escapeHtml(vinPlate)}</p>
        <p><strong>Instruction:</strong><br>${escapeHtml(notes).replace(/\n/g, '<br>')}</p>
      `,
    });

    await transporter.sendMail({
      from: smtpUser,
      to: data.email,
      replyTo: recipient,
      subject: 'We received your vehicle check request',
      text: [
        `Hi ${data.clientName},`,
        '',
        'Thanks for contacting Vehicle Analyse. We have received your vehicle details and will review them shortly.',
        '',
        `Package: ${data.packageType.charAt(0).toUpperCase()}${data.packageType.slice(1)}`,
        `Vehicle Type: ${data.vehicleType}`,
        `VIN/Plate Number: ${vinPlate}`,
        '',
        'If you did not submit this request, please ignore this email.',
      ].join('\n'),
    });

    return NextResponse.json({ ok: true, emailSent: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown email error';
    console.error('Booking email failed:', message);
    return NextResponse.json({ error: 'We could not send your booking details. Please try again.' }, { status: 500 });
  }
}
