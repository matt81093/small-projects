// Example: snowpack.config.mjs
// The added "@type" comment will enable TypeScript type information via VSCode, etc.

import { element } from "svelte/internal";

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    plugins: [
      /* ... */
    ],
    packageOptions: {
        knownEntrypoints: [
            "lit-element/lit-element.js",
            "lit-element/experimental-hydrate-support.js",
            "lit-html/experimental-hydrate.js"
        ]
    }
  };