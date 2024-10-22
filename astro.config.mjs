import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: "https://www.rofus.nu",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  i18n: {
    locales: ["da", "kl", "en"],
    defaultLocale: "da",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
