import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_c3iQKPE4.mjs';
import 'kleur/colors';
import 'clsx';

const projects = [
  { title: "Bacteriology Practicum e-book", summary: "Astro + MDX e-book with custom layouts and fast navigation.", href: "/work/bacteriology-practicum", tags: ["Astro", "MDX", "Education"] },
  { title: "WP → Astro Migration", summary: "From bloated WP to fast Astro site with clean design system.", href: "/work/wp-to-astro", tags: ["Migration", "Tailwind"] }
];

const $$Astro = createAstro("https://renatahorvat.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, summary, href, tags = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="block rounded-xl border p-5 hover:shadow-sm transition"> <h3 class="font-semibold">${title}</h3> <p class="mt-2 text-sm text-gray-600">${summary}</p> ${tags.length ? renderTemplate`<ul class="mt-3 flex gap-2 text-xs text-gray-500">${tags.map((t) => renderTemplate`<li>#${t}</li>`)}</ul>` : null} </a>`;
}, "/Users/renchi/Desktop/renatahorvat/src/components/ProjectCard.astro", void 0);

export { $$ProjectCard as $, projects as p };
