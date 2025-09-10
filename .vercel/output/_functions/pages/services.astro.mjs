/* empty css                                   */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, l as Fragment, m as maybeRenderHead } from '../chunks/astro/server_c3iQKPE4.mjs';
import 'kleur/colors';
import { b as $$DefaultLayout, $ as $$Navbar, a as $$Footer } from '../chunks/Footer_DfGZKZ0t.mjs';
import { $ as $$ServiceCard } from '../chunks/ServiceCard_BpDNsAD2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://renatahorvat.com");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Services \u2014 Renata Horvat" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-16"> <h1 class="text-3xl font-bold">Services</h1> <p class="mt-3 text-gray-600 max-w-2xl">
I design and build fast, elegant websites with Astro — plus AI integrations and education experiences.
</p> <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Astro Websites", "desc": "Design system, responsive UI, performance, accessibility." })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "AI Integrations", "desc": "LLM prompts, flows, content tooling, automations." })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "WP \u2192 Astro Migration", "desc": "Rebuild for speed, keep content, improve UX & SEO." })} </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "footer" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Footer", $$Footer, {})}` })}`, "nav": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "nav" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Navbar", $$Navbar, {})}` })}` })}`;
}, "/Users/renchi/Desktop/renatahorvat/src/pages/services.astro", void 0);

const $$file = "/Users/renchi/Desktop/renatahorvat/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
