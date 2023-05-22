import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});

// import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";

// // https://astro.build/config
// export default defineConfig({
//   integrations: [tailwind()],
//   astro: {
//     styles: [
//       "../src/styles/style.css", // Stien til din CSS-fil
//     ],
//   },
// });
