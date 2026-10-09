# SMS trial test

The default request matches the successful Twilio console example supplied on 2026-10-09: To and From in E.164 format, and Body=sms_appointment_reminders. A new trial does not support a personalised message with a WhatsApp URL. Reference: https://www.twilio.com/docs/usage/trials/try-out-sms

Required Production variables remain TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM and SMS_TEST_ALLOWED. No new variable is needed for trial mode. Credentials must be from the account used for the successful console example. The allowlist remains enforced server-side.

After merging and deployment, open /private/sms-test and complete the project questionnaire. The form sends the structured answers through the existing /api/contact email endpoint (RESEND_API_KEY). Start with SMS unchecked and verify receipt in the configured inbox. For an SMS test, select the separate SMS option and enter the allowlisted verified number, then submit once. SMS is requested only after the email provider accepts the enquiry. A failed SMS does not resend the accepted email; the submit button remains disabled after email acceptance. Reload only when intentionally starting a new test. The production contact form is unchanged. Check actual receipt on the phone and Twilio logs. The API response confirms acceptance, not delivery. Error responses expose a numeric Twilio code without credentials, names, phone numbers or the provider's raw error text. Invalid requests must never call Twilio.

For a future upgraded account, SMS_TEST_MODE=custom enables the original personalised WhatsApp-link text. Configure TWILIO_FROM with an SMS-capable sender belonging to that upgraded account, retain the allowlist and redeploy. Full public use requires separate design of access control, server-side rate limits, privacy information and consent; this is a test page, not a production messaging service.

Automated verification uses mocked Twilio responses and sends no real SMS. Real trial-account acceptance and delivery must be checked after deployment; they cannot be guaranteed by local tests.

The questionnaire is in English, uses responsive columns, and remains noindex and outside the sitemap. The URL is publicly reachable: noindex is not access protection. Automated questionnaire checks cover email-only submissions, email-before-SMS ordering, rejection and network failures, validation, maximum message length and duplicate-click prevention using mocked requests. No real emails or SMS are sent by these checks.
