import type { Locale } from './config';

export interface CaseStudy {
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  imageAlt: string;
  imageCredit: string;
  facts: { label: string; value: string }[];
  coversHeading: string;
  covers: string[];
  visit: string;
  back: string;
}

// Facts here come from the live website (icd11.biol.pmf.hr). No results or numbers are claimed.
export const caseStudies: Record<string, { href: string; image: string; en: CaseStudy; hr: CaseStudy }> = {
  icd11: {
    href: 'https://icd11.biol.pmf.hr',
    image: '/images/work/icd11.jpg',
    en: {
      title: 'ICD11 – 11th International Congress of Dipterology',
      metaTitle: 'ICD11 Congress Website | Renata Horvat',
      description:
        'Case study: website for the 11th International Congress of Dipterology in Zagreb, 11–16 July 2027, with registration, abstract submission, venue and sponsorship information.',
      eyebrow: 'Case study · Congress · Zagreb 2027',
      lead: 'A website for the 11th International Congress of Dipterology, taking place in Zagreb, Croatia, from 11 to 16 July 2027.',
      imageAlt: 'Home page of the ICD11 congress website',
      imageCredit: 'Screenshot of the website. The logo and photographs are not my work.',
      facts: [
        { label: 'Project', value: 'Congress website' },
        { label: 'Event', value: '11th International Congress of Dipterology (ICDXI)' },
        { label: 'When and where', value: '11–16 July 2027, Zagreb, Croatia' },
        {
          label: 'Organisers',
          value:
            'ICDXI Organizing Committee and the Croatian Association of Freshwater Ecologists (CAFE), under the auspices of the Dipterists Society',
        },
        { label: 'My role', value: 'Web design and development' },
      ],
      coversHeading: 'What the website covers',
      covers: [
        'Programme, committees and excursions',
        'Registration, with the important dates at a glance: early bird, abstract submission and regular registration',
        'Abstract submission guidelines',
        'Venue (Hotel Westin), accommodation and the congress dinner',
        'Sponsorship and exhibition packages',
        'Newsletter sign-up, so interested delegates can follow the news',
        'Practical information and contact',
      ],
      visit: 'Visit the website',
      back: 'All work',
    },
    hr: {
      title: 'ICD11 – XI. međunarodni kongres dipterologije',
      metaTitle: 'Web-stranica kongresa ICD11 | Renata Horvat',
      description:
        'Studija slučaja: web-stranica XI. međunarodnog kongresa dipterologije u Zagrebu, 11.–16. srpnja 2027., s registracijom, prijavom sažetaka, lokacijom i sponzorskim paketima.',
      eyebrow: 'Studija slučaja · Kongres · Zagreb 2027.',
      lead: 'Web-stranica XI. međunarodnog kongresa dipterologije, koji se održava u Zagrebu od 11. do 16. srpnja 2027.',
      imageAlt: 'Početna stranica web-stranice kongresa ICD11',
      imageCredit: 'Snimka zaslona web-stranice. Logotip i fotografije nisu moj rad.',
      facts: [
        { label: 'Projekt', value: 'Web-stranica kongresa' },
        { label: 'Događaj', value: 'XI. međunarodni kongres dipterologije (ICDXI)' },
        { label: 'Kada i gdje', value: '11.–16. srpnja 2027., Zagreb, Hrvatska' },
        {
          label: 'Organizatori',
          value:
            'Organizacijski odbor ICDXI i Croatian Association of Freshwater Ecologists (CAFE), pod pokroviteljstvom Dipterists Society',
        },
        { label: 'Moja uloga', value: 'Dizajn i izrada web-stranice' },
      ],
      coversHeading: 'Što web-stranica sadrži',
      covers: [
        'Program, odbore i izlete',
        'Registraciju s pregledom važnih datuma: rana prijava, prijava sažetaka i redovita registracija',
        'Upute za prijavu sažetaka',
        'Mjesto održavanja (hotel Westin), smještaj i svečanu večeru kongresa',
        'Pakete za sponzore i izlagače',
        'Prijavu na newsletter, da zainteresirani sudionici prate novosti',
        'Praktične informacije i kontakt',
      ],
      visit: 'Posjetite web-stranicu',
      back: 'Svi radovi',
    },
  },
  ist2027: {
    href: 'https://trichoptera.biol.pmf.hr',
    image: '/images/work/trichoptera.jpg',
    en: {
      title: 'IST 2027 – 19th International Symposium on Trichoptera',
      metaTitle: 'IST 2027 Symposium Website | Renata Horvat',
      description:
        'Case study: website for the 19th International Symposium on Trichoptera in Zagreb, 19–23 July 2027, with registration, abstract submission, programme and venue.',
      eyebrow: 'Case study · Symposium · Zagreb 2027',
      lead: 'A website for the 19th International Symposium on Trichoptera, taking place in Zagreb, Croatia, from 19 to 23 July 2027.',
      imageAlt: 'Home page of the IST 2027 symposium website',
      imageCredit: 'Screenshot of the website. The logo is not my work.',
      facts: [
        { label: 'Project', value: 'Symposium website' },
        { label: 'Event', value: '19th International Symposium on Trichoptera (IST 2027)' },
        { label: 'When and where', value: '19–23 July 2027, Sheraton Zagreb Hotel, Zagreb, Croatia' },
        {
          label: 'Organisers',
          value: 'Croatian Biological Society, co-organised by the University of Zagreb and the Faculty of Science',
        },
        { label: 'My role', value: 'Member of the Technical Committee; web design and development' },
      ],
      coversHeading: 'What the website covers',
      covers: [
        'A countdown to the symposium on the home page',
        'The story of the symposium, held every three years since 1974',
        'Committees and contact',
        'Registration, with the important dates: registration opening, early bird, abstract deadline and notification of acceptance',
        'Abstract submission',
        'Venue and programme',
        'A gallery of featured Trichoptera species',
        'Privacy policy',
      ],
      visit: 'Visit the website',
      back: 'All work',
    },
    hr: {
      title: 'IST 2027 – 19. međunarodni simpozij o Trichopterama',
      metaTitle: 'Web-stranica simpozija IST 2027 | Renata Horvat',
      description:
        'Studija slučaja: web-stranica 19. međunarodnog simpozija o Trichopterama u Zagrebu, 19.–23. srpnja 2027., s registracijom, prijavom sažetaka, programom i lokacijom.',
      eyebrow: 'Studija slučaja · Simpozij · Zagreb 2027.',
      lead: 'Web-stranica 19. međunarodnog simpozija o Trichopterama, koji se održava u Zagrebu od 19. do 23. srpnja 2027.',
      imageAlt: 'Početna stranica web-stranice simpozija IST 2027',
      imageCredit: 'Snimka zaslona web-stranice. Logotip nije moj rad.',
      facts: [
        { label: 'Projekt', value: 'Web-stranica simpozija' },
        { label: 'Događaj', value: '19. međunarodni simpozij o Trichopterama (IST 2027)' },
        { label: 'Kada i gdje', value: '19.–23. srpnja 2027., hotel Sheraton Zagreb, Zagreb, Hrvatska' },
        {
          label: 'Organizatori',
          value: 'Hrvatsko biološko društvo, uz suorganizaciju Sveučilišta u Zagrebu i Prirodoslovno-matematičkog fakulteta',
        },
        { label: 'Moja uloga', value: 'Članica tehničkog odbora; dizajn i izrada web-stranice' },
      ],
      coversHeading: 'Što web-stranica sadrži',
      covers: [
        'Odbrojavanje do simpozija na početnoj stranici',
        'Priču o simpoziju, koji se održava svake tri godine od 1974.',
        'Odbore i kontakt',
        'Registraciju s važnim datumima: otvaranje registracije, rana prijava, rok za sažetke i obavijest o prihvaćanju',
        'Prijavu sažetaka',
        'Mjesto održavanja i program',
        'Galeriju odabranih vrsta Trichoptera',
        'Politiku privatnosti',
      ],
      visit: 'Posjetite web-stranicu',
      back: 'Svi radovi',
    },
  },
  'mirisni-potpisi': {
    href: 'https://www.fragrant-signatures.eu/',
    image: '/images/work/fragrant-signatures.jpg',
    en: {
      title: 'Mirisni potpisi – Fragrant Signatures',
      metaTitle: 'Fragrant Signatures Handbook Website | Renata Horvat',
      description:
        'Case study: bilingual website for a handbook on creating natural perfumes, with chapter overview, reviews, education, events and online ordering.',
      eyebrow: 'Case study · Handbook · HR / EN',
      lead: 'A bilingual website, in Croatian and English, for the handbook on creating natural perfumes and the related education.',
      imageAlt: 'Home page of the Mirisni potpisi website',
      imageCredit: 'Screenshot of the website. The book cover is not my work.'
      facts: [
        { label: 'Project', value: 'Handbook website' },
        { label: 'Handbook', value: 'Mirisni potpisi – Priručnik za kreiranje prirodnih parfema (Fragrant Signatures)' },
        { label: 'Author', value: 'Slobodanka Poštić' },
        { label: 'Languages', value: 'Croatian and English' },
        { label: 'My role', value: 'Web design and development' },
      ],
      coversHeading: 'What the website covers',
      covers: [
        'An introduction to the handbook and an overview of all 15 chapters',
        'The table of contents',
        'Reviews by experts',
        'Education and events, with news',
        'Free botanical wallpapers for desktop and mobile',
        'About the author',
        'Links to the community: Facebook group and Instagram',
        'Online ordering of the handbook',
      ],
      visit: 'Visit the website',
      back: 'All work',
    },
    hr: {
      title: 'Mirisni potpisi – Fragrant Signatures',
      metaTitle: 'Web-stranica priručnika Mirisni potpisi | Renata Horvat',
      description:
        'Studija slučaja: dvojezična web-stranica za priručnik o izradi prirodnih parfema, s pregledom poglavlja, recenzijama, edukacijom, događanjima i online naručivanjem.',
      eyebrow: 'Studija slučaja · Priručnik · HR / EN',
      lead: 'Dvojezična web-stranica, na hrvatskom i engleskom, za priručnik o izradi prirodnih parfema i povezanu edukaciju.',
      imageAlt: 'Početna stranica web-stranice Mirisni potpisi',
      imageCredit: 'Snimka zaslona web-stranice. Naslovnica knjige nije moj rad.',
      facts: [
        { label: 'Projekt', value: 'Web-stranica priručnika' },
        { label: 'Priručnik', value: 'Mirisni potpisi – Priručnik za kreiranje prirodnih parfema (Fragrant Signatures)' },
        { label: 'Autorica', value: 'Slobodanka Poštić' },
        { label: 'Jezici', value: 'Hrvatski i engleski' },
        { label: 'Moja uloga', value: 'Dizajn i izrada web-stranice' },
      ],
      coversHeading: 'Što web-stranica sadrži',
      covers: [
        'Uvod u priručnik i pregled svih 15 poglavlja',
        'Sadržaj priručnika',
        'Recenzije stručnjaka',
        'Edukaciju i događanja, s novostima',
        'Besplatne botaničke pozadine za desktop i mobitel',
        'Informacije o autorici',
        'Poveznice na zajednicu: Facebook grupu i Instagram',
        'Online naručivanje priručnika',
      ],
      visit: 'Posjetite web-stranicu',
      back: 'Svi radovi',
    },
  },
};
