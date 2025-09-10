/* empty css                                   */
import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent, l as Fragment } from '../chunks/astro/server_c3iQKPE4.mjs';
import 'kleur/colors';
import { b as $$DefaultLayout, $ as $$Navbar, a as $$Footer } from '../chunks/Footer_DfGZKZ0t.mjs';
import 'clsx';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_BpDNsAD2.mjs';
import { p as projects, $ as $$ProjectCard } from '../chunks/ProjectCard__4rYkRnN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://renatahorvat.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="pt-16 pb-20" id="home"> <div class="grid md:grid-cols-2 gap-10 items-center"> <div> <h1 class="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
AI-first web artisan crafting <span class="text-emerald-600">fast</span>, elegant sites with Astro.
</h1> <p class="mt-6 text-lg text-gray-600 max-w-xl">
From WordPress to lightning-fast Astro. Design, code & ship — with clean handoff and measurable results.
</p> <div class="mt-8 flex flex-wrap gap-4"> <a href="/contact" class="px-5 py-3 rounded-xl bg-emerald-600 text-white shadow-sm hover:translate-y-[-1px] transition">Get a proposal</a> <a href="/work" class="px-5 py-3 rounded-xl border hover:shadow-sm transition">See selected work</a> </div> </div> <div class="relative"> <div class="absolute inset-0 -z-10 blur-3xl opacity-60 bg-[radial-gradient(80%_80%_at_30%_20%,#34d399_0%,transparent_60%)]"></div> <div class="aspect-video rounded-2xl border shadow-sm" aria-hidden="true"></div> </div> </div> </section>`;
}, "/Users/renchi/Desktop/renatahorvat/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://renatahorvat.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="py-12" id="services"> <h2 class="text-2xl font-semibold">What I do</h2> <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Astro Websites", "desc": "Design & build blazing-fast, modern websites." })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "AI Integrations", "desc": "LLM-powered UX flows, content tooling, automations." })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Education Websites", "desc": "Clean UX for courses, docs, handbooks and e-books." })} </div> </section> <section class="py-12" id="work"> <h2 class="text-2xl font-semibold">Selected work</h2> <div class="mt-6 grid md:grid-cols-2 gap-6"> ${projects.slice(0, 4).map((p) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...p })}`)} </div> <div class="mt-8"><a href="/work" class="underline">See all projects →</a></div> </section> <section class="py-16" id="contact"> <div class="rounded-2xl p-8 border text-center"> <h3 class="text-2xl font-semibold">Ready to build?</h3> <p class="mt-3 text-gray-600">Tell me about your project and goals.</p> <a href="/contact" class="mt-6 inline-block px-5 py-3 rounded-xl bg-emerald-600 text-white">Get a proposal</a> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "footer" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Footer", $$Footer, {})}` })}`, "nav": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "nav" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Navbar", $$Navbar, {})}` })}` })}`;
}, "/Users/renchi/Desktop/renatahorvat/src/pages/index.astro", void 0);

const $$file = "/Users/renchi/Desktop/renatahorvat/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
