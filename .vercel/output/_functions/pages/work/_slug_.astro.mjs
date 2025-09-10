/* empty css                                      */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, l as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_c3iQKPE4.mjs';
import 'kleur/colors';
import { b as $$DefaultLayout, $ as $$Navbar, a as $$Footer } from '../../chunks/Footer_DfGZKZ0t.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://renatahorvat.com");
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const meta = { title: "Case Study \u2014 " + slug, description: "Goals, process, result, and tech." };
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { ...meta }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<article class="prose max-w-none py-16"> <h1 class="!mb-2">Project title</h1> <p class="text-gray-600">Short context & goals.</p> <h2>Process</h2> <ol><li>Discovery</li><li>Design system</li><li>Build & ship</li></ol> <h2>Result</h2> <ul><li>+X% faster load</li><li>Better Core Web Vitals</li></ul> <h2>Tech</h2> <p>Astro, Tailwind, Vercel, Cursor, Resend.</p> <p><a href="/work" class="underline">← Back to work</a></p> </article>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "footer" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Footer", $$Footer, {})}` })}`, "nav": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "nav" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Navbar", $$Navbar, {})}` })}` })}`;
}, "/Users/renchi/Desktop/renatahorvat/src/pages/work/[slug].astro", void 0);

const $$file = "/Users/renchi/Desktop/renatahorvat/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
