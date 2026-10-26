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

  'hero.eyebrow': 'Web designer · Zagreb',
  'hero.titleStart': 'Websites that tell ',
  'hero.titleEmphasis': 'your story',
  'hero.caption': 'From first idea to finished website.',
  'hero.text':
    'I build clear websites for researchers, educators, institutions and small businesses, and turn complex ideas into messages anyone can understand.',
  'hero.viewWork': 'See selected work',
  'hero.talk': 'Talk about a project',

  'cta.heading': 'Have a project in mind?',
  'cta.text': "Send me a few lines about your project, even if it's just an early idea.",
  'cta.button': 'Write to me',

  'card.visit': '{title}: visit the website (opens in a new tab)',

  'footer.tagline':
    'Websites, plus illustrations, ads and social media. Zagreb.',
  'footer.message': 'Send a message →',
  'footer.location': 'Zagreb',
  'footer.privacy': 'Privacy Policy',
  'footer.legal': 'Legal Notice',
  'footer.cookies': 'Cookie Settings',

  'meta.etextbook': 'E-textbook · Faculty of Science',
  'meta.congress': 'Congress · International',
  'meta.society': 'Society · Europe',

  'unit.projects.one': 'project',
  'unit.projects.few': 'projects',
  'unit.projects.many': 'projects',

  'work.title': 'Work – Renata Horvat | Web Design Portfolio Croatia',
  'work.description':
    'Selected projects by Renata Horvat: websites and platforms for conferences, scientific societies, universities and small businesses.',
  'work.keywords':
    'web designer Zagreb, web design Croatia, conference website, society website, university website, small business website, graphic designer Zagreb, Renata Horvat, portfolio',
  'work.heading': 'Selected work',
  'work.intro':
    'Websites and online platforms for universities, conferences, scientific societies and organisations.',
  'work.featured': 'Featured',
  'work.all': 'All projects',
  'work.group.conference': 'Conferences & scientific events',
  'work.group.society': 'Societies & collections',
  'work.group.elearning': 'E-textbooks',
  'work.group.other': 'Research projects & institutions',
  'work.cta.heading': 'Have a similar project in mind?',
  'work.cta.text':
    'Send me a few lines about your project or idea. We can work out the next steps together.',

  'home.title': 'Renata Horvat – Web Designer | Zagreb',
  'home.description':
    'Web designer in Zagreb with over 20 years of experience. Clear, fast websites for conferences, societies, universities and small businesses.',
  'home.keywords':
    'web designer Zagreb, web design Croatia, conference website, society website, university website, small business website, graphic designer Zagreb, Renata Horvat',

  'home.work.heading': 'Selected work',
  'home.work.all': 'View projects',
  'meta.symposium': 'Symposium · International · 2027',
  'meta.handbook': 'Handbook · Education · HR / EN',
  'meta.collection': 'Collection · Faculty of Science',

  'home.services.heading': 'What I do',
  'home.services.pricing': 'Pricing',
  'home.services.intro':
    'Websites are my main work. Alongside them I also do visuals and ads, when your project needs them.',
  'home.services.web.title': 'Web design & build',
  'home.services.web.text':
    'Clear, distinctive websites for researchers, educators, organisations and small businesses.',
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
  'home.about.caption': 'Zagreb · 20+ years',
  'home.about.heading': 'I turn complex ideas into clear websites.',
  'home.about.p1':
    "I'm Renata, a web designer based in Zagreb. For over 20 years I've worked with universities, scientific societies and small businesses. My background in science communication helps me turn complex ideas into clear messages and distinctive visuals.",
  'home.about.p2':
    'Alongside websites, my work includes illustrations, promotional materials, Facebook and Google Ads campaigns and day-to-day social media management.',
  'home.about.p3':
    'My background in science communication helps me turn complex ideas into clear messages and distinctive visuals.',
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

  'hero.eyebrow': 'Dizajnerica web-stranica · Zagreb',
  'hero.titleStart': 'Web-stranice koje pričaju ',
  'hero.titleEmphasis': 'vašu priču',
  'hero.caption': 'Od prve ideje do gotove web-stranice.',
  'hero.text':
    'Izrađujem jasne web-stranice za istraživače, edukatore, ustanove i male tvrtke, a složene ideje pretvaram u poruke koje svatko razumije.',
  'hero.viewWork': 'Pogledajte odabrane radove',
  'hero.talk': 'Razgovarajmo o projektu',

  'cta.heading': 'Imate ideju za projekt?',
  'cta.text': 'Pošaljite mi nekoliko redaka o svom projektu, čak i ako je vaša ideja još u začetku.',
  'cta.button': 'Napišite mi',

  'card.visit': '{title}: posjetite web-stranicu (otvara se u novoj kartici)',

  'footer.tagline':
    'Web-stranice, uz ilustracije, oglase i društvene mreže. Zagreb.',
  'footer.message': 'Pošaljite poruku →',
  'footer.location': 'Zagreb',
  'footer.privacy': 'Politika privatnosti',
  'footer.legal': 'Pravna napomena',
  'footer.cookies': 'Postavke kolačića',

  'meta.etextbook': 'E-udžbenik · Prirodoslovno-matematički fakultet',
  'meta.congress': 'Kongres · Međunarodni',
  'meta.society': 'Društvo · Europa',

  'unit.projects.one': 'projekt',
  'unit.projects.few': 'projekta',
  'unit.projects.many': 'projekata',

  'work.title': 'Radovi – Renata Horvat | Portfolio web dizajna, Hrvatska',
  'work.description':
    'Odabrani projekti Renate Horvat: web-stranice i platforme za konferencije, znanstvena društva, sveučilišta i male tvrtke.',
  'work.keywords':
    'web dizajner Zagreb, web dizajn Hrvatska, web-stranica za konferenciju, web-stranica za društvo, web-stranica za sveučilište, web-stranica za malu tvrtku, grafički dizajner Zagreb, Renata Horvat, portfolio',
  'work.heading': 'Odabrani radovi',
  'work.intro':
    'Web-stranice i online platforme za sveučilišta, konferencije, znanstvena društva i organizacije.',
  'work.featured': 'Izdvojeno',
  'work.all': 'Svi projekti',
  'work.group.conference': 'Konferencije i znanstveni skupovi',
  'work.group.society': 'Društva i zbirke',
  'work.group.elearning': 'E-udžbenici',
  'work.group.other': 'Istraživački projekti i ustanove',
  'work.cta.heading': 'Imate sličan projekt na umu?',
  'work.cta.text':
    'Pošaljite mi nekoliko redaka o svom projektu ili ideji. Zajedno možemo dogovoriti sljedeće korake.',

  'home.title': 'Renata Horvat – Dizajnerica web-stranica | Zagreb',
  'home.description':
    'Dizajnerica web-stranica iz Zagreba s više od 20 godina iskustva. Jasne, brze web-stranice za konferencije, društva, sveučilišta i male tvrtke.',
  'home.keywords':
    'web dizajner Zagreb, web dizajn Hrvatska, web-stranica za konferenciju, web-stranica za društvo, web-stranica za sveučilište, web-stranica za malu tvrtku, grafički dizajner Zagreb, Renata Horvat',

  'home.work.heading': 'Odabrani radovi',
  'home.work.all': 'Pogledajte projekte',
  'meta.symposium': 'Simpozij · Međunarodni · 2027',
  'meta.handbook': 'Priručnik · Edukacija · HR / EN',
  'meta.collection': 'Zbirka · Prirodoslovno-matematički fakultet',

  'home.services.heading': 'Što radim',
  'home.services.pricing': 'Cjenik',
  'home.services.intro':
    'Web-stranice su moj glavni posao. Uz njih radim i vizuale te oglase, kad vašem projektu zatrebaju.',
  'home.services.web.title': 'Dizajn i izrada web-stranica',
  'home.services.web.text':
    'Jasne, prepoznatljive web-stranice za istraživače, edukatore, organizacije i male tvrtke.',
  'home.services.web.item1': 'Web-stranice tvrtki, konferencija i društava',
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
  'home.about.caption': 'Zagreb · više od 20 godina iskustva',
  'home.about.heading': 'Složene ideje pretvaram u jasne web-stranice.',
  'home.about.p1':
    'Ja sam Renata, dizajnerica web-stranica iz Zagreba. Više od 20 godina radim sa sveučilištima, znanstvenim društvima i malim tvrtkama. Iskustvo u znanstvenoj komunikaciji pomaže mi složene ideje pretvoriti u jasne poruke i prepoznatljive vizuale.',
  'home.about.p2':
    'Uz web-stranice radim ilustracije, promotivne materijale, oglasne kampanje na Facebooku i Googleu te svakodnevno upravljam društvenim mrežama.',
  'home.about.p3':
    'Iskustvo u znanstvenoj komunikaciji pomaže mi složene ideje pretvoriti u jasne poruke i prepoznatljive vizuale.',
  'home.about.years': 'godina',
  'home.about.projects': 'projekata',
  'home.about.institutions': 'institucija',

  'cookie.dialog': 'Postavke kolačića',
  'cookie.title': 'Pristanak na kolačiće',
  'cookie.text1':
    'Vaše postavke kolačića spremamo u vašem pregledniku. Neobavezni analitički kolačići pomažu nam razumjeti posjećenost web-stranice.',
  'cookie.text2': 'Klikom na „Prihvatite sve” pristajete na korištenje analitičkih kolačića.',
  'cookie.text3': 'Postavke kolačića možete prilagoditi. Više informacija pronađite u',
  'cookie.policyLink': 'Politici privatnosti',
  'cookie.essential.title': 'Nužna pohrana (obavezna)',
  'cookie.essential.text': 'Sprema vaše postavke kolačića. Ne uključuje analitiku.',
  'cookie.analytics.title': 'Analitički kolačići',
  'cookie.analytics.text':
    'Pomažu nam razumjeti kako posjetitelji koriste našu web-stranicu (Google Analytics).',
  'cookie.customise': 'Prilagodite',
  'cookie.customise.label': 'Prilagodite postavke kolačića',
  'cookie.reject': 'Odbijte sve',
  'cookie.reject.label': 'Odbijte sve neobavezne kolačiće',
  'cookie.accept': 'Prihvatite sve',
  'cookie.accept.label': 'Prihvatite sve kolačiće',
  'cookie.open': 'Otvorite postavke kolačića',
};

export const ui: Record<Locale, Record<UiKey, string>> = { en, hr };
