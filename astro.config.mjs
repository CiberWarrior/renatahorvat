// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://renatahorvat.com',
  // Keep Astro 6 HTML-aware spacing so line breaks between inline tags stay visible
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('admin') && !page.includes('private')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});