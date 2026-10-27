// The only place where the public contact number lives. Change it here and it updates everywhere.
export const WHATSAPP_NUMBER = '385989801920'; // international format, digits only (+385 98 980 1920)
export const WHATSAPP_MESSAGE = 'Hello Renata, I found your website and would like to talk about a project.';
export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Same number, Croatian pre-filled text (no gendered wording)
export const WHATSAPP_MESSAGE_HR = 'Pozdrav Renata, javljam se preko vaše web stranice zbog razgovora o projektu.';
export const getWhatsappUrl = (locale: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(locale === 'hr' ? WHATSAPP_MESSAGE_HR : WHATSAPP_MESSAGE)}`;
