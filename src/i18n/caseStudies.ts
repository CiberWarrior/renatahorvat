import type { Locale } from './config';

export interface CaseStudy {
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  imageAlt?: string;
  imageCredit?: string;
  facts: { label: string; value: string }[];
  coversHeading: string;
  covers: string[];
  /** Optional client quote. Only add text the client has actually written and agreed to publish. */
  testimonial?: { quote: string[]; by: string };
  visit: string;
  back: string;
}

// Facts here come from the live website (icd11.biol.pmf.hr). No results or numbers are claimed.
export const caseStudies: Record<string, { href: string; image?: string; en: CaseStudy; hr: CaseStudy }> = {
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
      imageCredit: 'The logo and photographs are not my work.',
      facts: [
        { label: 'Project', value: 'Congress website' },
        { label: 'Event', value: '11th International Congress of Dipterology (ICDXI)' },
        { label: 'When and where', value: '11–16 July 2027, Zagreb, Croatia' },
        {
          label: 'Organisers',
          value:
            'ICDXI Organizing Committee and the Croatian Association of Freshwater Ecologists (CAFE), under the auspices of the Dipterists Society',
        },
        { label: 'My role', value: 'Web design and development, email campaign in Mailchimp' },
      ],
      coversHeading: 'What the website covers',
      covers: [
        'Programme, committees and excursions',
        'Registration, with the important dates at a glance: early bird, abstract submission and regular registration',
        'Abstract submission: step-by-step instructions, a Word template and an online upload form that sends a confirmation email',
        'Venue (Hotel Westin), accommodation and the congress dinner',
        'Sponsorship and exhibition packages',
        'Newsletter sign-up, and an email campaign in Mailchimp sending conference news to about 900 email addresses',
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
      imageCredit: 'Logotip i fotografije nisu moj rad.',
      facts: [
        { label: 'Projekt', value: 'Web-stranica kongresa' },
        { label: 'Događaj', value: 'XI. međunarodni kongres dipterologije (ICDXI)' },
        { label: 'Kada i gdje', value: '11.–16. srpnja 2027., Zagreb, Hrvatska' },
        {
          label: 'Organizatori',
          value:
            'Organizacijski odbor ICDXI i Croatian Association of Freshwater Ecologists (CAFE), pod pokroviteljstvom Dipterists Society',
        },
        { label: 'Moja uloga', value: 'Dizajn i izrada web-stranice, e-mail kampanja u Mailchimpu' },
      ],
      coversHeading: 'Što web-stranica sadrži',
      covers: [
        'Program, odbore i izlete',
        'Registraciju s pregledom važnih datuma: rana prijava, prijava sažetaka i redovita registracija',
        'Prijavu sažetaka: upute korak po korak, Word predložak i online obrazac za učitavanje koji šalje potvrdu e-poštom',
        'Mjesto održavanja (hotel Westin), smještaj i svečanu večeru kongresa',
        'Pakete za sponzore i izlagače',
        'Prijavu na newsletter i e-mail kampanju u Mailchimpu kojom se obavijesti o kongresu šalju na oko 900 e-mail adresa',
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
      imageCredit: 'The logo is not my work.',
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
      imageCredit: 'Logotip nije moj rad.',
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
      imageCredit: 'The book cover is not my work.',
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
      imageCredit: 'Naslovnica knjige nije moj rad.',
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
  bakteriologija: {
    href: 'https://bakteriologija.biol.pmf.hr',
    image: '/images/work/bakteriologija.jpg',
    en: {
      title: 'Bacteriology e-book',
      metaTitle: 'Bacteriology Online Textbook | Renata Horvat',
      description:
        'Case study: online textbook and laboratory manual for the bacteriology course at the Faculty of Science, University of Zagreb, with 23 chapters, protocols and a knowledge check.',
      eyebrow: 'Case study · E-textbook · Faculty of Science',
      lead: 'An online textbook and laboratory manual for the bacteriology course at the Faculty of Science, University of Zagreb.',
      imageAlt: 'Home page of the online bacteriology textbook',
      imageCredit: 'The text is based on a textbook; the design and build are my work.',
      facts: [
        { label: 'Project', value: 'Online textbook and laboratory manual' },
        { label: 'Name', value: 'Mrežni udžbenik iz bakteriologije' },
        { label: 'For', value: 'Biology students, free of charge' },
        { label: 'Language', value: 'Croatian' },
        { label: 'My role', value: 'Web design and development' },
      ],
      coversHeading: 'What the website covers',
      covers: [
        'A preface with an introduction and instructions for using the textbook',
        'A table of contents with all 23 chapters of the bacteriology laboratory course',
        'Step-by-step protocols: sterilisation, staining, counting and biochemical tests',
        'Photographs of the expected results, so students can compare their own',
        'Each chapter as a self-contained unit with clear aims',
        'A knowledge check covering all the chapters',
        'A glossary and site search',
      ],
      visit: 'Visit the website',
      back: 'All work',
    },
    hr: {
      title: 'Bakteriološki praktikum',
      metaTitle: 'Mrežni udžbenik iz bakteriologije | Renata Horvat',
      description:
        'Studija slučaja: mrežni udžbenik i praktikum za kolegij bakteriologije na Prirodoslovno-matematičkom fakultetu Sveučilišta u Zagrebu, s 23 poglavlja, protokolima i provjerom znanja.',
      eyebrow: 'Studija slučaja · E-udžbenik · PMF',
      lead: 'Mrežni udžbenik i praktikum za kolegij bakteriologije na Prirodoslovno-matematičkom fakultetu Sveučilišta u Zagrebu.',
      imageAlt: 'Početna stranica mrežnog udžbenika iz bakteriologije',
      imageCredit: 'Tekst se temelji na udžbeniku; dizajn i izrada su moj rad.',
      facts: [
        { label: 'Projekt', value: 'Mrežni udžbenik i praktikum' },
        { label: 'Naziv', value: 'Mrežni udžbenik iz bakteriologije' },
        { label: 'Za koga', value: 'Studenti biologije, besplatno' },
        { label: 'Jezik', value: 'Hrvatski' },
        { label: 'Moja uloga', value: 'Dizajn i izrada web-stranice' },
      ],
      coversHeading: 'Što web-stranica sadrži',
      covers: [
        'Predgovor s uvodom i uputama za korištenje udžbenika',
        'Sadržaj sa svih 23 poglavlja bakteriološkog praktikuma',
        'Protokole korak po korak: sterilizaciju, bojenja, brojanja i biokemijske testove',
        'Fotografije očekivanih rezultata, da ih studenti mogu usporediti sa svojima',
        'Svako poglavlje kao samostalnu cjelinu s jasnim ciljevima',
        'Provjeru znanja iz svih poglavlja',
        'Rječnik i pretragu',
      ],
      visit: 'Posjetite web-stranicu',
      back: 'Svi radovi',
    },
  },
  'hbd-sbc': {
    href: 'https://www.hbd-sbc.hr',
    image: '/images/work/hbd-sbc.jpg',
    en: {
      title: 'Croatian Biological Society (HBD-SBC)',
      metaTitle: 'Croatian Biological Society Website | Renata Horvat',
      description:
        'Case study: website of the Croatian Biological Society, with congress websites held every three years and online registration and uploads for student biology competitions.',
      eyebrow: 'Case study · Society · Croatia',
      lead: 'The website of the Croatian Biological Society, which also hosts the pages for the Croatian Biological Congress and the registration for student biology competitions.',
      imageAlt: 'Home page of the Croatian Biological Society website',
      facts: [
        { label: 'Project', value: 'Society website, congress websites and competition registration' },
        { label: 'Society', value: 'Croatian Biological Society (HBD-SBC), a voluntary, non-profit association of biologists' },
        { label: 'Language', value: 'Croatian' },
        { label: 'My role', value: 'Web design and development' },
      ],
      coversHeading: 'What the website covers',
      covers: [
        'News, information about the society, membership and contact',
        'The Croatian Biological Congress, held every three years, with a website for each congress',
        'Student competitions in biology, where students register and upload their work online',
        'Bioznalac, student research',
        'The Zdravko Lorković plaque, awarded for contributions to biology',
        'Educatio Biologiae, support for teaching biology',
        'Lectures and expert meetings',
      ],
      visit: 'Visit the website',
      back: 'All work',
    },
    hr: {
      title: 'Hrvatsko biološko društvo (HBD-SBC)',
      metaTitle: 'Web-stranica Hrvatskog biološkog društva | Renata Horvat',
      description:
        'Studija slučaja: web-stranica Hrvatskog biološkog društva, s web-stranicama kongresa koji se održava svake tri godine te online prijavom i učitavanjem radova za natjecanja učenika iz biologije.',
      eyebrow: 'Studija slučaja · Društvo · Hrvatska',
      lead: 'Web-stranica Hrvatskog biološkog društva, na kojoj su i stranice Hrvatskog biološkog kongresa te prijave za natjecanja učenika iz biologije.',
      imageAlt: 'Početna stranica web-stranice Hrvatskog biološkog društva',
      facts: [
        { label: 'Projekt', value: 'Web-stranica društva, web-stranice kongresa i prijave za natjecanja' },
        { label: 'Društvo', value: 'Hrvatsko biološko društvo (HBD-SBC), dobrovoljna neprofitna udruga biologa' },
        { label: 'Jezik', value: 'Hrvatski' },
        { label: 'Moja uloga', value: 'Dizajn i izrada web-stranice' },
      ],
      coversHeading: 'Što web-stranica sadrži',
      covers: [
        'Novosti, informacije o društvu, članstvo i kontakt',
        'Hrvatski biološki kongres, koji se održava svake tri godine, s web-stranicom za svaki kongres',
        'Natjecanja učenika iz biologije, na kojima se učenici prijavljuju i učitavaju radove online',
        'Bioznalac, učenička istraživanja',
        'Plaketu Zdravko Lorković za doprinos biologiji',
        'Educatio Biologiae, podršku poučavanju biologije',
        'Predavanja i stručne skupove',
      ],
      visit: 'Posjetite web-stranicu',
      back: 'Svi radovi',
    },
  },
  genetika: {
    href: 'https://www.genetika.biol.pmf.hr',
    image: '/images/work/genetika.jpg',
    en: {
      title: 'Genetics e-book',
      metaTitle: 'Genetics Online Textbook | Renata Horvat',
      description:
        'Case study: online genetics textbook for biology students at the Faculty of Science, University of Zagreb, with 20 chapters, summaries, review sections and quizzes.',
      eyebrow: 'Case study · E-textbook · Faculty of Science',
      lead: 'An online genetics textbook for undergraduate biology students at the Faculty of Science, University of Zagreb, also intended for students of related fields such as medicine, agronomy and veterinary science.',
      imageAlt: 'Home page of the online genetics textbook',
      imageCredit: 'The text is by the author; the design, WordPress build and most of the illustrations are my work.',
      facts: [
        { label: 'Project', value: 'Online textbook' },
        { label: 'Name', value: 'Mrežni udžbenik iz genetike' },
        { label: 'Author', value: 'Mirjana Pavlica, Faculty of Science, University of Zagreb' },
        { label: 'Language', value: 'Croatian' },
        { label: 'My role', value: 'Web design, WordPress build, illustrations and instructional design' },
      ],
      coversHeading: 'What the website covers',
      covers: [
        'A preface and 20 chapters, from the history of genetics and Mendel’s laws to recombinant DNA technology',
        'Every chapter ends with a summary, a review section and a quiz',
        'Topics from chromosomes, DNA replication and gene expression to population and evolutionary genetics',
        'A glossary',
        'A list of references',
      ],
      testimonial: {
        quote: [
          'Renata drew most of the illustrations and improved the content based on her many years of experience in applying instructional design.',
          'By working on this electronic textbook, we wanted to give students the chance to learn on the move, and to approach topics in genetics in line with new technologies.',
        ],
        by: 'Mirjana Pavlica, author of the textbook (translated from Croatian)',
      },
      visit: 'Visit the website',
      back: 'All work',
    },
    hr: {
      title: 'Mrežni udžbenik iz genetike',
      metaTitle: 'Mrežni udžbenik iz genetike | Renata Horvat',
      description:
        'Studija slučaja: mrežni udžbenik iz genetike za studente biologije na Prirodoslovno-matematičkom fakultetu Sveučilišta u Zagrebu, s 20 poglavlja, sažecima, ponavljanjem i kvizovima.',
      eyebrow: 'Studija slučaja · E-udžbenik · PMF',
      lead: 'Mrežni udžbenik iz genetike za studente preddiplomskih studija biologije na Prirodoslovno-matematičkom fakultetu Sveučilišta u Zagrebu, namijenjen i studentima srodnih struka poput medicinske, agronomske i veterinarske.',
      imageAlt: 'Početna stranica mrežnog udžbenika iz genetike',
      imageCredit: 'Tekst je djelo autorice; dizajn, izrada u WordPressu i većina ilustracija su moj rad.',
      facts: [
        { label: 'Projekt', value: 'Mrežni udžbenik' },
        { label: 'Naziv', value: 'Mrežni udžbenik iz genetike' },
        { label: 'Autorica', value: 'Mirjana Pavlica, Prirodoslovno-matematički fakultet Sveučilišta u Zagrebu' },
        { label: 'Jezik', value: 'Hrvatski' },
        { label: 'Moja uloga', value: 'Web dizajn, izrada u WordPressu, ilustracije i instrukcijski dizajn' },
      ],
      coversHeading: 'Što web-stranica sadrži',
      covers: [
        'Predgovor i 20 poglavlja, od povijesti genetike i Mendelovih zakona do tehnologije rekombinantne DNA',
        'Svako poglavlje završava sažetkom, ponavljanjem i kvizom',
        'Teme od kromosoma, replikacije DNA i ekspresije gena do populacijske i evolucijske genetike',
        'Rječnik',
        'Popis literature',
      ],
      testimonial: {
        quote: [
          'Renata je nacrtala većinu ilustracija te unaprijedila sadržaj na osnovu svojeg dugogodišnjeg iskustva u primjeni instrukcijskog dizajna.',
          'Radom na ovom elektroničkom udžbeniku željeli smo omogućiti studentima učenje u pokretu, pristup temama iz genetike shodno novim tehnologijama.',
        ],
        by: 'Mirjana Pavlica, autorica udžbenika',
      },
      visit: 'Posjetite web-stranicu',
      back: 'Svi radovi',
    },
  },
};
