import { e as createAstro, f as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_c3iQKPE4.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://renatahorvat.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, desc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="rounded-xl border p-5 hover:shadow-sm transition"> <h3 class="font-semibold">${title}</h3> <p class="mt-2 text-sm text-gray-600">${desc}</p> </article>`;
}, "/Users/renchi/Desktop/renatahorvat/src/components/ServiceCard.astro", void 0);

export { $$ServiceCard as $ };
