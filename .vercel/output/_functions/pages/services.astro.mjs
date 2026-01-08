import { e as createAstro, f as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, h as addAttribute, n as Fragment, u as unescapeHTML } from '../chunks/astro/server_DprdFlq6.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_CVwqHldn.mjs';
import { $ as $$Services$1 } from '../chunks/Services_BZ9dlphh.mjs';
import { a as $$Card, b as $$CardContent, $ as $$Badge } from '../chunks/CardContent_DkR4ZT0_.mjs';
export { renderers } from '../renderers.mjs';

const projects = [
  // Projects with links
  {
    title: "Bacteriology e-book",
    summary: "Interactive e-learning platform with custom MDX layouts, fast navigation, and engaging visual content for medical students.",
    href: "https://praktikum-iz-bakteriologije.vercel.app/",
    tags: ["Astro", "MDX", "Education", "Medical"],
    icon: "book",
    iconBg: "cyan-blue"
  },
  {
    title: "Genetika e-book",
    summary: "Comprehensive online genetics textbook for biology students at University of Zagreb, featuring interactive content and modern web design.",
    href: "https://www.genetika.biol.pmf.hr/",
    tags: ["Education", "Genetics", "Biology", "E-learning"],
    icon: "book",
    iconBg: "blue-purple"
  },
  {
    title: "Botanical Garden Zagreb",
    summary: "Official website for the University of Zagreb Botanical Garden, showcasing plant collections, educational programs, and visitor information.",
    href: "https://botanickivrt.biol.pmf.hr/",
    tags: ["Botany", "Education", "Nature", "University"],
    icon: "leaf",
    iconBg: "green-teal"
  },
  {
    title: "Scientific Conference Website",
    summary: "Modern conference website with registration system, speaker profiles, and interactive schedule management.",
    href: "https://www.hbd-sbc.hr/en/congress2025/",
    tags: ["Conference", "Registration", "Interactive", "Design"],
    icon: "users",
    iconBg: "purple-pink"
  },
  {
    title: "EOES 2025 - European Olympiad of Experimental Science",
    summary: "Official website for the European Olympiad of Experimental Science 2025, hosted in Zagreb, Croatia. Features event information, registration, program details, and venue information.",
    href: "https://eoes2025.pmf.unizg.hr/",
    tags: ["Olympiad", "Science", "Education", "Event", "Zagreb"],
    icon: "trophy",
    iconBg: "amber-yellow"
  },
  {
    title: "Herbarium Croaticum",
    summary: "Digital herbarium database showcasing Croatian plant collections and botanical specimens from the University of Zagreb Faculty of Science.",
    href: "https://herbariumcroaticum.biol.pmf.hr/",
    tags: ["Herbarium", "Botany", "Database", "Croatia", "University"],
    icon: "database",
    iconBg: "emerald-green"
  },
  {
    title: "Croatian Botanical Society",
    summary: "Official website of the Croatian Botanical Society, promoting botanical sciences and conservation of Croatian flora, vegetation, and biodiversity.",
    href: "https://www.hbod.hr/en/",
    tags: ["Botany", "Society", "Conservation", "Croatia", "Science"],
    icon: "leaf",
    iconBg: "lime-green"
  },
  {
    title: "FEPS - Federation of European Phycological Societies",
    summary: "International federation uniting 11 phycological societies across Europe, promoting algal research, education, and conservation initiatives.",
    href: "https://www.feps-algae.org/",
    tags: ["Phycology", "Algae", "Europe", "Research", "Federation"],
    icon: "globe",
    iconBg: "teal-cyan"
  },
  {
    title: "IAA 2024 - International Association of Astacology Symposium",
    summary: "Official website for the International Association of Astacology Symposium 2024, held in Zagreb, Croatia. Features scientific program, registration, abstracts, and keynote speakers.",
    href: "https://iaa24.biol.pmf.hr/",
    tags: ["Astacology", "Crayfish", "Symposium", "Zagreb", "Research"],
    icon: "users",
    iconBg: "indigo-purple"
  },
  {
    title: "Croatian Society of Plant Biologists (HDBB)",
    summary: "Official website of the Croatian Society of Plant Biologists, founded in 1977. Features scientific activities, symposiums, lectures, and membership information.",
    href: "https://www.hdbb.hr/",
    tags: ["Plant Biology", "Society", "Croatia", "Research", "Physiology"],
    icon: "microscope",
    iconBg: "rose-pink"
  },
  {
    title: "Croatian National Diatom Collection",
    summary: "Digital collection showcasing Croatian diatom specimens and research materials. Features species database, educational resources, and collaboration opportunities.",
    href: "https://www.diatoms.biol.pmf.hr/",
    tags: ["Diatoms", "Collection", "Croatia", "Research", "Education"],
    icon: "database",
    iconBg: "violet-purple"
  },
  {
    title: "Croatian Biological Society (HBD-SBC)",
    summary: "Official website of the Croatian Biological Society, supporting scientific work in biology, education advancement, and nature conservation. Features congresses, competitions, and professional activities.",
    href: "https://www.hbd-sbc.hr/",
    tags: ["Biology", "Society", "Croatia", "Education", "Conservation"],
    icon: "users",
    iconBg: "sky-blue"
  },
  {
    title: "Healthy Grape Vine - Virus Elimination",
    summary: "Patented technology for eliminating viruses and phytoplasmas from grapevines using somatic embryogenesis. Features 90-100% success rate in virus elimination while preserving varietal identity.",
    href: "https://zdravaloza.biol.pmf.hr/en/home/",
    tags: ["Viticulture", "Virus Elimination", "Patent", "Research", "Agriculture"],
    icon: "beaker",
    iconBg: "red-orange"
  },
  {
    title: "ROTIFERA XVI 2022 - International Rotifer Symposium",
    summary: "Official website for the 16th International Rotifer Symposium held in Zagreb, Croatia. Features scientific program, keynote speakers, abstracts, and international rotifer research community.",
    href: "https://www.rotiferaxvi.biol.pmf.hr/",
    tags: ["Rotifera", "Symposium", "Zagreb", "Research", "International"],
    icon: "microscope",
    iconBg: "orange-yellow"
  },
  {
    title: "ECCB 2022 - European Committee for Conservation of Bryophytes",
    summary: "Official website for the 10th Conference of European Committee for Conservation of Bryophytes held in Zagreb, Croatia. Features scientific program, excursions, and bryophyte conservation research.",
    href: "https://www.eccbmeeting.biol.pmf.hr/",
    tags: ["Bryophytes", "Conservation", "Conference", "Zagreb", "Research"],
    icon: "leaf",
    iconBg: "yellow-green"
  },
  {
    title: "Bicikli Palko - Bicycle Service",
    summary: "Professional bicycle service and repair shop established in 1990. Features racing bike assembly, wheel centering, diagnostics, and expert advice for all types of bicycles.",
    href: "https://www.bicikli-palko.hr/",
    tags: ["Bicycle", "Service", "Repair", "Racing", "Croatia"],
    icon: "bicycle",
    iconBg: "pink-red"
  },
  // Projects without links
  {
    title: "WP → Astro Migration",
    summary: "Complete migration from WordPress to Astro, resulting in 80% faster load times and improved SEO performance.",
    href: "",
    tags: ["Migration", "Tailwind", "Performance", "SEO"],
    icon: "default",
    iconBg: "cyan-blue"
  },
  {
    title: "Educational Visual Library",
    summary: "Comprehensive library of scientific infographics and educational materials with search and filtering capabilities.",
    href: "",
    tags: ["Infographics", "Education", "Search", "Visual"],
    icon: "book",
    iconBg: "blue-purple"
  },
  {
    title: "AI-Powered Content Generator",
    summary: "Custom tool for generating educational content using AI, with template system and quality control features.",
    href: "",
    tags: ["AI", "Automation", "Content", "Templates"],
    icon: "beaker",
    iconBg: "purple-pink"
  },
  {
    title: "Research Data Visualization",
    summary: "Interactive dashboard for displaying complex research data with charts, filters, and export functionality.",
    href: "",
    tags: ["Data", "Visualization", "Dashboard", "Research"],
    icon: "database",
    iconBg: "green-teal"
  }
];

const $$Astro$1 = createAstro("https://renatahorvat.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, summary, href, tags = [], icon = "default", iconBg = "cyan-blue" } = Astro2.props;
  const getIcon = (iconName) => {
    const icons = {
      book: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
    </svg>`,
      globe: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"></path>
    </svg>`,
      leaf: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
    </svg>`,
      users: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
    </svg>`,
      microscope: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>`,
      database: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
    </svg>`,
      trophy: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
    </svg>`,
      beaker: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
    </svg>`,
      bicycle: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>`,
      default: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
    </svg>`
    };
    return icons[iconName] || icons.default;
  };
  const getIconBg = (bgName) => {
    const backgrounds = {
      "cyan-blue": "bg-gradient-to-r from-cyan-400 to-blue-500",
      "blue-purple": "bg-gradient-to-r from-blue-500 to-purple-600",
      "purple-pink": "bg-gradient-to-r from-purple-600 to-pink-500",
      "pink-red": "bg-gradient-to-r from-pink-500 to-red-500",
      "red-orange": "bg-gradient-to-r from-red-500 to-orange-500",
      "orange-yellow": "bg-gradient-to-r from-orange-500 to-yellow-500",
      "yellow-green": "bg-gradient-to-r from-yellow-500 to-green-500",
      "green-teal": "bg-gradient-to-r from-green-500 to-teal-500",
      "teal-cyan": "bg-gradient-to-r from-teal-500 to-cyan-500",
      "indigo-purple": "bg-gradient-to-r from-indigo-500 to-purple-500",
      "emerald-green": "bg-gradient-to-r from-emerald-500 to-green-500",
      "rose-pink": "bg-gradient-to-r from-rose-500 to-pink-500",
      "violet-purple": "bg-gradient-to-r from-violet-500 to-purple-500",
      "amber-yellow": "bg-gradient-to-r from-amber-500 to-yellow-500",
      "lime-green": "bg-gradient-to-r from-lime-500 to-green-500",
      "sky-blue": "bg-gradient-to-r from-sky-500 to-blue-500"
    };
    return backgrounds[bgName] || backgrounds["cyan-blue"];
  };
  const getIconGlow = (bgName) => {
    const glows = {
      "cyan-blue": "from-cyan-400 to-blue-500",
      "blue-purple": "from-blue-500 to-purple-600",
      "purple-pink": "from-purple-600 to-pink-500",
      "pink-red": "from-pink-500 to-red-500",
      "red-orange": "from-red-500 to-orange-500",
      "orange-yellow": "from-orange-500 to-yellow-500",
      "yellow-green": "from-yellow-500 to-green-500",
      "green-teal": "from-green-500 to-teal-500",
      "teal-cyan": "from-teal-500 to-cyan-500",
      "indigo-purple": "from-indigo-500 to-purple-500",
      "emerald-green": "from-emerald-500 to-green-500",
      "rose-pink": "from-rose-500 to-pink-500",
      "violet-purple": "from-violet-500 to-purple-500",
      "amber-yellow": "from-amber-500 to-yellow-500",
      "lime-green": "from-lime-500 to-green-500",
      "sky-blue": "from-sky-500 to-blue-500"
    };
    return glows[bgName] || glows["cyan-blue"];
  };
  return renderTemplate`${maybeRenderHead()}<div class="relative group h-full"> <!-- Neon glow effect --> <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div> <!-- Main card --> ${renderComponent($$result, "Card", $$Card, { "class": "relative bg-gray-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl overflow-hidden h-full" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "p-6 h-full flex flex-col" }, { "default": ($$result3) => renderTemplate` <div class="flex items-start space-x-4 flex-grow"> <!-- Project icon --> <div class="relative"> <div${addAttribute(`w-12 h-12 ${getIconBg(iconBg)} rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-400/30`, "class")}> ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(getIcon(icon))}` })} </div> <!-- Icon glow --> <div${addAttribute(`absolute inset-0 w-12 h-12 bg-gradient-to-r ${getIconGlow(iconBg)} rounded-xl blur opacity-30`, "class")}></div> </div> <div class="flex-1"> <h3 class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"> ${title} </h3> <p class="text-gray-100 mb-4 leading-relaxed"> ${summary} </p> <!-- Tags --> ${tags.length > 0 && renderTemplate`<div class="mb-4"> <div class="flex flex-wrap gap-2"> ${tags.map((tag) => renderTemplate`<span class="px-2 py-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium"> ${tag} </span>`)} </div> </div>`} </div> </div>  ${href && href.trim() !== "" && renderTemplate`<div class="flex justify-end mt-auto"> <a${addAttribute(href, "href")} class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 font-medium rounded-lg hover:from-cyan-400/30 hover:to-blue-500/30 transition-all duration-300" onclick="gtag('event', 'project_view', { project_title: '{title}', project_url: '{href}' })">
View Project
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div>`} <div class="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg"></div> <div class="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-lg"></div> ` })} ` })} </div>`;
}, "/Users/renata/Desktop/renatahorvat/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro("https://renatahorvat.com");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const pageTitle = "Services by Renata Horvat - E-learning & Academic Web Design | Croatia";
  const pageDescription = "Professional design services by Renata Horvat: e-learning platforms, academic websites, scientific infographics, and WordPress to Astro migration. Based in Croatia, serving universities and research institutions worldwide.";
  const pageKeywords = "Renata Horvat services, e-learning design, academic websites, scientific infographics, WordPress migration, Astro development, instructional design, educational platforms, university websites, research communication, Croatia designer, Zagreb web design";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "ServicesComponent", $$Services$1, {})} <!-- Portfolio Section --> <section class="py-20 bg-transparent"> <div class="relative max-w-7xl mx-auto px-6"> <div class="text-center mb-16"> <div class="relative inline-block mb-6"> <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30"></div> ${renderComponent($$result2, "Badge", $$Badge, { "variant": "default", "class": "relative bg-gray-900/80 border border-cyan-400/30 text-cyan-400 gap-2" }, { "default": ($$result3) => renderTemplate` <span class="w-2 h-2 bg-cyan-400 rounded-full"></span>
Portfolio
` })} </div> <h2 class="text-4xl lg:text-5xl font-black text-white mb-4"> <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
My Work
</span> </h2> <p class="text-lg text-gray-300 max-w-2xl mx-auto">
A showcase of projects that demonstrate my approach to design and development
</p> </div> <div class="grid md:grid-cols-2 gap-8"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/renata/Desktop/renatahorvat/src/pages/services.astro", void 0);

const $$file = "/Users/renata/Desktop/renatahorvat/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
