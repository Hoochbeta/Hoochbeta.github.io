import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: 'https://Hoochbeta.vercel.app',
  integrations: [sitemap()],
});