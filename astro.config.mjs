// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://renatahorvat.com',
  output: 'server',
  adapter: vercel(),
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