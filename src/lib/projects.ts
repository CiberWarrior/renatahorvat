export type ProjectCategory = 'elearning' | 'society' | 'conference' | 'other';

export interface Project {
  title: string;
  summary: string;
  href: string;
  tags: string[];
  icon: string;
  iconBg: string;
  category: ProjectCategory;
  featured?: boolean;
  caseStudySlug?: string;
  image?: string;
  role?: string;
  /** Kept for reference but not shown in the portfolio (outside the academic niche) */
  archived?: boolean;
}

export const projects: Project[] = [
  // Projects with links
  {
    title: 'Mirisni potpisi - Fragrant Signatures',
    summary:
      'Website for the handbook on creating natural perfumes: book presentation, table of contents and reviews, education and events, in Croatian and English, with online ordering.',
    href: 'https://www.fragrant-signatures.eu/',
    tags: ['Handbook', 'Education', 'Natural perfumery', 'Bilingual'],
    icon: 'book',
    iconBg: 'purple-pink',
    category: 'elearning',
    featured: true,
    image: '/images/work/fragrant-signatures.jpg',
    role: 'Bilingual website for a handbook and courses on natural perfume making.',
  },
  {
    title: 'Bacteriology e-book',
    summary:
      'Online textbook and lab manual for the bacteriology practical at the Faculty of Science, University of Zagreb, with step-by-step guides from aseptic technique to identifying bacteria.',
    href: 'https://bakteriologija.biol.pmf.hr',
    tags: ['Education', 'Microbiology', 'E-learning'],
    icon: 'book',
    iconBg: 'cyan-blue',
    category: 'elearning',
    featured: true,
    image: '/images/work/bakteriologija.jpg',
    role: 'Online textbook and lab manual for a university bacteriology practical.',
  },
  {
    title: 'Genetika e-book',
    summary:
      'Comprehensive online genetics textbook for biology students at University of Zagreb, featuring interactive content and modern web design.',
    href: 'https://www.genetika.biol.pmf.hr',
    tags: ['Education', 'Genetics', 'Biology', 'E-learning'],
    icon: 'book',
    iconBg: 'blue-purple',
    category: 'elearning',
    featured: true,
    image: '/images/work/genetika.jpg',
    role: 'Web design, WordPress build and educational diagrams for a university textbook.',
    // caseStudySlug: 'genetika-ebook',
  },
  {
    title: 'Botanical Garden Zagreb',
    summary:
      'Official website for the University of Zagreb Botanical Garden, showcasing plant collections, educational programs, and visitor information.',
    href: 'https://botanickivrt.biol.pmf.hr',
    tags: ['Botany', 'Education', 'Nature', 'University'],
    icon: 'leaf',
    iconBg: 'green-teal',
    category: 'other',
  },
  {
    title: 'IST 2027 - 19th International Symposium on Trichoptera',
    summary:
      'Official website for the 19th International Symposium on Trichoptera, held in Zagreb, Croatia, in July 2027. Features programme, registration, abstract submission, venue information and a gallery of caddisflies.',
    href: 'https://trichoptera.biol.pmf.hr/',
    tags: ['Trichoptera', 'Entomology', 'Symposium', 'Zagreb', 'International'],
    icon: 'users',
    iconBg: 'green-teal',
    category: 'conference',
    featured: true,
    image: '/images/work/trichoptera.jpg',
    role: 'Symposium website for the programme, registration, abstracts and venue.',
  },
  {
    title: 'ICD11 - XI. International Congress of Dipterology',
    summary:
      'Official website for the XI. International Congress of Dipterology, held in Zagreb, Croatia. Features scientific program, registration, abstract submission, keynote speakers, and venue information.',
    href: 'https://icd11.biol.pmf.hr',
    tags: ['Dipterology', 'Entomology', 'Congress', 'Zagreb', 'International'],
    icon: 'users',
    iconBg: 'teal-cyan',
    category: 'conference',
    featured: true,
    image: '/images/work/icd11.jpg',
    role: 'Congress site for the programme, registration, abstracts and speakers.',
  },
  {
    title: '15th Croatian Biological Congress',
    summary:
      'Modern conference website with registration system, speaker profiles, and interactive schedule management.',
    href: 'https://www.hbd-sbc.hr/en/congress2025/',
    tags: ['Conference', 'Registration', 'Interactive', 'Design'],
    icon: 'users',
    iconBg: 'purple-pink',
    category: 'conference',
  },
  {
    title: 'EOES 2025 - European Olympiad of Experimental Science',
    summary:
      'Official website for the European Olympiad of Experimental Science 2025, hosted in Zagreb, Croatia. Features event information, registration, program details, and venue information.',
    href: 'https://eoes2025.pmf.unizg.hr/',
    tags: ['Olympiad', 'Science', 'Education', 'Event', 'Zagreb'],
    icon: 'trophy',
    iconBg: 'amber-yellow',
    category: 'conference',
  },
  {
    title: 'Herbarium Croaticum',
    summary:
      'Digital herbarium database showcasing Croatian plant collections and botanical specimens from the University of Zagreb Faculty of Science.',
    href: 'https://herbariumcroaticum.biol.pmf.hr/',
    tags: ['Herbarium', 'Botany', 'Database', 'Croatia', 'University'],
    icon: 'database',
    iconBg: 'emerald-green',
    category: 'other',
    featured: true,
    image: '/images/work/herbarium.jpg',
    role: 'Collection website for specimens, search and the work of a university herbarium.',
  },
  {
    title: 'Croatian Botanical Society',
    summary:
      'Official website of the Croatian Botanical Society, promoting botanical sciences and conservation of Croatian flora, vegetation, and biodiversity.',
    href: 'https://www.hbod.hr/en/',
    tags: ['Botany', 'Society', 'Conservation', 'Croatia', 'Science'],
    icon: 'leaf',
    iconBg: 'lime-green',
    category: 'society',
  },
  {
    title: 'FEPS - Federation of European Phycological Societies',
    summary:
      'International federation uniting 11 phycological societies across Europe, promoting algal research, education, and conservation initiatives.',
    href: 'https://www.feps-algae.org/',
    tags: ['Phycology', 'Algae', 'Europe', 'Research', 'Federation'],
    icon: 'globe',
    iconBg: 'teal-cyan',
    category: 'society',
    featured: true,
    image: '/images/work/feps.jpg',
    role: 'Society website for news, membership and symposia across Europe.',
  },
  {
    title: 'IAA 2024 - International Association of Astacology Symposium',
    summary:
      'Official website for the International Association of Astacology Symposium 2024, held in Zagreb, Croatia. Features scientific program, registration, abstracts, and keynote speakers.',
    href: 'https://iaa24.biol.pmf.hr/',
    tags: ['Astacology', 'Crayfish', 'Symposium', 'Zagreb', 'Research'],
    icon: 'users',
    iconBg: 'indigo-purple',
    category: 'conference',
  },
  {
    title: 'Croatian Society of Plant Biologists (HDBB)',
    summary:
      'Official website of the Croatian Society of Plant Biologists, founded in 1977. Features scientific activities, symposiums, lectures, and membership information.',
    href: 'https://www.hdbb.hr/',
    tags: ['Plant Biology', 'Society', 'Croatia', 'Research', 'Physiology'],
    icon: 'microscope',
    iconBg: 'rose-pink',
    category: 'society',
  },
  {
    title: 'Croatian National Diatom Collection',
    summary:
      'Digital collection showcasing Croatian diatom specimens and research materials. Features species database, educational resources, and collaboration opportunities.',
    href: 'https://www.diatoms.biol.pmf.hr/',
    tags: ['Diatoms', 'Collection', 'Croatia', 'Research', 'Education'],
    icon: 'database',
    iconBg: 'violet-purple',
    category: 'society',
    featured: true,
    image: '/images/work/diatoms.jpg',
    role: 'Digital collection of Croatian diatoms: species database, specimens and research materials.',
  },
  {
    title: 'Croatian Biological Society (HBD-SBC)',
    summary:
      'Official website of the Croatian Biological Society, supporting scientific work in biology, education advancement, and nature conservation. Features congresses, competitions, and professional activities.',
    href: 'https://www.hbd-sbc.hr/',
    tags: ['Biology', 'Society', 'Croatia', 'Education', 'Conservation'],
    icon: 'users',
    iconBg: 'sky-blue',
    category: 'society',
  },
  {
    title: 'Healthy Grape Vine - Virus Elimination',
    summary:
      'Patented technology for eliminating viruses and phytoplasmas from grapevines using somatic embryogenesis. Features 90-100% success rate in virus elimination while preserving varietal identity.',
    href: 'https://zdravaloza.biol.pmf.hr/en/home/',
    tags: ['Viticulture', 'Virus Elimination', 'Patent', 'Research', 'Agriculture'],
    icon: 'beaker',
    iconBg: 'red-orange',
    category: 'other',
  },
  {
    title: 'ROTIFERA XVI 2022 - International Rotifer Symposium',
    summary:
      'Official website for the 16th International Rotifer Symposium held in Zagreb, Croatia. Features scientific program, keynote speakers, abstracts, and international rotifer research community.',
    href: 'https://www.rotiferaxvi.biol.pmf.hr/',
    tags: ['Rotifera', 'Symposium', 'Zagreb', 'Research', 'International'],
    icon: 'microscope',
    iconBg: 'orange-yellow',
    category: 'conference',
  },
  {
    title: 'ECCB 2022 - European Committee for Conservation of Bryophytes',
    summary:
      'Official website for the 10th Conference of European Committee for Conservation of Bryophytes held in Zagreb, Croatia. Features scientific program, excursions, and bryophyte conservation research.',
    href: 'https://www.eccbmeeting.biol.pmf.hr/',
    tags: ['Bryophytes', 'Conservation', 'Conference', 'Zagreb', 'Research'],
    icon: 'leaf',
    iconBg: 'yellow-green',
    category: 'conference',
  },
  {
    title: 'Bicikli Palko - Bicycle Service',
    summary:
      'Professional bicycle service and repair shop established in 1990. Features racing bike assembly, wheel centering, diagnostics, and expert advice for all types of bicycles.',
    href: 'https://www.bicikli-palko.hr/',
    tags: ['Bicycle', 'Service', 'Repair', 'Racing', 'Croatia'],
    icon: 'bicycle',
    iconBg: 'pink-red',
    category: 'other',
    archived: true,
  },

];

/** Projects shown on the site */
export const portfolio = projects.filter((p) => !p.archived && p.href.trim() !== '');
