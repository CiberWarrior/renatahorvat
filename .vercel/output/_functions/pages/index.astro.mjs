import { f as createComponent, m as maybeRenderHead, r as renderTemplate, e as createAstro, k as renderComponent } from '../chunks/astro/server_DprdFlq6.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_CVwqHldn.mjs';
import 'clsx';
import { $ as $$Services } from '../chunks/Services_BZ9dlphh.mjs';
import { $ as $$Badge, a as $$Card, b as $$CardContent } from '../chunks/CardContent_DkR4ZT0_.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative py-20 bg-transparent overflow-hidden"> <!-- SEO H1 tag - hidden but accessible to search engines --> <h1 class="sr-only">Renata Horvat - Designer who speaks the language of science</h1> <!-- Futuristic background --> <div class="absolute inset-0"> <div class="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50"></div> <!-- Animated grid pattern --> <div class="absolute inset-0 opacity-10"> <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0); background-size: 20px 20px;"></div> </div> <!-- Floating particles --> <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div> <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full opacity-40"></div> <div class="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-600 rounded-full opacity-50"></div> </div> <div class="relative max-w-7xl mx-auto px-6"> <div class="max-w-4xl mx-auto text-center"> <div class="space-y-6"> <!-- Enhanced main heading - now H2 for better SEO structure --> <h2 class="text-5xl lg:text-7xl font-black leading-tight mb-8"> <span class="block bg-gradient-to-r from-gray-100 via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-6 tracking-tight">
I turn complex research into
</span> <span class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight">
beautiful digital experiences
</span> </h2> <!-- Subtitle --> <p class="text-xl lg:text-2xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
Websites, e-learning platforms, and visual content for universities and research institutions. <span class="text-cyan-400">20+ years</span> making science accessible and engaging.
</p> <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"> <!-- Primary CTA --> <a href="/services" class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-block" onclick="gtag('event', 'cta_click', { cta_type: 'view_projects', cta_location: 'hero' })">
View Projects & Services
</a> <!-- Secondary CTA --> <a href="/contact" class="px-8 py-4 border-2 border-cyan-400/30 text-cyan-400 font-bold text-lg rounded-2xl hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 inline-block" onclick="gtag('event', 'cta_click', { cta_type: 'get_in_touch', cta_location: 'hero' })">
Get In Touch
</a> </div> </div> </div> </div> </section>`;
}, "/Users/renata/Desktop/renatahorvat/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://renatahorvat.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-transparent"> <!-- SEO H1 tag for About section --> <h1 class="sr-only">About Renata Horvat - Academic Content Specialist & Science Communication Expert</h1> <div class="relative max-w-7xl mx-auto px-6"> <!-- Header --> <div class="text-center mb-20"> ${renderComponent($$result, "Badge", $$Badge, { "variant": "default", "class": "gap-2 mb-6" }, { "default": ($$result2) => renderTemplate` <span class="w-2 h-2 bg-cyan-400 rounded-full"></span>
What I Do
` })} <h2 class="text-4xl lg:text-5xl font-black text-white mb-6"> <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
Academic Content Specialist
</span> </h2> <p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
For <span class="text-cyan-400 font-semibold">20+ years</span>, I've helped universities and research institutions create fast, modern digital experiences.
</p> <p class="text-lg text-gray-400 max-w-2xl mx-auto">
From interactive e-books to conference websites — I turn complex knowledge into accessible content.
</p> </div> <!-- 3 Key Service Areas with Examples --> <div class="grid lg:grid-cols-3 gap-8 mb-16"> <!-- Card 1: Academic Websites --> ${renderComponent($$result, "Card", $$Card, { "class": "bg-gray-900/60 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "p-8" }, { "default": ($$result3) => renderTemplate` <div class="w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6"> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path> </svg> </div> <h3 class="text-xl font-bold text-white mb-3">Academic Websites</h3> <p class="text-gray-300 leading-relaxed mb-4">
Fast, modern websites for universities and research institutions.
</p> <div class="space-y-2 mb-4"> <div class="text-sm text-gray-400"> <span class="text-cyan-400">•</span> University of Zagreb Botanical Garden
</div> <div class="text-sm text-gray-400"> <span class="text-cyan-400">•</span> Croatian Biological Society
</div> <div class="text-sm text-gray-400"> <span class="text-cyan-400">•</span> 15+ scientific conference sites
</div> </div> <div class="pt-4 border-t border-gray-700"> <div class="text-sm text-cyan-400 font-semibold">
Astro • Tailwind • Performance-focused
</div> </div> ` })} ` })} <!-- Card 2: E-Learning Platforms --> ${renderComponent($$result, "Card", $$Card, { "class": "bg-gray-900/60 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "p-8" }, { "default": ($$result3) => renderTemplate` <div class="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6"> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg> </div> <h3 class="text-xl font-bold text-white mb-3">E-Learning Platforms</h3> <p class="text-gray-300 leading-relaxed mb-4">
Interactive digital textbooks and educational content for students.
</p> <div class="space-y-2 mb-4"> <div class="text-sm text-gray-400"> <span class="text-blue-400">•</span> Bacteriology e-book (MDX + Astro)
</div> <div class="text-sm text-gray-400"> <span class="text-blue-400">•</span> Genetika e-book for UZ students
</div> <div class="text-sm text-gray-400"> <span class="text-blue-400">•</span> Custom navigation & search
</div> </div> <div class="pt-4 border-t border-gray-700"> <div class="text-sm text-blue-400 font-semibold">
+40% engagement • -60% load time
</div> </div> ` })} ` })} <!-- Card 3: Visual Content --> ${renderComponent($$result, "Card", $$Card, { "class": "bg-gray-900/60 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "p-8" }, { "default": ($$result3) => renderTemplate` <div class="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-6"> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path> </svg> </div> <h3 class="text-xl font-bold text-white mb-3">Visual Content</h3> <p class="text-gray-300 leading-relaxed mb-4">
Infographics, diagrams, and educational visuals that simplify complex topics.
</p> <div class="space-y-2 mb-4"> <div class="text-sm text-gray-400"> <span class="text-purple-400">•</span> Scientific infographics
</div> <div class="text-sm text-gray-400"> <span class="text-purple-400">•</span> Educational illustrations
</div> <div class="text-sm text-gray-400"> <span class="text-purple-400">•</span> Video content & tutorials
</div> </div> <div class="pt-4 border-t border-gray-700"> <div class="text-sm text-purple-400 font-semibold">
Photoshop • Illustrator • DaVinci
</div> </div> ` })} ` })} </div> <!-- Key Stats/Results Section --> <div class="max-w-5xl mx-auto"> <div class="relative group gpu-accelerated"> <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition duration-500"></div> ${renderComponent($$result, "Card", $$Card, { "class": "relative bg-gray-900/80 backdrop-blur-sm border border-cyan-400/20 gpu-accelerated" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "p-8 lg:p-12" }, { "default": ($$result3) => renderTemplate` <div class="grid md:grid-cols-3 gap-8 text-center"> <!-- Stat 1 --> <div> <div class="text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
20+
</div> <div class="text-gray-300 font-medium">Years of Experience</div> <div class="text-sm text-gray-400 mt-1">Building digital experiences</div> </div> <!-- Stat 2 --> <div> <div class="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
50+
</div> <div class="text-gray-300 font-medium">Projects Delivered</div> <div class="text-sm text-gray-400 mt-1">Websites, e-books, platforms</div> </div> <!-- Stat 3 --> <div> <div class="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
100%
</div> <div class="text-gray-300 font-medium">Client Satisfaction</div> <div class="text-sm text-gray-400 mt-1">Every project exceeds goals</div> </div> </div>  <div class="mt-10 pt-8 border-t border-gray-700"> <div class="text-center"> <p class="text-gray-400 text-sm uppercase tracking-wider mb-4">Trusted by</p> <p class="text-gray-300 text-lg leading-relaxed"> <span class="text-cyan-400 font-semibold">University of Zagreb</span> • 
                  Croatian Botanical Society • 
                  Croatian Biological Society • 
                  FEPS Europe • 
                  International Research Organizations
</p> </div> </div> ` })} ` })} </div> </div> </div> </section>`;
}, "/Users/renata/Desktop/renatahorvat/src/components/About.astro", void 0);

const $$Astro$1 = createAstro("https://renatahorvat.com");
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const testimonials = [
    {
      text: "Migrated from WordPress to Astro with zero downtime. Site is now 80% faster, search engine rankings improved significantly, and hosting costs dropped by 50%.",
      author: "Genetics E-book",
      role: "University of Zagreb, Faculty of Science",
      avatar: "\u{1F4DA}"
    },
    {
      text: "Built a complete conference website with registration system, speaker profiles, and schedule management. Handled 500+ registrations smoothly. Delivered 2 weeks ahead of schedule.",
      author: "EOES 2025 Olympiad",
      role: "European Science Competition",
      avatar: "\u{1F3C6}"
    },
    {
      text: "Created interactive bacteriology textbook with custom MDX layouts and search. Students report 40% better engagement, professors love the fast navigation. Mobile usage increased 3x.",
      author: "Bacteriology Platform",
      role: "Medical Education",
      avatar: "\u{1F52C}"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-transparent"> <div class="relative max-w-6xl mx-auto px-6"> <div class="text-center mb-16"> ${renderComponent($$result, "Badge", $$Badge, { "variant": "default", "class": "gap-2 mb-6" }, { "default": ($$result2) => renderTemplate` <span class="w-2 h-2 bg-green-500 rounded-full"></span>
Success Stories
` })} <h2 class="text-4xl lg:text-6xl font-black mb-4"> <span class="text-white">Real</span> <span class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
Project Results
</span> </h2> <p class="text-lg text-gray-300 max-w-2xl mx-auto">
Measurable outcomes from recent projects
</p> </div> <div class="grid md:grid-cols-3 gap-8"> ${testimonials.map((testimonial, index) => renderTemplate`<div class="relative group h-full"> <!-- Neon glow effect --> <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div> <!-- Main card --> ${renderComponent($$result, "Card", $$Card, { "class": "relative bg-gray-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl overflow-hidden h-full" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "p-8 h-full flex flex-col" }, { "default": ($$result3) => renderTemplate`  <div class="flex justify-center mb-6"> <div class="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"> <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"></path> </svg> </div> </div>  <blockquote class="text-lg text-gray-100 mb-8 leading-relaxed font-medium text-center flex-grow">
"${testimonial.text}"
</blockquote>  <div class="flex items-center justify-center space-x-4"> <div class="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-3xl"> ${testimonial.avatar} </div> <div class="text-left"> <p class="font-semibold text-white text-base">${testimonial.author}</p> <p class="text-cyan-400 text-sm font-medium">${testimonial.role}</p> </div> </div>  <div class="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-lg"></div> <div class="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-lg"></div> ` })} ` })} </div>`)} </div> <!-- Bottom stats --> <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="relative group"> <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div> ${renderComponent($$result, "Card", $$Card, { "class": "relative bg-gray-900/60 backdrop-blur-xl border border-cyan-400/20 rounded-xl" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "p-6 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">100%</div> <div class="text-gray-300 font-medium">Client Satisfaction</div> ` })} ` })} </div> <div class="relative group"> <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div> ${renderComponent($$result, "Card", $$Card, { "class": "relative bg-gray-900/60 backdrop-blur-xl border border-blue-500/20 rounded-xl" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "p-6 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-4xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">50+</div> <div class="text-gray-300 font-medium">Projects Completed</div> ` })} ` })} </div> <div class="relative group"> <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div> ${renderComponent($$result, "Card", $$Card, { "class": "relative bg-gray-900/60 backdrop-blur-xl border border-purple-600/20 rounded-xl" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", $$CardContent, { "class": "p-6 text-center" }, { "default": ($$result3) => renderTemplate` <div class="text-4xl font-black bg-gradient-to-r from-purple-600 to-cyan-400 bg-clip-text text-transparent mb-2">5★</div> <div class="text-gray-300 font-medium">Average Rating</div> ` })} ` })} </div> </div> </div> </section>`;
}, "/Users/renata/Desktop/renatahorvat/src/components/Testimonials.astro", void 0);

const $$Astro = createAstro("https://renatahorvat.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Renata Horvat - Designer & Digital Creator | Science Communication Expert Croatia";
  const pageDescription = "Renata Horvat is a Croatian designer specializing in science communication, e-learning platforms, and academic websites. 20+ years transforming complex research into engaging visual experiences for universities and research institutions.";
  const pageKeywords = "Renata Horvat, designer Croatia, science communication, e-learning design, academic websites, visual design, instructional design, Zagreb designer, educational design, scientific visualization, infographics, digital creator, web design Croatia, university websites, research communication";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> <!-- SEO Content Block - Hidden but accessible to search engines --> <div class="sr-only"> <h1>Renata Horvat</h1> <h2>Renata Horvat Designer</h2> <h3>Renata Horvat Croatia</h3> <h4>Renata Horvat Zagreb</h4> <p>Renata Horvat is a designer from Croatia specializing in science communication and educational design. Renata Horvat creates e-learning platforms, academic websites, and scientific infographics for universities and research institutions. Based in Zagreb, Croatia, Renata Horvat has 20+ years of experience transforming complex research into engaging visual experiences.</p> <p>Renata Horvat services include: instructional design, e-learning development, academic web design, scientific visualization, infographics creation, and WordPress to Astro migration. Renata Horvat works with universities, research institutions, and educational organizations worldwide.</p> </div> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/renata/Desktop/renatahorvat/src/pages/index.astro", void 0);

const $$file = "/Users/renata/Desktop/renatahorvat/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
