import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, o as renderSlot, r as renderTemplate } from './astro/server_DprdFlq6.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$2 = createAstro("https://renatahorvat.com");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Badge;
  const {
    variant = "default",
    class: className,
    ...props
  } = Astro2.props;
  const variants = {
    default: "border-transparent bg-white/10 text-white hover:bg-white/20",
    secondary: "border-transparent bg-slate-700/50 text-gray-300 hover:bg-slate-700/70",
    destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
    outline: "border-white/20 text-white hover:bg-white/10"
  };
  const classes = cn(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    variants[variant],
    className
  );
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/renata/Desktop/renatahorvat/src/components/ui/Badge.astro", void 0);

const $$Astro$1 = createAstro("https://renatahorvat.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/renata/Desktop/renatahorvat/src/components/ui/Card.astro", void 0);

const $$Astro = createAstro("https://renatahorvat.com");
const $$CardContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardContent;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("p-6 pt-0", className), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/renata/Desktop/renatahorvat/src/components/ui/CardContent.astro", void 0);

export { $$Badge as $, $$Card as a, $$CardContent as b };
