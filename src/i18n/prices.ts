import type { Locale } from './config';

/** Quiz answer id for each offer; the quiz opens with that answer already chosen (see QuizPage.astro). */
export type QuizNeed = 'one-page' | 'small-site' | 'custom' | 'existing' | 'automation';

/** Small line icons for the other services, drawn in PricesPage.astro. */
export type ServiceIcon = 'conference' | 'book' | 'chart' | 'pen' | 'megaphone' | 'chat';

export interface PricesContent {
  title: string;
  description: string;
  keywords: string;
  eyebrow: string;
  heading: string;
  intro: string;
  choicesLabel: string;
  choices: { id: string; title: string; text: string }[];
  from: string;
  quote: string;
  includesLabel: string;
  newHeading: string;
  newIntro: string;
  packages: { name: string; price: string; for: string; pages: string; includes: string[]; need: QuizNeed }[];
  custom: { eyebrow: string; name: string; text: string; priceNote: string; button: string };
  notes: string[];
  existingHeading: string;
  existingIntro: string;
  existing: { name: string; text: string; need: QuizNeed }[];
  otherHeading: string;
  otherIntro: string;
  other: { name: string; text: string; also?: string; icon: ServiceIcon }[];
  adNote: string;
  afterHeading: string;
  afterText: string;
  afterLaunch: string[];
  stepsHeading: string;
  steps: { title: string; text: string }[];
  ctaHeading: string;
  ctaText: string;
  ctaContact: string;
}

const en: PricesContent = {
  title: 'Website Design Pricing | Renata Horvat',
  description:
    'Website prices from €500. A larger site, optimisation and one automated process are quoted after a short conversation. Zagreb, Croatia.',
  keywords:
    'academic website pricing, scientific society website cost, conference website price, e-learning platform price, research project website, web design pricing Croatia, website cost Zagreb',
  eyebrow: 'Pricing',
  heading: 'Prices and packages',
  intro:
    'The price is a starting point. We agree the exact scope in a short conversation, with no obligation.',
  choicesLabel: 'What do you need?',
  choices: [
    { id: 'new', title: 'A new website', text: 'One page or a small website, from €500.' },
    { id: 'existing', title: 'I already have a website', text: 'Optimisation or automating one process.' },
    { id: 'other', title: 'Something else', text: 'Conference, e-learning, design, advertising.' },
  ],
  from: 'from ',
  quote: 'Ask for a quote',
  includesLabel: 'Included',
  newHeading: 'A new website',
  newIntro: 'Choose the package closest to what you need. We can adjust it when we talk.',
  packages: [
    {
      name: 'One page',
      price: '€500',
      for: 'A research project, a trade, a salon or a sole trader.',
      pages: '1 page',
      includes: [
        'One page',
        'Contact form',
        'Placing your logo',
        'Connecting your own web address',
      ],
      need: 'one-page',
    },
    {
      name: 'Small website',
      price: '€1,000',
      for: 'A society, a research group, or a trade with several services.',
      pages: 'Up to 5 pages',
      includes: [
        'Everything in the One page package',
        'Up to five pages',
        'News and events, if you need them',
      ],
      need: 'small-site',
    },
  ],
  custom: {
    eyebrow: 'Made to measure',
    name: 'Have an idea but not sure how to make it real?',
    text: 'Tell me about it and we will go through it together, question by question, until it is clear what needs to be built.',
    priceNote: 'Larger websites, for example for an institution, start from €1,800.',
    button: 'Tell me your idea',
  },
  notes: [
    'The exact scope is agreed for each project. Work outside the package scope is quoted separately. All prices are stated in euros.',
  ],
  existingHeading: 'Do you already have a website?',
  existingIntro: 'I will look at what you have and send you a quote after we talk.',
  existing: [
    {
      name: 'Optimising a site you already have',
      text: 'Clearer, faster, and easier to find. This is not a promise of the top place on Google.',
      need: 'existing',
    },
    {
      name: 'Automating one process',
      text: 'One job you keep copying, such as an application or an enquiry, goes to your inbox or a table on its own.',
      need: 'automation',
    },
  ],
  otherHeading: 'Other services',
  otherIntro: 'After an introductory meeting I will send you a quote tailored to your project.',
  other: [
    {
      name: 'Conference & congress websites',
      text: 'Programme, speakers, registration and abstract submission.',
      icon: 'conference',
    },
    {
      name: 'E-textbooks & e-learning',
      text: 'Online course material with clear navigation, quizzes and diagrams.',
      icon: 'book',
    },
    {
      name: 'Scientific figures & infographics',
      text: 'Diagrams for papers, posters, lectures and textbooks.',
      icon: 'chart',
    },
    {
      name: 'Graphic design & illustration',
      text: 'Illustration and ad design, promotional material for your organisation or company.',
      icon: 'pen',
      also: 'Logo design.',
    },
    {
      name: 'Digital advertising',
      text: 'Ad design and campaign management for Facebook and Google Ads.',
      icon: 'megaphone',
    },
    {
      name: 'Social media management',
      text: 'Day-to-day management of your social media accounts.',
      icon: 'chat',
    },
  ],
  adNote: 'Advertising spend is separate from design and campaign management fees and is agreed before work begins.',
  afterHeading: 'After launch',
  afterText: 'Support is agreed and priced separately, either as a one-off service or as ongoing maintenance.',
  afterLaunch: [
    'Content and software updates',
    'Help with hosting and domain names',
    'Design-only work for teams that already have a developer',
  ],
  stepsHeading: 'How do you get a quote?',
  steps: [
    {
      title: 'Initial conversation',
      text: 'We talk through what you need. You do not need a detailed brief, and there is no obligation to proceed.',
    },
    {
      title: 'Quote',
      text: 'After we talk, I prepare a quote for your project so you can decide and plan your budget more easily.',
    },
    {
      title: 'Build and launch',
      text: 'I build the website and publish it once you have approved it.',
    },
  ],
  ctaHeading: 'Not sure which option is right for you?',
  ctaText: 'Take the short quiz or send me a message. I will get back to you with a suggestion, with no obligation.',
  ctaContact: 'Send a message',
};

// Croatian draft. Amounts are the same as in English; only the number format is Croatian (1.000 €).
const hr: PricesContent = {
  title: 'Cjenik izrade web stranica | Renata Horvat',
  description:
    'Cijene web stranica od 500 €. Veća stranica, optimizacija i automatizacija jednog procesa dobivaju ponudu nakon kratkog razgovora. Zagreb, Hrvatska.',
  keywords:
    'cijena akademske web stranice, cijena web stranice znanstvenog društva, cijena web stranice konferencije, cijena platforme za e-učenje, web stranica istraživačkog projekta, cijene web dizajna Hrvatska, cijena web stranice Zagreb',
  eyebrow: 'Cjenik',
  heading: 'Cijene i paketi',
  intro:
    'Cijena je početna. Točan opseg dogovaramo u kratkom razgovoru, bez obveze.',
  choicesLabel: 'Što vam treba?',
  choices: [
    { id: 'new', title: 'Nova web stranica', text: 'Jedna stranica ili mala web stranica, od 500 €.' },
    { id: 'existing', title: 'Već imam web stranicu', text: 'Optimizacija ili automatizacija jednog procesa.' },
    { id: 'other', title: 'Nešto drugo', text: 'Konferencija, e-učenje, dizajn, oglašavanje.' },
  ],
  from: 'od ',
  quote: 'Zatražite ponudu',
  includesLabel: 'Uključuje',
  newHeading: 'Nova web stranica',
  newIntro: 'Odaberite paket koji je najbliži onome što trebate. Prilagodit ćemo ga u razgovoru.',
  packages: [
    {
      name: 'Jedna stranica',
      price: '500 €',
      for: 'Istraživački projekt, obrt, frizer ili paušalac.',
      pages: '1 stranica',
      includes: [
        'Jedna stranica',
        'Kontaktni obrazac',
        'Postavljanje vašeg logotipa',
        'Povezivanje vlastite web adrese',
      ],
      need: 'one-page',
    },
    {
      name: 'Mala web stranica',
      price: '1.000 €',
      for: 'Društvo, istraživačka skupina ili obrt s više usluga.',
      pages: 'Do 5 stranica',
      includes: [
        'Sve iz paketa Jedna stranica',
        'Do pet stranica',
        'Novosti i događanja, ako ih treba',
      ],
      need: 'small-site',
    },
  ],
  custom: {
    eyebrow: 'Po mjeri',
    name: 'Imate ideju, ali niste sigurni kako je ostvariti?',
    text: 'Ispričajte mi je i proći ćemo je zajedno, pitanje po pitanje, dok ne bude jasno što treba napraviti.',
    priceNote: 'Veće web stranice, na primjer za ustanovu, počinju od 1.800 €.',
    button: 'Ispričajte mi ideju',
  },
  notes: [
    'Točan opseg dogovaramo za svaki projekt. Za rad izvan opsega paketa izrađuje se zasebna ponuda. Sve cijene izražene su u eurima.',
  ],
  existingHeading: 'Već imate web stranicu?',
  existingIntro: 'Pogledat ću što imate i nakon razgovora poslati vam ponudu.',
  existing: [
    {
      name: 'Optimizacija postojeće stranice',
      text: 'Da je jasnija, brža i da je se lakše nađe. To nije obećanje prvog mjesta na Googleu.',
      need: 'existing',
    },
    {
      name: 'Automatizacija jednog procesa',
      text: 'Jedan posao koji se stalno prepisuje, na primjer prijava ili upit, neka sam ide u poštu ili tablicu.',
      need: 'automation',
    },
  ],
  otherHeading: 'Ostale usluge',
  otherIntro: 'Nakon informativnog sastanka poslat ću vam ponudu prilagođenu vašem projektu.',
  other: [
    {
      name: 'Web stranice konferencija i kongresa',
      text: 'Program, predavači, registracija i prijava sažetaka.',
      icon: 'conference',
    },
    {
      name: 'E-udžbenici i e-učenje',
      text: 'Online nastavni materijali s jasnom navigacijom, kvizovima i dijagramima.',
      icon: 'book',
    },
    {
      name: 'Znanstveni prikazi i infografike',
      text: 'Dijagrami za radove, postere, predavanja i udžbenike.',
      icon: 'chart',
    },
    {
      name: 'Grafički dizajn i ilustracija',
      text: 'Ilustracija i dizajn oglasa, promotivni materijal za vašu organizaciju ili tvrtku.',
      icon: 'pen',
      also: 'Izrada logotipa.',
    },
    {
      name: 'Digitalno oglašavanje',
      text: 'Dizajn oglasa i vođenje kampanja za Facebook i Google Ads.',
      icon: 'megaphone',
    },
    {
      name: 'Upravljanje društvenim mrežama',
      text: 'Svakodnevno upravljanje vašim profilima na društvenim mrežama.',
      icon: 'chat',
    },
  ],
  adNote: 'Budžet za oglašavanje odvojen je od naknade za dizajn i vođenje kampanja te se dogovara prije početka rada.',
  afterHeading: 'Nakon objave',
  afterText: 'Podrška se dogovara i naplaćuje zasebno, kao jednokratna usluga ili kontinuirano održavanje.',
  afterLaunch: [
    'Ažuriranje sadržaja i softvera',
    'Pomoć s hostingom i domenama',
    'Samo dizajn za timove koji već imaju programera',
  ],
  stepsHeading: 'Kako do ponude?',
  steps: [
    {
      title: 'Početni razgovor',
      text: 'Razgovaramo o tome što trebate. Ne treba vam detaljan opis projekta i ne obvezujete se na nastavak suradnje.',
    },
    {
      title: 'Ponuda',
      text: 'Nakon razgovora pripremam ponudu za vaš projekt, da lakše odlučite i planirate budžet.',
    },
    {
      title: 'Izrada i objava',
      text: 'Izrađujem web stranicu i objavljujem je nakon vašeg odobrenja.',
    },
  ],
  ctaHeading: 'Niste sigurni koja je opcija prava za vas?',
  ctaText: 'Riješite kratki kviz ili mi pošaljite poruku. Javit ću vam se s prijedlogom, bez obveze.',
  ctaContact: 'Pošaljite poruku',
};

export const pricesContent: Record<Locale, PricesContent> = { en, hr };
