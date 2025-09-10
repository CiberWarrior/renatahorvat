/* empty css                                   */
import { f as createComponent, k as renderComponent, r as renderTemplate, l as Fragment, m as maybeRenderHead } from '../chunks/astro/server_c3iQKPE4.mjs';
import 'kleur/colors';
import { b as $$DefaultLayout, $ as $$Navbar, a as $$Footer } from '../chunks/Footer_DfGZKZ0t.mjs';
import { p as projects, $ as $$ProjectCard } from '../chunks/ProjectCard__4rYkRnN.mjs';
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Work \u2014 Renata Horvat" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-16"> <h1 class="text-3xl font-bold">Selected work</h1> <div class="mt-8 grid md:grid-cols-2 gap-6"> ${projects.map((p) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...p })}`)} </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "footer" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Footer", $$Footer, {})}` })}`, "nav": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "nav" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Navbar", $$Navbar, {})}` })}` })}`;
}, "/Users/renchi/Desktop/renatahorvat/src/pages/work.astro", void 0);

const $$file = "/Users/renchi/Desktop/renatahorvat/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
