import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    include: [
      "src/**/*.{test,spec}.{js,ts,tsx}",
      "tests/**/*.{test,spec}.{js,ts,tsx}",
    ],
    exclude: ["node_modules", "dist", ".astro"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      exclude: ["node_modules/", "dist/", ".astro/", "**/*.d.ts"],
    },
  },
});
