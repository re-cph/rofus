import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rofus.nu",
  base: "rofus",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
