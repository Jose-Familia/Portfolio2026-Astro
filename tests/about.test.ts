/**
 * Pruebas del contenido About
 * Verifica la estructura y datos del contenido de la página Sobre Mí
 */

import { describe, expect, it } from "vitest";
import { aboutContent } from "../src/i18n/about";

describe("About Content", () => {
  describe("Spanish Content (es)", () => {
    const content = aboutContent.es;

    it("should have required personal information", () => {
      expect(content.name).toBe("José Familia");
      expect(content.title).toBeTruthy();
      expect(content.location).toBeTruthy();
    });

    it("should have philosophy section", () => {
      expect(content.philosophy).toBeDefined();
      expect(content.philosophy.title).toBeTruthy();
      expect(content.philosophy.description).toBeTruthy();
    });

    it("should have bio as array with content", () => {
      expect(Array.isArray(content.bio)).toBe(true);
      expect(content.bio.length).toBeGreaterThan(0);
      content.bio.forEach((paragraph) => {
        expect(paragraph.length).toBeGreaterThan(10);
      });
    });

    it("should have skills organized by categories", () => {
      expect(Array.isArray(content.skills)).toBe(true);
      expect(content.skills.length).toBeGreaterThan(0);

      content.skills.forEach((category) => {
        expect(category.category).toBeTruthy();
        expect(Array.isArray(category.items)).toBe(true);
        expect(category.items.length).toBeGreaterThan(0);

        category.items.forEach((skill) => {
          expect(skill.name).toBeTruthy();
        });
      });
    });

    it("should have tech stack with valid URLs", () => {
      expect(Array.isArray(content.stack)).toBe(true);
      expect(content.stack.length).toBeGreaterThan(0);

      content.stack.forEach((tech) => {
        expect(tech.name).toBeTruthy();
        expect(tech.url).toMatch(/^https?:\/\//);
      });
    });

    it("should have experience as typed array (can be empty)", () => {
      expect(Array.isArray(content.experience)).toBe(true);
    });

    it("should have education entries", () => {
      expect(Array.isArray(content.education)).toBe(true);
      expect(content.education.length).toBeGreaterThan(0);

      content.education.forEach((edu) => {
        expect(edu.institution).toBeTruthy();
        expect(edu.degree).toBeTruthy();
        expect(edu.startDate).toBeInstanceOf(Date);
        expect(typeof edu.current).toBe("boolean");
      });
    });

    it("should have certifications with required fields", () => {
      expect(Array.isArray(content.certifications)).toBe(true);
      expect(content.certifications.length).toBeGreaterThan(0);

      content.certifications.forEach((cert) => {
        expect(cert.name).toBeTruthy();
        expect(cert.issuer).toBeTruthy();
        expect(cert.date).toBeInstanceOf(Date);
        expect(Array.isArray(cert.skills)).toBe(true);
      });
    });
  });

  describe("English Content (en)", () => {
    const content = aboutContent.en;

    it("should have same structure as Spanish", () => {
      expect(content.name).toBe("José Familia");
      expect(content.philosophy).toBeDefined();
      expect(Array.isArray(content.bio)).toBe(true);
      expect(Array.isArray(content.skills)).toBe(true);
      expect(Array.isArray(content.stack)).toBe(true);
      expect(Array.isArray(content.education)).toBe(true);
      expect(Array.isArray(content.certifications)).toBe(true);
    });

    it("should have matching skill categories count", () => {
      expect(content.skills.length).toBe(aboutContent.es.skills.length);
    });

    it("should have matching stack count", () => {
      expect(content.stack.length).toBe(aboutContent.es.stack.length);
    });

    it("should have matching education count", () => {
      expect(content.education.length).toBe(aboutContent.es.education.length);
    });

    it("should have matching certifications count", () => {
      expect(content.certifications.length).toBe(
        aboutContent.es.certifications.length,
      );
    });
  });

  describe("Content Consistency", () => {
    it("should have same name in both languages", () => {
      expect(aboutContent.es.name).toBe(aboutContent.en.name);
    });

    it("should have same location format", () => {
      expect(aboutContent.es.location).toContain("Santo Domingo");
      expect(aboutContent.en.location).toContain("Santo Domingo");
    });
  });
});
