import { e as createAstro, f as createComponent, h as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate, m as maybeRenderHead } from './astro/server_c3iQKPE4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro$1 = createAstro("https://renatahorvat.com");
const $$DefaultLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const {
    title = "Renata Horvat \u2014 AI-first Web Artisan",
    description = "I design & build fast, elegant websites with Astro. AI integrations, education sites, and migrations from WordPress."
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" content="/og-image.jpg"><link rel="icon" href="/favicon.ico">${renderHead()}</head> <body class="min-h-dvh bg-white text-gray-900 antialiased [background-image:radial-gradient(#0000000d_1px,transparent_1px)] [background-size:8px_8px]"> ${renderSlot($$result, $$slots["nav"])} <main class="mx-auto max-w-6xl px-6">${renderSlot($$result, $$slots["default"])}</main> ${renderSlot($$result, $$slots["footer"])} </body></html>`;
}, "/Users/renchi/Desktop/renatahorvat/src/layouts/DefaultLayout.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 backdrop-blur bg-white/70 border-b"> <nav class="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between"> <a href="/" class="font-semibold">Renata</a> <ul class="flex gap-6 text-sm"> ${links.map((l) => renderTemplate`<li><a class="hover:opacity-70"${addAttribute(l.href, "href")}>${l.label}</a></li>`)} </ul> </nav> </header>`;
}, "/Users/renchi/Desktop/renatahorvat/src/components/Navbar.astro", void 0);

const $$Astro = createAstro("https://renatahorvat.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="mt-24 border-t"> <div class="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600 flex flex-wrap gap-4 justify-between"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} Renata Horvat</p> <p>Built with Astro • Deployed on Vercel</p> </div> </footer>`;
}, "/Users/renchi/Desktop/renatahorvat/src/components/Footer.astro", void 0);

export { $$Navbar as $, $$Footer as a, $$DefaultLayout as b };
