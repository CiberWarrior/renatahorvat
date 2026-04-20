import type { APIRoute } from 'astro';
import { Resend } from 'resend';

/**
 * Local dev: Astro serves this at POST /api/contact when you run `npm run dev`.
 * Production (Vercel): static build does not emit this file; `api/contact.js` handles /api/contact.
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return new Response(
      JSON.stringify({ success: false, message: 'Expected JSON body.' }),
      { status: 415, headers: { 'Content-Type': 'application/json' } },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: 'Invalid JSON body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const gdprConsent = body.gdprConsent === true;

  if (!name) {
    return json(400, { success: false, message: 'Name is required.' });
  }
  if (name.length < 2) {
    return json(400, { success: false, message: 'Name must be at least 2 characters long.' });
  }
  if (!email) {
    return json(400, {
      success: false,
      message: 'Email address is required. Please enter your email address.',
    });
  }
  if (!emailRegex.test(email)) {
    return json(400, {
      success: false,
      message:
        'Please enter a valid email address. Format should be: example@domain.com',
    });
  }
  if (!message) {
    return json(400, {
      success: false,
      message: 'Message is required. Please tell me about your project.',
    });
  }
  if (message.trim().length < 10) {
    return json(400, {
      success: false,
      message:
        'Message must be at least 10 characters long. Please provide more details about your project.',
    });
  }
  if (message.length > 1000) {
    return json(400, {
      success: false,
      message: 'Message cannot exceed 1000 characters. Please shorten your message.',
    });
  }
  if (!gdprConsent) {
    return json(400, {
      success: false,
      message:
        'You must agree to the Privacy Policy to submit this form. Please check the consent checkbox.',
    });
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey || typeof apiKey !== 'string') {
    console.error('RESEND_API_KEY is not set (local dev needs .env)');
    return json(500, {
      success: false,
      message: 'Server configuration error.',
    });
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: 'Kontakt Forma <contact@renatahorvat.com>',
    to: 'screatives.info@gmail.com',
    replyTo: email,
    subject: `Nova poruka od ${name}`,
    html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: 600;
                color: #667eea;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .field-value {
                background: white;
                padding: 15px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
                word-break: break-word;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #667eea;
                margin-top: 10px;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📧 Nova Poruka s Kontakt Forme</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Ime i Prezime</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email Adresa</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                    ${email}
                  </a>
                </div>
              </div>
              <div class="field">
                <div class="field-label">Poruka</div>
                <div class="message-box">${message}</div>
              </div>
              <div class="footer">
                Poslano s renatahorvat.com
              </div>
            </div>
          </body>
        </html>
      `,
    text: `
Nova poruka od: ${name}
Email: ${email}

Poruka:
${message}

---
Poslano s renatahorvat.com
      `,
  });

  if (error) {
    console.error('Resend Error:', error);
    return json(500, {
      success: false,
      message: 'An error occurred while sending your message. Please try again.',
    });
  }

  return json(200, {
    success: true,
    message: 'Thank you! Your message has been sent successfully.',
    data,
  });
};

function json(status: number, payload: Record<string, unknown>) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
