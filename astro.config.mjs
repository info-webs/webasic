import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import content from "@astrojs/content";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), content(), sitemap(), image()],
  site: "https://atrayobesidad.com",
  base: "/",
});
