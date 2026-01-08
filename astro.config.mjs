// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://renatahorvat.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('admin') && !page.includes('private'),
      customPages: [
        'https://renatahorvat.com/',
        'https://renatahorvat.com/services',
        'https://renatahorvat.com/contact'
      ]
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});