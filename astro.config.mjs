// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://renatahorvat.com',
  trailingSlash: 'never',
  // English at the root, Croatian under /hr (pages go in src/pages/hr/)
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hr'],
    routing: { prefixDefaultLocale: false },
  },
  // Keep Astro 6 HTML-aware spacing so line breaks between inline tags stay visible
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('admin') && !page.includes('private'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-GB', hr: 'hr-HR' }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});