import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig( {
  site: 'https://csorter.void14.com', // Set the site URL
  compressHTML: true,
  integrations: [
    mdx(),
    icon(),
    tailwind( {
      applyBaseStyles: false,
    } ),
    compress(),
  ],
} );
