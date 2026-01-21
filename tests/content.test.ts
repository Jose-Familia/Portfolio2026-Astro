/**
 * Pruebas de estructura del contenido
 * Verifica que los archivos de contenido existan y tengan la estructura correcta
 */

import * as fs from "fs";
import * as path from "path";
import { describe, expect, it } from "vitest";

const contentDir = path.join(process.cwd(), "src", "content");

describe("Content Structure", () => {
  describe("Content Directories", () => {
    it("should have blog directory", () => {
      const blogDir = path.join(contentDir, "blog");
      expect(fs.existsSync(blogDir)).toBe(true);
    });

    it("should have projects directory", () => {
      const projectsDir = path.join(contentDir, "projects");
      expect(fs.existsSync(projectsDir)).toBe(true);
    });

    it("should have pages directory", () => {
      const pagesDir = path.join(contentDir, "pages");
      expect(fs.existsSync(pagesDir)).toBe(true);
    });

    it("should have settings directory", () => {
      const settingsDir = path.join(contentDir, "settings");
      expect(fs.existsSync(settingsDir)).toBe(true);
    });
  });

  describe("Required Content Files", () => {
    it("should have content config file", () => {
      const configFile = path.join(contentDir, "config.ts");
      expect(fs.existsSync(configFile)).toBe(true);
    });

    it("should have home page content", () => {
      const homeFile = path.join(contentDir, "pages", "home.yaml");
      expect(fs.existsSync(homeFile)).toBe(true);
    });

    it("should have site settings", () => {
      const siteFile = path.join(contentDir, "settings", "site.yaml");
      expect(fs.existsSync(siteFile)).toBe(true);
    });

    it("should have social settings", () => {
      const socialFile = path.join(contentDir, "settings", "social.yaml");
      expect(fs.existsSync(socialFile)).toBe(true);
    });
  });

  describe("Blog Content", () => {
    it("should have blog directory ready for content", () => {
      const blogDir = path.join(contentDir, "blog");
      expect(fs.existsSync(blogDir)).toBe(true);
    });
  });

  describe("Projects Content", () => {
    it("should have projects directory ready for content", () => {
      const projectsDir = path.join(contentDir, "projects");
      expect(fs.existsSync(projectsDir)).toBe(true);
    });
  });
});

describe("Static Assets", () => {
  const publicDir = path.join(process.cwd(), "public");

  it("should have public directory", () => {
    expect(fs.existsSync(publicDir)).toBe(true);
  });
});
