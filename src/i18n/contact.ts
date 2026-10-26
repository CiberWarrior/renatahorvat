import type { Locale } from './config';

// Messages used by the form script in the browser (passed to it through a data attribute)
export interface ContactScriptMessages {
  nameRequired: string;
  nameShort: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  messageShort: string;
  messageLong: string;
  gdprRequired: string;
  sendFailed: string;
  tryAgain: string;
  /** English shows the message returned by the server; other languages show their own text */
  useServerMessage: boolean;
}

export interface ContactContent {
  title: string;
  description: string;
  keywords: string;
  schemaName: string;
  schemaJobTitle: string;
  eyebrow: string;
  heading: string;
  intro: string;
  formLabel: string;
  successTitle: string;
  successText: string;
  errorTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  typeLabel: string;
  optional: string;
  /** value is sent to the server and stays in English; label is what visitors see */
  types: { value: string; label: string }[];
  messageLabel: string;
  messagePlaceholder: string;
  consentBefore: string;
  consentLink: string;
  consentAfter: string;
  submit: string;
  sending: string;
  directHeading: string;
  whatsapp: string;
  email: string;
  responseHeading: string;
  responseText: string;
  firstHeading: string;
  firstText: string;
  script: ContactScriptMessages;
}

const en: ContactContent = {
  title: 'Contact – Renata Horvat | Web Designer Zagreb',
  description:
    'Contact Renata Horvat, web designer in Zagreb, about a website, design, illustration, advertising or social media project. The first conversation is free.',
  keywords:
    'contact Renata Horvat, web designer Zagreb, web design Croatia, conference website, society website, university website, small business website, graphic designer Zagreb, Renata Horvat',
  schemaName: 'Contact Renata Horvat',
  schemaJobTitle: 'Web & Graphic Designer',
  eyebrow: 'Contact',
  heading: "Let's talk about your project",
  intro:
    'You do not need a detailed brief. Whether you have a project in mind or an early idea, send me a message and we can talk it through.',
  formLabel: 'Contact form',
  successTitle: 'Message sent',
  successText: "Thank you. I'll get back to you soon.",
  errorTitle: "The message wasn't sent",
  nameLabel: 'Your name',
  namePlaceholder: 'Full name',
  emailLabel: 'Email',
  emailPlaceholder: 'your.email@example.com',
  typeLabel: 'What kind of project is it?',
  optional: '(optional)',
  types: [
    { value: 'Website', label: 'Website' },
    { value: 'Conference site', label: 'Conference site' },
    { value: 'E-learning', label: 'E-learning' },
    { value: 'Graphic design', label: 'Graphic design' },
    { value: 'Illustration', label: 'Illustration' },
    { value: 'Advertising', label: 'Advertising' },
    { value: 'Social media', label: 'Social media' },
    { value: 'Not sure yet', label: 'Not sure yet' },
  ],
  messageLabel: 'Message',
  messagePlaceholder: "Tell me what you're thinking about, even if it's just an idea.",
  consentBefore: 'I have read the ',
  consentLink: 'Privacy Policy',
  consentAfter:
    '. Your details are used to respond to your enquiry, as explained in the policy. ',
  submit: 'Send message',
  sending: 'Sending…',
  directHeading: 'Prefer to contact me directly?',
  whatsapp: 'Message me on WhatsApp',
  email: 'Email',
  responseHeading: 'Response time',
  responseText: 'Within a day or two. I reply personally.',
  firstHeading: 'First conversation',
  firstText: 'Free, with no commitment.',
  script: {
    nameRequired: 'Please enter your name.',
    nameShort: 'Your name must be at least 2 characters long.',
    emailRequired: 'Please enter your email address.',
    emailInvalid: 'Please enter a valid email address (e.g., example@domain.com).',
    messageRequired: 'Please enter a message.',
    messageShort: 'Your message must be at least 10 characters long.',
    messageLong: 'Your message cannot exceed 1000 characters.',
    gdprRequired: 'Please confirm that you have read the Privacy Policy before submitting this form.',
    sendFailed: 'Your message could not be sent. Please try again.',
    tryAgain: 'Please try again or email me at screatives.info@gmail.com.',
    useServerMessage: true,
  },
};

// Croatian draft. Feminine/masculine forms are avoided where possible; the consent line uses "pročitao/pročitala".
const hr: ContactContent = {
  title: 'Kontakt – Renata Horvat | Web dizajnerica Zagreb',
  description:
    'Kontaktirajte Renatu Horvat, web dizajnericu iz Zagreba, u vezi s web stranicom, dizajnom, ilustracijom, oglašavanjem ili projektom za društvene mreže. Prvi razgovor je besplatan.',
  keywords:
    'kontakt Renata Horvat, web dizajnerica Zagreb, web dizajn Hrvatska, web stranica za konferenciju, web stranica za društvo, web stranica za sveučilište, web stranica za malu tvrtku, grafički dizajner Zagreb, Renata Horvat',
  schemaName: 'Kontaktirajte Renatu Horvat',
  schemaJobTitle: 'Web i grafička dizajnerica',
  eyebrow: 'Kontakt',
  heading: 'Razgovarajmo o vašem projektu',
  intro:
    'Ne treba vam detaljan opis projekta. Imate li projekt na umu ili tek ranu ideju, pošaljite mi poruku pa ćemo o tome razgovarati.',
  formLabel: 'Kontaktni obrazac',
  successTitle: 'Poruka je poslana',
  successText: 'Hvala. Javit ću vam se uskoro.',
  errorTitle: 'Poruka nije poslana',
  nameLabel: 'Vaše ime',
  namePlaceholder: 'Ime i prezime',
  emailLabel: 'E-pošta',
  emailPlaceholder: 'vasa.eposta@primjer.com',
  typeLabel: 'O kakvom je projektu riječ?',
  optional: '(neobavezno)',
  types: [
    { value: 'Website', label: 'Web stranica' },
    { value: 'Conference site', label: 'Web stranica konferencije' },
    { value: 'E-learning', label: 'E-učenje' },
    { value: 'Graphic design', label: 'Grafički dizajn' },
    { value: 'Illustration', label: 'Ilustracija' },
    { value: 'Advertising', label: 'Oglašavanje' },
    { value: 'Social media', label: 'Društvene mreže' },
    { value: 'Not sure yet', label: 'Još ne znam' },
  ],
  messageLabel: 'Poruka',
  messagePlaceholder: 'Napišite mi što imate na umu, čak i ako je to tek ideja.',
  consentBefore: 'Pročitao/pročitala sam ',
  consentLink: 'Politiku privatnosti',
  consentAfter:
    '. Vaši se podaci koriste za odgovor na vaš upit, kako je objašnjeno u politici. ',
  submit: 'Pošaljite poruku',
  sending: 'Šaljem…',
  directHeading: 'Radije biste me kontaktirali izravno?',
  whatsapp: 'Pošaljite mi poruku na WhatsAppu',
  email: 'E-pošta',
  responseHeading: 'Vrijeme odgovora',
  responseText: 'U roku od dan-dva. Odgovaram osobno.',
  firstHeading: 'Prvi razgovor',
  firstText: 'Besplatan i bez obveze.',
  script: {
    nameRequired: 'Unesite svoje ime.',
    nameShort: 'Ime mora imati najmanje 2 znaka.',
    emailRequired: 'Unesite svoju adresu e-pošte.',
    emailInvalid: 'Unesite ispravnu adresu e-pošte (npr. primjer@domena.com).',
    messageRequired: 'Unesite poruku.',
    messageShort: 'Poruka mora imati najmanje 10 znakova.',
    messageLong: 'Poruka ne smije biti dulja od 1000 znakova.',
    gdprRequired: 'Prije slanja potvrdite da ste pročitali Politiku privatnosti.',
    sendFailed: 'Poruku nije bilo moguće poslati. Pokušajte ponovno.',
    tryAgain: 'Pokušajte ponovno ili mi pišite na screatives.info@gmail.com.',
    useServerMessage: false,
  },
};

export const contactContent: Record<Locale, ContactContent> = { en, hr };
