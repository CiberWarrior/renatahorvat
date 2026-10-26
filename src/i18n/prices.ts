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
  packages: { name: string; price: string; for: string; pages: string }[];
  compareHeading: string;
  featureColumn: string;
  included: string;
  notIncluded: string;
  rows: { label: string; values: (string | boolean)[] }[];
  notes: string[];
  scopedHeading: string;
  scopedIntro: string;
  dependsOn: string;
  scoped: { name: string; text: string; factors: string[] }[];
  afterHeading: string;
  afterText: string;
  afterLaunch: string[];
  stepsHeading: string;
  step: string;
  steps: { title: string; text: string }[];
  ctaHeading: string;
  ctaText: string;
}

const en: PricesContent = {
  title: 'Pricing – Renata Horvat | Web Design Zagreb',
  description:
    'Website prices from €500 for research projects, societies and institutions. Other websites, design and advertising are quoted individually. Zagreb, Croatia.',
  keywords:
    'academic website pricing, scientific society website cost, conference website price, e-learning platform price, research project website, web design pricing Croatia, website cost Zagreb',
  eyebrow: 'Pricing',
  heading: 'Starting prices for websites',
  intro:
    'Every project is different. The three packages below are for research projects, societies and institutions, and give you a starting point for budgeting. Small business websites and other projects are quoted individually after a short conversation.',
  packagesHeading: 'Website packages',
  mostCommon: 'Most common',
  from: 'from ',
  quote: 'Ask for a quote',
  packages: [
    {
      name: 'Research project page',
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
      name: 'Department or institutional website',
      price: '€1,800',
      for: 'A larger website serving different audiences.',
      pages: 'Up to 10 pages',
    },
  ],
  compareHeading: 'What each package includes',
  featureColumn: 'Feature',
  included: 'Included',
  notIncluded: 'Not included',
  rows: [
    { label: 'Pages', values: ['1', 'Up to 5', 'Up to 10'] },
    { label: 'Rounds of revisions after you see the design', values: ['2', '2', '2'] },
    { label: 'Contact form', values: [true, true, true] },
    { label: 'Funder logos and acknowledgements', values: [true, true, true] },
    { label: 'Connecting your own web address', values: [true, true, true] },
    { label: 'Content your team can update', values: [false, true, true] },
    { label: 'News and events', values: [false, true, true] },
    { label: 'Membership information and forms', values: [false, true, true] },
    { label: 'Publication lists', values: [false, true, true] },
    { label: 'Sections for different audiences', values: [false, false, true] },
    { label: 'Visitor statistics, including clicks and downloads', values: [false, false, true] },
    { label: 'Extra setup to help Google understand the site', values: [false, false, true] },
  ],
  notes: [
    'Each website package includes a free initial consultation and a fast website that works well on phones and follows accessibility guidelines (WCAG 2.1 AA), so people with disabilities can use it too.',
    'Work outside the package scope is quoted separately. All prices are stated in euros. Croatian VAT is not charged. For international clients, the applicable VAT treatment is specified on the invoice.',
    'Advertising spend is separate from design and campaign management fees and is agreed before work begins.',
  ],
  scopedHeading: 'Projects quoted individually',
  scopedIntro:
    'The price depends on the factors below. Once I understand your requirements, I will send you a tailored quote.',
  dependsOn: 'The price depends on',
  scoped: [
    {
      name: 'Conference & congress websites',
      text: 'Programme, speakers, registration and abstract submission.',
      factors: [
        'Registration and online payment',
        'Abstract submission and review',
        'Size of the programme and number of speakers',
        'Number of languages',
        'Archive after the event',
      ],
    },
    {
      name: 'E-textbooks & e-learning',
      text: 'Online course material with clear navigation, quizzes and diagrams.',
      factors: [
        'Number of chapters and amount of material',
        'Number of figures and diagrams',
        'Quizzes and other interactive features',
        'Moving existing content online',
      ],
    },
    {
      name: 'Scientific figures & infographics',
      text: 'Diagrams for papers, posters, lectures and textbooks.',
      factors: ['Number of figures', 'Simple diagram or detailed illustration', 'File formats for print and web'],
    },
    {
      name: 'Graphic design & illustration',
      text: 'Illustrations, ad designs and promotional materials for your organisation or business.',
      factors: ['Type and number of materials', 'Level of detail', 'File formats for print and web'],
    },
    {
      name: 'Digital advertising',
      text: 'Ad design and campaign management for Facebook and Google Ads.',
      factors: ['Advertising platforms', 'Number of campaigns and ad designs', 'Campaign duration'],
    },
    {
      name: 'Social media management',
      text: 'Day-to-day management of your social media accounts.',
      factors: ['Number of accounts', 'Scope of account management', 'Duration of support'],
    },
  ],
  afterHeading: 'After launch',
  afterText: 'Support is agreed and priced separately, either as a one-off service or as ongoing maintenance.',
  afterLaunch: [
    'Content and software updates',
    'Help with hosting and domain names',
    'Design-only work for teams that already have a developer',
  ],
  stepsHeading: 'How to get a quote',
  step: 'Step',
  steps: [
    {
      title: 'Free initial consultation',
      text: 'We talk through what you need. You do not need a detailed brief, and there is no obligation to proceed.',
    },
    {
      title: 'Written quote',
      text: 'You receive a tailored quote outlining the scope and price, so you can make an informed decision and plan your budget.',
    },
    {
      title: 'Build and handover',
      text: 'I build the site and hand it over so your team can keep it up to date.',
    },
  ],
  ctaHeading: 'Not sure which option is right for you?',
  ctaText: "Tell me a little about your project and I'll suggest the option that fits best.",
};

// Croatian draft. Amounts are the same as in English; only the number format is Croatian (1.000 €).
const hr: PricesContent = {
  title: 'Cjenik – Renata Horvat | Web dizajn Zagreb',
  description:
    'Cijene web stranica od 500 € za istraživačke projekte, društva i ustanove. Za ostale web stranice, dizajn i oglašavanje izrađujem individualnu ponudu. Zagreb, Hrvatska.',
  keywords:
    'cijena akademske web stranice, cijena web stranice znanstvenog društva, cijena web stranice konferencije, cijena platforme za e-učenje, web stranica istraživačkog projekta, cijene web dizajna Hrvatska, cijena web stranice Zagreb',
  eyebrow: 'Cjenik',
  heading: 'Cijene web stranica od 500 €',
  intro:
    'Svaki projekt je drugačiji, pa vam ova tri paketa služe kao polazište za planiranje budžeta. Namijenjeni su istraživačkim projektima, društvima i ustanovama. Za web stranice malih tvrtki i ostale projekte pripremam individualnu ponudu nakon kratkog razgovora.',
  packagesHeading: 'Paketi web stranica',
  mostCommon: 'Najčešći izbor',
  from: 'od ',
  quote: 'Zatražite ponudu',
  packages: [
    {
      name: 'Stranica istraživačkog projekta',
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
      name: 'Web stranica odsjeka ili ustanove',
      price: '1.800 €',
      for: 'Veća web stranica za različite skupine posjetitelja.',
      pages: 'Do 10 stranica',
    },
  ],
  compareHeading: 'Što uključuje svaki paket',
  featureColumn: 'Značajka',
  included: 'Uključeno',
  notIncluded: 'Nije uključeno',
  rows: [
    { label: 'Stranice', values: ['1', 'Do 5', 'Do 10'] },
    { label: 'Krugovi izmjena nakon što vidite dizajn', values: ['2', '2', '2'] },
    { label: 'Kontaktni obrazac', values: [true, true, true] },
    { label: 'Logotipi financijera i zahvale', values: [true, true, true] },
    { label: 'Povezivanje vaše web adrese', values: [true, true, true] },
    { label: 'Sadržaj koji vaš tim može sam ažurirati', values: [false, true, true] },
    { label: 'Novosti i događanja', values: [false, true, true] },
    { label: 'Informacije o članstvu i obrasci', values: [false, true, true] },
    { label: 'Popisi publikacija', values: [false, true, true] },
    { label: 'Odjeljci za različite skupine posjetitelja', values: [false, false, true] },
    { label: 'Statistika posjeta, uključujući klikove i preuzimanja', values: [false, false, true] },
    { label: 'Dodatna podešavanja kako bi Google lakše razumio stranicu', values: [false, false, true] },
  ],
  notes: [
    'Svaki paket uključuje besplatne početne konzultacije i brzu web stranicu koja dobro radi na mobitelima i slijedi smjernice pristupačnosti (WCAG 2.1 AA), kako bi je mogle koristiti i osobe s invaliditetom.',
    'Za rad izvan opsega paketa izrađuje se zasebna ponuda. Sve cijene izražene su u eurima. Hrvatski PDV se ne obračunava. Za međunarodne klijente način obračuna PDV-a navodi se na računu.',
    'Budžet za oglašavanje odvojen je od naknade za dizajn i vođenje kampanja te se dogovara prije početka rada.',
  ],
  scopedHeading: 'Projekti s individualnom ponudom',
  scopedIntro:
    'Cijena ovisi o čimbenicima u nastavku. Kad upoznam vaše potrebe, poslat ću vam ponudu prilagođenu vašem projektu.',
  dependsOn: 'Cijena ovisi o',
  scoped: [
    {
      name: 'Web stranice konferencija i kongresa',
      text: 'Program, predavači, registracija i prijava sažetaka.',
      factors: [
        'Registraciji i online plaćanju',
        'Prijavi i recenziji sažetaka',
        'Opsegu programa i broju predavača',
        'Broju jezika',
        'Arhivi nakon događanja',
      ],
    },
    {
      name: 'E-udžbenici i e-učenje',
      text: 'Online nastavni materijali s jasnom navigacijom, kvizovima i dijagramima.',
      factors: [
        'Broju poglavlja i količini materijala',
        'Broju slika i dijagrama',
        'Kvizovima i drugim interaktivnim mogućnostima',
        'Prebacivanju postojećeg sadržaja online',
      ],
    },
    {
      name: 'Znanstveni prikazi i infografike',
      text: 'Dijagrami za radove, postere, predavanja i udžbenike.',
      factors: ['Broju prikaza', 'Jednostavnom dijagramu ili detaljnoj ilustraciji', 'Formatima datoteka za tisak i web'],
    },
    {
      name: 'Grafički dizajn i ilustracija',
      text: 'Ilustracije, dizajn oglasa i promotivni materijali za vašu organizaciju ili tvrtku.',
      factors: ['Vrsti i broju materijala', 'Razini detalja', 'Formatima datoteka za tisak i web'],
    },
    {
      name: 'Digitalno oglašavanje',
      text: 'Dizajn oglasa i vođenje kampanja za Facebook i Google Ads.',
      factors: ['Platformama za oglašavanje', 'Broju kampanja i dizajna oglasa', 'Trajanju kampanje'],
    },
    {
      name: 'Upravljanje društvenim mrežama',
      text: 'Svakodnevno upravljanje vašim profilima na društvenim mrežama.',
      factors: ['Broju profila', 'Opsegu upravljanja profilima', 'Trajanju podrške'],
    },
  ],
  afterHeading: 'Nakon objave',
  afterText: 'Podrška se dogovara i naplaćuje zasebno, kao jednokratna usluga ili kontinuirano održavanje.',
  afterLaunch: [
    'Ažuriranje sadržaja i softvera',
    'Pomoć s hostingom i domenama',
    'Samo dizajn za timove koji već imaju programera',
  ],
  stepsHeading: 'Kako do ponude',
  step: 'Korak',
  steps: [
    {
      title: 'Besplatne početne konzultacije',
      text: 'Razgovaramo o tome što trebate. Ne treba vam detaljan opis projekta i ne obvezujete se na nastavak suradnje.',
    },
    {
      title: 'Pisana ponuda',
      text: 'Dobivate ponudu prilagođenu vašem projektu s opisom opsega i cijenom, kako biste mogli informirano odlučiti i isplanirati budžet.',
    },
    {
      title: 'Izrada i predaja',
      text: 'Izrađujem web stranicu i predajem vam je tako da je vaš tim može sam ažurirati.',
    },
  ],
  ctaHeading: 'Niste sigurni koja je opcija prava za vas?',
  ctaText: 'Napišite mi nekoliko riječi o svom projektu, a ja ću vam predložiti opciju koja vam najbolje odgovara.',
};

export const pricesContent: Record<Locale, PricesContent> = { en, hr };
