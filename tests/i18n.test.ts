/**
 * Pruebas del sistema de internacionalización
 * Verifica que las traducciones estén completas
 */

import { describe, expect, it } from "vitest";
import { defaultLang, languages, ui } from "../src/i18n";

// Helper function similar to the t() function
function t(lang: "es" | "en", key: string): string {
  return ui[lang][key as keyof (typeof ui)["es"]] || key;
}

describe("i18n System", () => {
  describe("Translation Function", () => {
    it("should return Spanish translations", () => {
      const result = t("es", "nav.home");
      expect(result).toBe("Inicio");
    });

    it("should return English translations", () => {
      const result = t("en", "nav.home");
      expect(result).toBe("Home");
    });

    it("should return key if translation not found", () => {
      const result = t("es", "nonexistent.key");
      expect(result).toBe("nonexistent.key");
    });
  });

  describe("Translation Completeness", () => {
    const esKeys = Object.keys(ui.es);
    const enKeys = Object.keys(ui.en);

    it("should have same top-level keys in both languages", () => {
      expect(esKeys.sort()).toEqual(enKeys.sort());
    });

    it("should have navigation translations", () => {
      expect(ui.es["nav.home"]).toBeTruthy();
      expect(ui.es["nav.about"]).toBeTruthy();
      expect(ui.es["nav.projects"]).toBeTruthy();
      expect(ui.es["nav.blog"]).toBeTruthy();
      expect(ui.es["nav.contact"]).toBeTruthy();
    });

    it("should have about page translations", () => {
      expect(ui.es["about.title"]).toBeTruthy();
      expect(ui.es["about.skills"]).toBeTruthy();
      expect(ui.es["about.experience"]).toBeTruthy();
    });
  });

  describe("Language Configuration", () => {
    it("should support es and en languages", () => {
      expect(languages).toHaveProperty("es");
      expect(languages).toHaveProperty("en");
    });

    it("should have Spanish as default language", () => {
      expect(defaultLang).toBe("es");
    });

    it("should have language names defined", () => {
      expect(languages.es).toBe("Español");
      expect(languages.en).toBe("English");
    });
  });
});
