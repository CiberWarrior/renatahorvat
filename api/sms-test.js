// Practice endpoint for the hidden test page /private/sms-test.
// Defaults to a Twilio trial template. Custom WhatsApp-link text requires SMS_TEST_MODE=custom on an upgraded account.
// It does nothing until the Twilio variables are set,
// and it only sends to numbers listed in SMS_TEST_ALLOWED (comma-separated, e.g. +385...).
// Same number and wording as src/lib/contact.ts (this plain-JS function cannot import it)
const WHATSAPP_LINK = 'https://wa.me/385989801920?text=' + encodeURIComponent('Hello Renata, I found your website and would like to talk about a project.');
const phoneRegex = /^\+[1-9]\d{7,14}$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;
  const allowed = (process.env.SMS_TEST_ALLOWED || '')
    .split(',')
    .map((n) => n.trim())
    .filter(Boolean);

  if (!sid || !token || !from || allowed.length === 0) {
    return res.status(503).json({ success: false, message: 'The SMS test is not switched on.' });
  }

  const parsed = typeof req.body === 'string' ? safeParse(req.body) : req.body;
  const body = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  const firstName = String(body.firstName || '').trim().slice(0, 60);
  const lastName = String(body.lastName || '').trim().slice(0, 60);
  const phone = String(body.phone || '').replace(/[\s()-]/g, '');

  if (!firstName || !lastName) {
    return res.status(400).json({ success: false, message: 'Please enter first and last name.' });
  }
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ success: false, message: 'Enter the number with country code, e.g. +385981234567.' });
  }
  if (body.consent !== true) {
    return res.status(400).json({ success: false, message: 'Please confirm that you agree to receive the test SMS.' });
  }
  if (!allowed.includes(phone)) {
    return res.status(403).json({ success: false, message: 'This number is not on the test list.' });
  }

  const customMode = process.env.SMS_TEST_MODE === 'custom';
  const text = customMode
    ? `Hello ${firstName} ${lastName}, thank you for your message. Write to me on WhatsApp: ${WHATSAPP_LINK}`
    : 'sms_appointment_reminders';

  try {
    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${sid}:${token}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ To: phone, From: from, Body: text }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      // Return only the numeric error code, never provider text containing account data.
      const code = Number.isInteger(result?.code) && result.code > 0 ? result.code : null;
      const reason = response.status === 401 || response.status === 403
        ? 'Twilio rejected the request. Check the Account SID, Auth Token and account permissions.'
        : 'Twilio rejected the SMS request. Check the error code in Twilio.';
      return res.status(502).json({
        success: false,
        message: `${reason}${code ? ` Error code: ${code}.` : ''}`,
        ...(code ? { errorCode: code } : {}),
      });
    }
    if (result?.status === 'failed' || result?.status === 'undelivered') {
      return res.status(502).json({ success: false, message: 'Twilio reports that the SMS failed. Check its messaging logs.' });
    }
    return res.status(200).json({
      success: true,
      message: customMode
        ? 'Twilio accepted the SMS request. Check your phone; delivery is not yet confirmed.'
        : 'Twilio accepted the test SMS request. Check your phone for an appointment reminder template; it will not contain your name or a WhatsApp link.',
    });
  } catch {
    return res.status(502).json({ success: false, message: 'The connection to Twilio failed or timed out. Check the messaging logs before retrying.' });
  }
}

function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
}
