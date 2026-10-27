import type { Locale } from './config';

export interface CaseStudy {
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  imageAlt: string;
  facts: { label: string; value: string }[];
  coversHeading: string;
  covers: string[];
  extraHeading: string;
  extra: string;
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
      extraHeading: 'The logo',
      extra:
        'The congress logo combines symbols of Zagreb, the Lotrščak Tower and the Manduševac well, with a Chironomus midge emerging from the well. The website explains the logo and offers it for download.',
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
      extraHeading: 'Logotip',
      extra:
        'Logotip kongresa spaja simbole Zagreba, Kulu Lotrščak i zdenac Manduševac, s kukcem roda Chironomus koji izlazi iz zdenca. Web-stranica objašnjava logotip i nudi ga za preuzimanje.',
      visit: 'Posjetite web-stranicu',
      back: 'Svi radovi',
    },
  },
};
