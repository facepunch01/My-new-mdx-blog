import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte(), tailwind(), sitemap()]
});