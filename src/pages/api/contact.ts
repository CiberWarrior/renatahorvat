import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  // Initialize Resend with API key from environment variables
  const apiKey = import.meta.env.RESEND_API_KEY;
  
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Server configuration error. Please contact the administrator.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
  
  const resend = new Resend(apiKey);
  
  try {
    // Parse the incoming JSON data
    const body = await request.json();
    const { name, email, message, gdprConsent } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Molim popunite sva obavezna polja.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate GDPR consent
    if (!gdprConsent) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Morate prihvatiti politiku privatnosti.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Unesite ispravnu email adresu.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Kontakt Forma <onboarding@resend.dev>', // Replace with your verified domain
      to: 'screatives.info@gmail.com', // Replace with your Gmail
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

    // Handle Resend errors
    if (error) {
      console.error('Resend Error:', error);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Došlo je do greške pri slanju poruke. Molim pokušajte ponovno.',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Hvala vam! Vaša poruka je uspješno poslana.',
        data,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Došlo je do greške. Molim pokušajte ponovno kasnije.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
