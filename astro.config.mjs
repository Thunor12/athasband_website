import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://athasband.thunor97.net",
  integrations: [mdx()],
  // /merch is commonly blocked by ad blockers; keep a redirect for old links.
  redirects: {
    "/merch": "/shop",
    "/merch/": "/shop",
  },
});
