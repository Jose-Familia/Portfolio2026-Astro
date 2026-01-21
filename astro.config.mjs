import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://josefamilia.vercel.app",
  output: "hybrid",
  adapter: vercel(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    markdoc(),
    keystatic(),
  ],
  // Optimización de rendimiento
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  // Configuración de imágenes
  image: {
    domains: ["images.unsplash.com", "github.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  // Prefetch para mejor UX
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
