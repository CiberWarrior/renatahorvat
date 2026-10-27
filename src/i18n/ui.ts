import type { Locale } from './config';

// Short texts shared by every page (navigation, footer, buttons, hero).
// Page-specific content is added per page when that page is translated.
const en = {
  'skip.main': 'Skip to main content',

  'nav.home': 'Home',
  'nav.work': 'Work',
  'nav.pricing': 'Pricing',
  'nav.contact': 'Contact',
  'nav.main': 'Main',
  'nav.start': 'Take the quiz',
  'nav.toggle': 'Toggle mobile navigation menu',
  'nav.mobile': 'Mobile navigation',
  'nav.language': 'Language',

  'hero.eyebrow': 'Web design · Zagreb',
  'hero.titleStart': 'From idea to ',
  'hero.titleEmphasis': 'website',
  'hero.text':
    'I design and build websites for scientists, educators, institutions and small businesses. From your initial materials through to launch, I help you identify what matters, organise your content and present what you do.',
  'hero.talk': 'Talk about a project',

  'cta.heading': 'Have a project in mind?',
  'cta.text':
    "You don't need to have everything worked out. Send me a link to your existing website, any materials you have, or a few lines about your idea. I'll suggest a suitable approach and prepare a quote with a clear scope and price.",
  'cta.button': 'Send an enquiry',

  'card.visit': '{title}: visit the website (opens in a new tab)',
  'card.case': 'Read the case study',

  'footer.location': 'Zagreb',
  'footer.privacy': 'Privacy Policy',
  'footer.legal': 'Business Details',
  'footer.cookies': 'Cookie Settings',

  'meta.etextbook': 'E-textbook · Faculty of Science',
  'meta.congress': 'Congress · International',
  'meta.society': 'Society · Europe',

  'unit.projects.one': 'project',
  'unit.projects.few': 'projects',
  'unit.projects.many': 'projects',

  'work.title': 'Work – Website Design Portfolio | Renata Horvat',
  'work.description':
    'Selected projects by Renata Horvat: websites and platforms for conferences, scientific societies, universities and small businesses.',
  'work.keywords':
    'web designer Zagreb, web design Croatia, conference website, society website, university website, small business website, graphic designer Zagreb, Renata Horvat, portfolio',
  'work.heading': 'Selected work',
  'work.intro':
    'Websites and online platforms for universities, conferences, scientific societies and organisations.',
  'work.featured': 'Featured',
  'work.all': 'Projects by area',
  'work.group.conference': 'Conferences & scientific events',
  'work.group.society': 'Societies & collections',
  'work.group.elearning': 'E-textbooks',
  'work.group.other': 'Research projects & institutions',
  'work.cta.heading': 'Have a similar project in mind?',
  'work.cta.text':
    'Send me a few lines about your project or idea. We can work out the next steps together.',

  'home.title': 'Website Design in Zagreb | Renata Horvat',
  'home.description':
    'Website design in Zagreb: clear websites for scientists, educators, institutions and small businesses. Over 20 years of experience.',
  'home.keywords':
    'web designer Zagreb, web design Croatia, conference website, society website, university website, small business website, graphic designer Zagreb, Renata Horvat',

  'home.work.heading': 'Selected work',
  'home.work.all': 'View all work',
  'meta.symposium': 'Symposium · International · 2027',
  'meta.handbook': 'Handbook · Education · HR / EN',
  'meta.collection': 'Collection · Faculty of Science',

  'home.services.heading': 'What do I do?',
  'home.services.pricing': 'Pricing',
  'home.services.intro':
    'Websites are my main work. Alongside them I also do illustrations and ads, when your project needs them.',
  'home.services.web.title': 'Web design & build',
  'home.services.web.text':
    'Clear, distinctive websites for scientists, educators, institutions and small businesses.',
  'home.services.web.item1': 'Business, conference and society websites',
  'home.services.web.item2': 'Online textbooks and learning resources',
  'home.services.web.item3': 'Searchable collections and research tools',
  'home.services.graphic.title': 'Graphic design & illustration',
  'home.services.graphic.text':
    'Visuals that make your ideas clear and give your project its own character.',
  'home.services.graphic.item1': 'Promotional materials and ad design',
  'home.services.graphic.item2': 'Illustrations and infographics',
  'home.services.graphic.item3': 'Scientific figures and educational diagrams',
  'home.services.ads.title': 'Digital advertising & social media',
  'home.services.ads.text':
    'Ad design, campaign management and day-to-day social media account management.',
  'home.services.ads.item1': 'Facebook Ads campaigns',
  'home.services.ads.item2': 'Google Ads campaigns',
  'home.services.ads.item3': 'Social media account management',

  'home.about.portraitAlt': 'Portrait of Renata Horvat',
  'home.about.caption': 'Zagreb',
  'home.about.heading': 'I turn complex ideas into clear websites.',
  'home.about.p1':
    'For over 20 years I\'ve worked with universities, scientific societies and small businesses. My background in science communication helps me keep content clear and visually distinctive.',
  'home.about.years': 'Years',
  'home.about.projects': 'Projects',
  'home.about.institutions': 'Institutions',

  'cookie.dialog': 'Cookie preferences',
  'cookie.title': 'Cookie Consent',
  'cookie.text1':
    'We save your cookie preferences in your browser. Optional analytics cookies help us understand website traffic.',
  'cookie.text2': 'By clicking "Accept All", you consent to the use of analytics cookies.',
  'cookie.text3': 'You can manage your preferences or learn more in our',
  'cookie.policyLink': 'Privacy Policy',
  'cookie.essential.title': 'Essential Storage (Required)',
  'cookie.essential.text': 'Saves your cookie preferences. This does not enable analytics.',
  'cookie.analytics.title': 'Analytics Cookies',
  'cookie.analytics.text':
    'Help us understand how visitors interact with our website (Google Analytics).',
  'cookie.customise': 'Customise',
  'cookie.customise.label': 'Customise cookie preferences',
  'cookie.reject': 'Reject All',
  'cookie.reject.label': 'Reject all non-essential cookies',
  'cookie.accept': 'Accept All',
  'cookie.accept.label': 'Accept all cookies',
  'cookie.open': 'Open cookie settings',
} as const;

export type UiKey = keyof typeof en;

// Croatian draft: formal "Vi" form, feminine job title. To be reviewed by Renata.
const hr: Record<UiKey, string> = {
  'skip.main': 'Preskočite na glavni sadržaj',

  'nav.home': 'Početna',
  'nav.work': 'Radovi',
  'nav.pricing': 'Cjenik',
  'nav.contact': 'Kontakt',
  'nav.main': 'Glavni izbornik',
  'nav.start': 'Riješite kviz',
  'nav.toggle': 'Otvorite ili zatvorite izbornik',
  'nav.mobile': 'Mobilni izbornik',
  'nav.language': 'Jezik',

  'hero.eyebrow': 'Izrada web stranica · Zagreb',
  'hero.titleStart': 'Od ideje do ',
  'hero.titleEmphasis': 'weba',
  'hero.text':
    'Osmišljavam i izrađujem web stranice za znanstvenike, edukatore, ustanove i male tvrtke. Od prvih materijala do objave pomažem vam razraditi što je važno, organizirati sadržaj i predstaviti ono što radite.',
  'hero.talk': 'Razgovarajmo o projektu',

  'cta.heading': 'Imate projekt na umu?',
  'cta.text':
    'Ne morate imati sve razrađeno. Pošaljite mi poveznicu na postojeću stranicu, materijale ili nekoliko rečenica o ideji. Predložit ću vam što ima smisla napraviti i pripremiti ponudu s jasnim opsegom i cijenom.',
  'cta.button': 'Pošaljite upit',

  'card.visit': '{title}: posjetite web stranicu (otvara se u novoj kartici)',
  'card.case': 'Pročitajte studiju slučaja',

  'footer.location': 'Zagreb',
  'footer.privacy': 'Politika privatnosti',
  'footer.legal': 'Podaci o obrtu',
  'footer.cookies': 'Postavke kolačića',

  'meta.etextbook': 'E-udžbenik · Prirodoslovno-matematički fakultet',
  'meta.congress': 'Kongres · Međunarodni',
  'meta.society': 'Društvo · Europa',

  'unit.projects.one': 'projekt',
  'unit.projects.few': 'projekta',
  'unit.projects.many': 'projekata',

  'work.title': 'Radovi – izrada web stranica | Renata Horvat',
  'work.description':
    'Odabrani projekti Renate Horvat: web stranice i platforme za konferencije, znanstvena društva, sveučilišta i male tvrtke.',
  'work.keywords':
    'web dizajner Zagreb, web dizajn Hrvatska, web stranica za konferenciju, web stranica za društvo, web stranica za sveučilište, web stranica za malu tvrtku, grafički dizajner Zagreb, Renata Horvat, portfolio',
  'work.heading': 'Odabrani radovi',
  'work.intro':
    'Web stranice i online platforme za sveučilišta, konferencije, znanstvena društva i organizacije.',
  'work.featured': 'Izdvojeno',
  'work.all': 'Projekti po područjima',
  'work.group.conference': 'Konferencije i znanstveni skupovi',
  'work.group.society': 'Društva i zbirke',
  'work.group.elearning': 'E-udžbenici',
  'work.group.other': 'Istraživački projekti i ustanove',
  'work.cta.heading': 'Imate sličan projekt na umu?',
  'work.cta.text':
    'Pošaljite mi nekoliko redaka o svom projektu ili ideji. Zajedno možemo dogovoriti sljedeće korake.',

  'home.title': 'Izrada web stranica Zagreb | Renata Horvat',
  'home.description':
    'Izrada web stranica u Zagrebu: jasne web stranice za znanstvenike, edukatore, ustanove i male tvrtke. Više od 20 godina iskustva.',
  'home.keywords':
    'web dizajner Zagreb, web dizajn Hrvatska, web stranica za konferenciju, web stranica za društvo, web stranica za sveučilište, web stranica za malu tvrtku, grafički dizajner Zagreb, Renata Horvat',

  'home.work.heading': 'Odabrani radovi',
  'home.work.all': 'Pogledajte sve radove',
  'meta.symposium': 'Simpozij · Međunarodni · 2027',
  'meta.handbook': 'Priručnik · Edukacija · HR / EN',
  'meta.collection': 'Zbirka · PMF',

  'home.services.heading': 'Što radim?',
  'home.services.pricing': 'Cjenik',
  'home.services.intro':
    'Web stranice su moj glavni posao. Uz njih radim ilustracije i oglase, kad vašem projektu zatrebaju.',
  'home.services.web.title': 'Dizajn i izrada web stranica',
  'home.services.web.text':
    'Jasne, prepoznatljive web stranice za znanstvenike, edukatore, ustanove i male tvrtke.',
  'home.services.web.item1': 'Web stranice tvrtki, konferencija i društava',
  'home.services.web.item2': 'Mrežni udžbenici i obrazovni sadržaji',
  'home.services.web.item3': 'Pretražive zbirke i istraživački alati',
  'home.services.graphic.title': 'Grafički dizajn i ilustracija',
  'home.services.graphic.text':
    'Vizuali koji jasno prenose vaše ideje i daju projektu vlastiti karakter.',
  'home.services.graphic.item1': 'Promotivni materijali i dizajn oglasa',
  'home.services.graphic.item2': 'Ilustracije i infografike',
  'home.services.graphic.item3': 'Znanstveni prikazi i edukativni dijagrami',
  'home.services.ads.title': 'Digitalno oglašavanje i društvene mreže',
  'home.services.ads.text':
    'Dizajn oglasa, vođenje kampanja i svakodnevno upravljanje profilima na društvenim mrežama.',
  'home.services.ads.item1': 'Oglasne kampanje na Facebooku',
  'home.services.ads.item2': 'Oglasne kampanje na Googleu',
  'home.services.ads.item3': 'Upravljanje profilima na društvenim mrežama',

  'home.about.portraitAlt': 'Portret Renate Horvat',
  'home.about.caption': 'Zagreb',
  'home.about.heading': 'Složene ideje pretvaram u jasne web stranice.',
  'home.about.p1':
    'Više od 20 godina radim sa sveučilištima, znanstvenim društvima i malim tvrtkama. Iskustvo u znanstvenoj komunikaciji pomaže mi da sadržaj bude jasan i vizualno prepoznatljiv.',
  'home.about.years': 'godina',
  'home.about.projects': 'projekata',
  'home.about.institutions': 'institucija',

  'cookie.dialog': 'Postavke kolačića',
  'cookie.title': 'Pristanak na kolačiće',
  'cookie.text1':
    'Vaše postavke kolačića spremamo u vašem pregledniku. Neobavezni analitički kolačići pomažu nam razumjeti posjećenost web stranice.',
  'cookie.text2': 'Klikom na „Prihvatite sve” pristajete na korištenje analitičkih kolačića.',
  'cookie.text3': 'Postavke kolačića možete prilagoditi. Više informacija pronađite u',
  'cookie.policyLink': 'Politici privatnosti',
  'cookie.essential.title': 'Nužna pohrana (obavezna)',
  'cookie.essential.text': 'Sprema vaše postavke kolačića. Ne uključuje analitiku.',
  'cookie.analytics.title': 'Analitički kolačići',
  'cookie.analytics.text':
    'Pomažu nam razumjeti kako posjetitelji koriste našu web stranicu (Google Analytics).',
  'cookie.customise': 'Prilagodite',
  'cookie.customise.label': 'Prilagodite postavke kolačića',
  'cookie.reject': 'Odbijte sve',
  'cookie.reject.label': 'Odbijte sve neobavezne kolačiće',
  'cookie.accept': 'Prihvatite sve',
  'cookie.accept.label': 'Prihvatite sve kolačiće',
  'cookie.open': 'Otvorite postavke kolačića',
};

export const ui: Record<Locale, Record<UiKey, string>> = { en, hr };
