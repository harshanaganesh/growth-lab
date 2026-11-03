import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { me } from './my-details.mjs';

// You don't need to change anything here. Your address comes from my-details.mjs.
export default defineConfig({
  site: me.siteUrl,
  integrations: [
    sitemap({ filter: (page) => !page.includes('/thank-you') }),
  ],
});
