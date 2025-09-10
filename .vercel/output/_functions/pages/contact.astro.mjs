/* empty css                                   */
import { f as createComponent, m as maybeRenderHead, r as renderTemplate, e as createAstro, k as renderComponent, l as Fragment } from '../chunks/astro/server_c3iQKPE4.mjs';
import 'kleur/colors';
import { $ as $$Navbar, a as $$Footer, b as $$DefaultLayout } from '../chunks/Footer_DfGZKZ0t.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form method="post" action="/api/contact" class="grid gap-4 max-w-xl"> <input class="border rounded-lg p-3" name="name" placeholder="Your name" required> <input class="border rounded-lg p-3" type="email" name="email" placeholder="Your email" required> <textarea class="border rounded-lg p-3" name="message" rows="6" placeholder="Tell me about your project" required></textarea> <button class="rounded-xl bg-emerald-600 text-white px-5 py-3">Send</button> </form>`;
}, "/Users/renchi/Desktop/renatahorvat/src/components/ContactForm.astro", void 0);

const $$Astro = createAstro("https://renatahorvat.com");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Contact \u2014 Renata Horvat", "description": "Get in touch with Renata Horvat." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-16"> <h1 class="text-3xl font-bold">Get in touch</h1> <p class="mt-3 text-gray-600 max-w-2xl">Tell me about your goals and timeline.</p> <div class="mt-10 grid gap-10 md:grid-cols-[220px_minmax(0,1fr)] items-start"> <!-- Small profile image card (upload later into /public/images/) --> <aside class="md:sticky md:top-6"> <div class="inline-flex flex-col items-center gap-4 rounded-2xl border p-5"> <picture> <!-- WebP first (optional); JPEG fallback --> <!-- Upload files later: /public/images/renata-128.(webp|jpg), -160, -200 --> <img src="/images/renata-200.jpg" srcset="/images/renata-128.jpg 128w, /images/renata-160.jpg 160w, /images/renata-200.jpg 200w" sizes="(min-width: 1024px) 180px, (min-width: 640px) 160px, 128px" alt="Portrait of Renata Horvat" width="200" height="200" loading="lazy" decoding="async" class="h-auto w-[128px] sm:w-[160px] lg:w-[180px] rounded-2xl object-cover ring-1 ring-black/10 shadow-sm"> </picture> <div class="text-center"> <h2 class="font-semibold">Renata Horvat</h2> <p class="text-sm text-gray-600">AI-first Web Artisan</p> </div> </div> </aside> <div> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ${Astro2.url.searchParams.get("sent") ? renderTemplate`<p class="mt-4 text-emerald-700">Thanks — I'll reply soon.</p>` : null} </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "footer" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Footer", $$Footer, {})}` })}`, "nav": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "nav" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Navbar", $$Navbar, {})}` })}` })}`;
}, "/Users/renchi/Desktop/renatahorvat/src/pages/contact.astro", void 0);

const $$file = "/Users/renchi/Desktop/renatahorvat/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
