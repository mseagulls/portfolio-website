import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not configured on the server.' },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json().catch(() => ({}));
    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          error:
            'Please provide all required fields (name, email, and message).',
        },
        { status: 400 },
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    const recipientEmail = 'mdspeebs@hotmail.com';
    const senderEmail =
      process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const topic = subject?.trim() || 'General Inquiry';

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: email.trim(),
      subject: `[Portfolio Inquiry] ${topic} - ${name.trim()}`,
      text: `New message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #e2e8f0; margin: 0; padding: 24px; }
              .container { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; overflow: hidden; }
              .header { background: linear-gradient(135deg, #2563eb, #1e40af); padding: 24px; text-align: center; color: #ffffff; }
              .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
              .body { padding: 24px; }
              .field { margin-bottom: 16px; }
              .label { font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 600; letter-spacing: 1px; margin-bottom: 4px; }
              .value { font-size: 15px; color: #ffffff; font-weight: 500; }
              .message-box { margin-top: 20px; padding: 16px; background: #1e293b; border-radius: 8px; border-left: 4px solid #3b82f6; }
              .message-content { white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #f1f5f9; margin-top: 8px; }
              .footer { padding: 16px 24px; background: #0f172a; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; font-size: 12px; color: #64748b; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 New Contact Form Submission</h1>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">Sender Name</div>
                  <div class="value">${escapeHtml(name.trim())}</div>
                </div>
                <div class="field">
                  <div class="label">Sender Email</div>
                  <div class="value"><a href="mailto:${escapeHtml(email.trim())}" style="color: #60a5fa; text-decoration: none;">${escapeHtml(email.trim())}</a></div>
                </div>
                <div class="field">
                  <div class="label">Inquiry Topic</div>
                  <div class="value">${escapeHtml(topic)}</div>
                </div>
                <div class="message-box">
                  <div class="label" style="color: #93c5fd;">Message Content</div>
                  <div class="message-content">${escapeHtml(message.trim())}</div>
                </div>
              </div>
              <div class="footer">
                This message was sent from Micah Peebles' Portfolio Website contact form.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email via Resend' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 },
    );
  } catch (err: any) {
    console.error('Contact Route Exception:', err);
    return NextResponse.json(
      {
        error:
          err?.message ||
          'An unexpected error occurred while sending your message.',
      },
      { status: 500 },
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
