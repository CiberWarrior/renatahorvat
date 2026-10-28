import type { Locale } from './config';

export interface PricesContent {
  title: string;
  description: string;
  keywords: string;
  eyebrow: string;
  heading: string;
  intro: string;
  packagesHeading: string;
  mostCommon: string;
  from: string;
  quote: string;
  priceNote: string;
  packages: { name: string; price: string; for: string; pages: string }[];
  compareHeading: string;
  featureColumn: string;
  included: string;
  notIncluded: string;
  rows: { label: string; values: (string | boolean)[] }[];
  notes: string[];
  scopedHeading: string;
  scopedIntro: string;
  scoped: { name: string; text: string }[];
  afterHeading: string;
  afterText: string;
  afterLaunch: string[];
  stepsHeading: string;
  step: string;
  steps: { title: string; text: string }[];
  ctaHeading: string;
  ctaButton: string;
}

const en: PricesContent = {
  title: 'Website Design Pricing | Renata Horvat',
  description:
    'Website prices from €500 for research projects, societies and institutions. Other websites, design and advertising are quoted individually. Zagreb, Croatia.',
  keywords:
    'academic website pricing, scientific society website cost, conference website price, e-learning platform price, research project website, web design pricing Croatia, website cost Zagreb',
  eyebrow: 'Pricing',
  heading: 'Prices and packages',
  intro:
    'Every project is different. See the packages I offer below, and for other websites and projects I prepare an individual quote after a short conversation.',
  packagesHeading: 'Website packages',
  mostCommon: 'Most common',
  from: 'from ',
  quote: 'Ask for a quote',
  priceNote: 'Prices are starting points. The final price is agreed after we talk.',
  packages: [
    {
      name: 'Research project website',
      price: '€500',
      for: 'A single page for a research project, grant or lab.',
      pages: '1 page',
    },
    {
      name: 'Society or research group website',
      price: '€1,000',
      for: 'A multi-page site for a scientific society or research group.',
      pages: 'Up to 5 pages',
    },
    {
      name: 'Institutional website',
      price: '€1,800',
      for: 'A larger website serving different audiences.',
      pages: 'Up to 10 pages',
    },
  ],
  compareHeading: 'What does a package usually include?',
  featureColumn: 'Feature',
  included: 'Included',
  notIncluded: 'Not included',
  rows: [
    { label: 'Pages', values: ['1', 'Up to 5', 'Up to 10'] },
    { label: 'Contact form', values: [true, true, true] },
    { label: 'Logos', values: [true, true, true] },
    { label: 'Connecting your own web address', values: [true, true, true] },
    { label: 'News and events', values: [false, true, true] },
    { label: 'Membership information and forms', values: [false, true, true] },
    { label: 'Publication lists', values: [false, true, true] },
    { label: 'Sections for different audiences', values: [false, false, true] },
    { label: 'Visitor statistics, including clicks and downloads', values: [false, false, true] },
    { label: 'Extra setup to help Google understand the site', values: [false, false, true] },
  ],
  notes: [
    'The exact scope is agreed for each project. Work outside the package scope is quoted separately. All prices are stated in euros.',
    'Advertising spend is separate from design and campaign management fees and is agreed before work begins.',
  ],
  scopedHeading: 'Projects quoted individually',
  scopedIntro:
    'After an introductory meeting I will send you a quote tailored to your project.',
  scoped: [
    {
      name: 'Conference & congress websites',
      text: 'Programme, speakers, registration and abstract submission.',
    },
    {
      name: 'E-textbooks & e-learning',
      text: 'Online course material with clear navigation, quizzes and diagrams.',
    },
    {
      name: 'Scientific figures & infographics',
      text: 'Diagrams for papers, posters, lectures and textbooks.',
    },
    {
      name: 'Graphic design & illustration',
      text: 'Illustrations, ad designs and promotional materials for your organisation or business.',
    },
    {
      name: 'Digital advertising',
      text: 'Ad design and campaign management for Facebook and Google Ads.',
    },
    {
      name: 'Social media management',
      text: 'Day-to-day management of your social media accounts.',
    },
  ],
  afterHeading: 'After launch',
  afterText: 'Support is agreed and priced separately, either as a one-off service or as ongoing maintenance.',
  afterLaunch: [
    'Content and software updates',
    'Help with hosting and domain names',
    'Design-only work for teams that already have a developer',
  ],
  stepsHeading: 'How do you get a quote?',
  step: 'Step',
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
  ctaButton: 'Take the quiz',
};

// Croatian draft. Amounts are the same as in English; only the number format is Croatian (1.000 €).
const hr: PricesContent = {
  title: 'Cjenik izrade web stranica | Renata Horvat',
  description:
    'Cijene web stranica od 500 € za istraživačke projekte, društva i ustanove. Za ostale web stranice, dizajn i oglašavanje izrađujem individualnu ponudu. Zagreb, Hrvatska.',
  keywords:
    'cijena akademske web stranice, cijena web stranice znanstvenog društva, cijena web stranice konferencije, cijena platforme za e-učenje, web stranica istraživačkog projekta, cijene web dizajna Hrvatska, cijena web stranice Zagreb',
  eyebrow: 'Cjenik',
  heading: 'Cijene i paketi',
  intro:
    'Svaki projekt je drugačiji. U nastavku pogledajte pakete koje nudim, a za ostale web stranice i projekte pripremam individualnu ponudu nakon kratkog razgovora.',
  packagesHeading: 'Paketi web stranica',
  mostCommon: 'Najčešći izbor',
  from: 'od ',
  quote: 'Zatražite ponudu',
  priceNote: 'Cijene su polazne. Konačnu cijenu dogovaramo nakon razgovora.',
  packages: [
    {
      name: 'Web stranica istraživačkog projekta',
      price: '500 €',
      for: 'Jedna stranica za istraživački projekt, grant ili laboratorij.',
      pages: '1 stranica',
    },
    {
      name: 'Web stranica društva ili istraživačke skupine',
      price: '1.000 €',
      for: 'Višestranična web stranica za znanstveno društvo ili istraživačku skupinu.',
      pages: 'Do 5 stranica',
    },
    {
      name: 'Web stranica ustanove',
      price: '1.800 €',
      for: 'Veća web stranica za različite skupine posjetitelja.',
      pages: 'Do 10 stranica',
    },
  ],
  compareHeading: 'Što paket obično uključuje?',
  featureColumn: 'Značajka',
  included: 'Uključeno',
  notIncluded: 'Nije uključeno',
  rows: [
    { label: 'Stranice', values: ['1', 'Do 5', 'Do 10'] },
    { label: 'Kontaktni obrazac', values: [true, true, true] },
    { label: 'Logotipi', values: [true, true, true] },
    { label: 'Povezivanje vaše web adrese', values: [true, true, true] },
    { label: 'Novosti i događanja', values: [false, true, true] },
    { label: 'Informacije o članstvu i obrasci', values: [false, true, true] },
    { label: 'Popisi publikacija', values: [false, true, true] },
    { label: 'Odjeljci za različite skupine posjetitelja', values: [false, false, true] },
    { label: 'Statistika posjeta, uključujući klikove i preuzimanja', values: [false, false, true] },
    { label: 'Dodatna podešavanja kako bi Google lakše razumio stranicu', values: [false, false, true] },
  ],
  notes: [
    'Točan opseg dogovaramo za svaki projekt. Za rad izvan opsega paketa izrađuje se zasebna ponuda. Sve cijene izražene su u eurima.',
    'Budžet za oglašavanje odvojen je od naknade za dizajn i vođenje kampanja te se dogovara prije početka rada.',
  ],
  scopedHeading: 'Projekti s individualnom ponudom',
  scopedIntro:
    'Nakon informativnog sastanka poslat ću vam ponudu prilagođenu vašem projektu.',
  scoped: [
    {
      name: 'Web stranice konferencija i kongresa',
      text: 'Program, predavači, registracija i prijava sažetaka.',
    },
    {
      name: 'E-udžbenici i e-učenje',
      text: 'Online nastavni materijali s jasnom navigacijom, kvizovima i dijagramima.',
    },
    {
      name: 'Znanstveni prikazi i infografike',
      text: 'Dijagrami za radove, postere, predavanja i udžbenike.',
    },
    {
      name: 'Grafički dizajn i ilustracija',
      text: 'Ilustracije, dizajn oglasa i promotivni materijali za vašu organizaciju ili tvrtku.',
    },
    {
      name: 'Digitalno oglašavanje',
      text: 'Dizajn oglasa i vođenje kampanja za Facebook i Google Ads.',
    },
    {
      name: 'Upravljanje društvenim mrežama',
      text: 'Svakodnevno upravljanje vašim profilima na društvenim mrežama.',
    },
  ],
  afterHeading: 'Nakon objave',
  afterText: 'Podrška se dogovara i naplaćuje zasebno, kao jednokratna usluga ili kontinuirano održavanje.',
  afterLaunch: [
    'Ažuriranje sadržaja i softvera',
    'Pomoć s hostingom i domenama',
    'Samo dizajn za timove koji već imaju programera',
  ],
  stepsHeading: 'Kako do ponude?',
  step: 'Korak',
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
  ctaButton: 'Riješite kviz',
};

export const pricesContent: Record<Locale, PricesContent> = { en, hr };
