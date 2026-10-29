import nodemailer from 'nodemailer';
import mysql, { type Pool } from 'mysql2/promise';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40),
  subject: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(5000),
  website: z.string().max(200).optional(),
});

let pool: Pool | undefined;

function getPool() {
  if (pool) return pool;

  const host = process.env.MYSQL_HOST;
  const user = process.env.MYSQL_USER;
  const password = process.env.MYSQL_PASSWORD;
  const database = process.env.MYSQL_DATABASE;
  const port = Number(process.env.MYSQL_PORT ?? 3306);

  if (
    !host ||
    !user ||
    password === undefined ||
    !database ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535
  ) {
    throw new Error('MySQL contact storage is not configured.');
  }

  pool = mysql.createPool({
    host,
    port,
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit: 5,
    connectTimeout: 10_000,
    ssl:
      process.env.MYSQL_SSL === 'true'
        ? { rejectUnauthorized: true }
        : undefined,
  });

  return pool;
}

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
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 16_000) {
    return NextResponse.json(
      { error: 'The submitted message is too large.' },
      { status: 413 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Please submit the form using valid data.' },
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Please check your details and try again.' },
      { status: 400 }
    );
  }

  const submission = result.data;
  if (submission.website?.trim()) {
    return NextResponse.json({ ok: true, emailSent: true });
  }

  let database: Pool | undefined;
  let submissionId: number | undefined;
  let saved = false;
  try {
    database = getPool();
    const [insertResult] = await database.execute<mysql.ResultSetHeader>(
      `INSERT INTO contact_submissions (name, email, phone, subject, message)
       VALUES (?, ?, ?, ?, ?)`,
      [
        submission.name,
        submission.email,
        submission.phone || null,
        submission.subject,
        submission.message,
      ]
    );
    submissionId = insertResult.insertId;
    saved = true;
  } catch (storageError) {
    console.error(
      'Could not save contact form submission:',
      storageError instanceof Error ? storageError.message : 'Unknown database error'
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_EMAIL;

  if (
    !smtpHost ||
    !Number.isInteger(smtpPort) ||
    smtpPort < 1 ||
    smtpPort > 65535 ||
    !smtpUser ||
    !smtpPassword ||
    !recipient
  ) {
    console.error('Contact form email delivery is not configured.');
    if (!saved) {
      return NextResponse.json(
        { error: 'We could not deliver or save your message. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true, saved, emailSent: false, confirmationSent: false });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: smtpUser, pass: smtpPassword },
  });

  const safeName = escapeHtml(submission.name);
  const safeEmail = escapeHtml(submission.email);
  const safePhone = escapeHtml(submission.phone || 'Not provided');
  const safeSubject = escapeHtml(submission.subject);
  const safeMessage = escapeHtml(submission.message).replace(/\n/g, '<br>');
  let emailSent = false;
  let confirmationSent = false;

  try {
    const mailResult = await transporter.sendMail({
      from: smtpUser,
      to: recipient,
      replyTo: submission.email,
      subject: `Vehicle Analyse contact: ${submission.subject}`,
      text: [
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Phone: ${submission.phone || 'Not provided'}`,
        `Subject: ${submission.subject}`,
        '',
        submission.message,
      ].join('\n'),
      html: `
        <h2>New Vehicle Analyse contact message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br>${safeMessage}</p>
      `,
    });

    emailSent = mailResult.accepted.some((address) => {
      return address.toLowerCase() === recipient.toLowerCase();
    });

    if (!emailSent) {
      console.error(
        `Contact submission${submissionId ? ` ${submissionId}` : ''} was not accepted by SMTP for its configured recipient.`
      );
    }
  } catch (emailError) {
    const message =
      emailError instanceof Error ? emailError.message : 'Unknown email error';
    console.error(
      `Contact submission${submissionId ? ` ${submissionId}` : ''} SMTP delivery failed:`,
      message
    );
  }

  try {
    const confirmationResult = await transporter.sendMail({
      from: smtpUser,
      to: submission.email,
      replyTo: recipient,
      subject: 'We received your Vehicle Analyse enquiry',
      text: [
        `Hello ${submission.name},`,
        '',
        `Thanks for contacting Vehicle Analyse. We received your enquiry about "${submission.subject}" and will get back to you within 24 hours.`,
        '',
        'Your message:',
        submission.message,
        '',
        'If you did not send this enquiry, you can ignore this email.',
      ].join('\n'),
    });

    confirmationSent = confirmationResult.accepted.some((address) => {
      return address.toLowerCase() === submission.email.toLowerCase();
    });

    if (!confirmationSent) {
      console.error(
        `Contact submission${submissionId ? ` ${submissionId}` : ''} was not accepted by SMTP for its confirmation recipient.`
      );
    }
  } catch (emailError) {
    const message =
      emailError instanceof Error ? emailError.message : 'Unknown email error';
    console.error(
      `Contact submission${submissionId ? ` ${submissionId}` : ''} confirmation email delivery failed:`,
      message
    );
  }

  if (emailSent && database && submissionId !== undefined) {
    try {
      await database.execute(
        `UPDATE contact_submissions
         SET email_sent = TRUE, email_sent_at = CURRENT_TIMESTAMP
         WHERE id = ?`,
        [submissionId]
      );
    } catch (updateError) {
      console.error(
        `SMTP accepted contact submission ${submissionId}, but its status could not be saved:`,
        updateError instanceof Error ? updateError.message : 'Unknown database error'
      );
    }
  }

  if (!saved && !emailSent) {
    return NextResponse.json(
      { error: 'We could not deliver or save your message. Please try again later.' },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true, saved, emailSent, confirmationSent });
}
