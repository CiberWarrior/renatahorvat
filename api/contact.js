import { Resend } from 'resend';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    // Initialize Resend
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error.'
      });
    }

    const resend = new Resend(apiKey);

    // Get form data
    const { name, email, message, gdprConsent } = req.body;

    // Validate required fields with specific messages
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name and surname is required. Please enter both your first and last name.'
      });
    }

    if (name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Name must be at least 2 characters long.'
      });
    }

    if (!name.trim().includes(' ')) {
      return res.status(400).json({
        success: false,
        message: 'Please enter both your name and surname (e.g., "John Doe").'
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required. Please enter your email address.'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address. Format should be: example@domain.com'
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message is required. Please tell me about your project.'
      });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters long. Please provide more details about your project.'
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: 'Message cannot exceed 1000 characters. Please shorten your message.'
      });
    }

    // Validate GDPR consent
    if (!gdprConsent) {
      return res.status(400).json({
        success: false,
        message: 'You must agree to the Privacy Policy to submit this form. Please check the consent checkbox.'
      });
    }

    // Send email using Resend
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
      `
    });

    // Handle Resend errors
    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while sending your message. Please try again.'
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.'
    });
  }
}
