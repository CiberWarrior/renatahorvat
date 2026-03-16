export type ProjectCategory = 'elearning' | 'society' | 'conference' | 'other';

export interface Project {
  title: string;
  summary: string;
  href: string;
  tags: string[];
  icon: string;
  iconBg: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  // Projects with links
  {
    title: 'Bacteriology e-book',
    summary:
      'Interactive e-learning platform with fast navigation and engaging visual content for medical students.',
    href: 'https://bakteriologija.biol.pmf.hr',
    tags: ['Education', 'Medical'],
    icon: 'book',
    iconBg: 'cyan-blue',
    category: 'elearning',
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
    title: 'ICD11 - XI. International Congress of Dipterology',
    summary:
      'Official website for the XI. International Congress of Dipterology, held in Zagreb, Croatia. Features scientific program, registration, abstract submission, keynote speakers, and venue information.',
    href: 'https://icd11.biol.pmf.hr',
    tags: ['Dipterology', 'Entomology', 'Congress', 'Zagreb', 'International'],
    icon: 'users',
    iconBg: 'teal-cyan',
    category: 'conference',
  },
  {
    title: 'Scientific Conference Website',
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
  },

];
