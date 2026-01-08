import { e as createAstro, f as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, h as addAttribute, n as Fragment, u as unescapeHTML } from './astro/server_DprdFlq6.mjs';
import 'kleur/colors';
import { $ as $$Badge, a as $$Card, b as $$CardContent } from './CardContent_DkR4ZT0_.mjs';

const $$Astro = createAstro("https://renatahorvat.com");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const services = [
    {
      title: "Interactive E-Learning Platforms",
      description: "Custom digital textbooks and educational platforms built with Astro & MDX. Fast, searchable, and optimized for student engagement.",
      details: "Deliverables: Custom MDX layouts \u2022 Search functionality \u2022 Progress tracking \u2022 Mobile-responsive design \u2022 Performance optimization",
      icon: "book",
      iconBg: "cyan-blue",
      results: "+40% engagement, -60% load time"
    },
    {
      title: "Academic & Conference Websites",
      description: "Modern, fast websites for universities, research institutions, and scientific events. Built with Astro for maximum performance.",
      details: "Deliverables: Custom design \u2022 Registration systems \u2022 Speaker profiles \u2022 Schedule management \u2022 SEO optimization \u2022 Analytics integration",
      icon: "globe",
      iconBg: "blue-purple",
      results: "80% faster than WordPress"
    },
    {
      title: "Scientific Infographics & Visual Content",
      description: "Transform complex research and data into clear, engaging visuals. Perfect for publications, presentations, and educational materials.",
      details: "Deliverables: Infographics \u2022 Data visualizations \u2022 Diagrams \u2022 Educational illustrations \u2022 Video tutorials \u2022 Presentation design",
      icon: "palette",
      iconBg: "purple-pink",
      results: "+80% comprehension"
    },
    {
      title: "WordPress to Modern Stack Migration",
      description: "Migrate your slow WordPress site to blazing-fast Astro. Keep your content, gain speed, reduce hosting costs, improve SEO.",
      details: "Deliverables: Full site migration \u2022 Content preservation \u2022 Performance optimization \u2022 Training & documentation \u2022 6 months support",
      icon: "zap",
      iconBg: "pink-red",
      results: "80% faster, 50% cheaper hosting"
    }
  ];
  const icons = {
    book: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
    globe: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`,
    palette: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M7 3h10a2 2 0 012 2v12a4 4 0 01-4 4H7M7 3v18"></path></svg>`,
    zap: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
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
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-transparent"> <!-- SEO H1 tag for Services section --> <h1 class="sr-only">Services by Renata Horvat - Professional Design & Development Services</h1> <div class="relative max-w-7xl mx-auto px-6"> <div class="text-center mb-16"> ${renderComponent($$result, "Badge", $$Badge, { "variant": "default", "class": "gap-2 mb-6" }, { "default": ($$result2) => renderTemplate` <span class="w-2 h-2 bg-primary rounded-full"></span>
What I Do
` })} <h2 class="text-4xl lg:text-5xl font-black text-white mb-4"> <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
What I Do
</span> </h2> <p class="text-lg text-gray-300 max-w-2xl mx-auto">
Transforming complex ideas into intuitive, visually appealing experiences
</p> </div> <div class="grid md:grid-cols-2 gap-8"> ${services.map((service, index) => renderTemplate`<div class="relative group gpu-accelerated"> <!-- Neon glow effect - Optimized --> <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-sm opacity-25 group-hover:opacity-40 transition duration-500 group-hover:duration-200"></div> <!-- Main card - Optimized --> ${renderComponent($$result, "Card", $$Card, { "class": "relative bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-2xl overflow-hidden h-full gpu-accelerated" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "p-8 h-full flex flex-col" }, { "default": ($$result3) => renderTemplate` <div class="text-center flex-grow"> <!-- Icon with neon effect --> <div class="relative mb-6"> <div${addAttribute(`w-20 h-20 ${getIconBg(service.iconBg)} rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-cyan-400/30`, "class")}> ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(icons[service.icon])}` })} </div> <!-- Icon glow --> <div${addAttribute(`absolute inset-0 w-20 h-20 bg-gradient-to-r ${getIconGlow(service.iconBg)} rounded-2xl blur opacity-30 mx-auto`, "class")}></div> </div> <!-- Title --> <h3 class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"> ${service.title} </h3> <!-- Description --> <p class="text-gray-100 text-lg leading-relaxed mb-4"> ${service.description} </p> <!-- Deliverables --> <p class="text-gray-400 text-sm leading-relaxed mb-6 text-left px-4"> ${service.details} </p> <!-- Results badge --> <div class="inline-block bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-4 py-2"> <div class="text-cyan-400 font-semibold text-sm"> ${service.results} </div> </div> </div>  <div class="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg"></div> <div class="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-lg"></div> ` })} ` })} </div>`)} </div> </div> </section>`;
}, "/Users/renata/Desktop/renatahorvat/src/components/Services.astro", void 0);

export { $$Services as $ };
