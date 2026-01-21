/**
 * Pruebas de build y configuración
 * Verifica que la configuración del proyecto sea correcta
 */

import * as fs from "fs";
import * as path from "path";
import { describe, expect, it } from "vitest";

describe("Project Configuration", () => {
  describe("Essential Config Files", () => {
    it("should have package.json", () => {
      const file = path.join(process.cwd(), "package.json");
      expect(fs.existsSync(file)).toBe(true);
    });

    it("should have astro.config.mjs", () => {
      const file = path.join(process.cwd(), "astro.config.mjs");
      expect(fs.existsSync(file)).toBe(true);
    });

    it("should have tailwind.config.mjs", () => {
      const file = path.join(process.cwd(), "tailwind.config.mjs");
      expect(fs.existsSync(file)).toBe(true);
    });

    it("should have tsconfig.json", () => {
      const file = path.join(process.cwd(), "tsconfig.json");
      expect(fs.existsSync(file)).toBe(true);
    });

    it("should have keystatic.config.tsx", () => {
      const file = path.join(process.cwd(), "keystatic.config.tsx");
      expect(fs.existsSync(file)).toBe(true);
    });
  });

  describe("Package.json Validation", () => {
    let pkg: Record<string, any>;

    it("should parse package.json", () => {
      const file = path.join(process.cwd(), "package.json");
      const content = fs.readFileSync(file, "utf-8");
      pkg = JSON.parse(content);
      expect(pkg).toBeDefined();
    });

    it("should have required scripts", () => {
      const file = path.join(process.cwd(), "package.json");
      const content = fs.readFileSync(file, "utf-8");
      pkg = JSON.parse(content);

      expect(pkg.scripts).toBeDefined();
      expect(pkg.scripts.dev).toBeDefined();
      expect(pkg.scripts.build).toBeDefined();
      expect(pkg.scripts.preview).toBeDefined();
    });

    it("should have astro as dependency", () => {
      const file = path.join(process.cwd(), "package.json");
      const content = fs.readFileSync(file, "utf-8");
      pkg = JSON.parse(content);

      expect(pkg.dependencies.astro).toBeDefined();
    });

    it("should have react as dependency", () => {
      const file = path.join(process.cwd(), "package.json");
      const content = fs.readFileSync(file, "utf-8");
      pkg = JSON.parse(content);

      expect(pkg.dependencies.react).toBeDefined();
      expect(pkg.dependencies["react-dom"]).toBeDefined();
    });
  });

  describe("TypeScript Configuration", () => {
    it("should have valid tsconfig.json", () => {
      const file = path.join(process.cwd(), "tsconfig.json");
      const content = fs.readFileSync(file, "utf-8");
      const config = JSON.parse(content);

      expect(config).toBeDefined();
      expect(config.extends || config.compilerOptions).toBeDefined();
    });
  });
});

describe("Source Structure", () => {
  const srcDir = path.join(process.cwd(), "src");

  it("should have src directory", () => {
    expect(fs.existsSync(srcDir)).toBe(true);
  });

  it("should have pages directory", () => {
    const dir = path.join(srcDir, "pages");
    expect(fs.existsSync(dir)).toBe(true);
  });

  it("should have components directory", () => {
    const dir = path.join(srcDir, "components");
    expect(fs.existsSync(dir)).toBe(true);
  });

  it("should have layouts directory", () => {
    const dir = path.join(srcDir, "layouts");
    expect(fs.existsSync(dir)).toBe(true);
  });

  it("should have styles directory", () => {
    const dir = path.join(srcDir, "styles");
    expect(fs.existsSync(dir)).toBe(true);
  });

  it("should have i18n directory", () => {
    const dir = path.join(srcDir, "i18n");
    expect(fs.existsSync(dir)).toBe(true);
  });
});
