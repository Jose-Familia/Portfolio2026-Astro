/**
 * Pruebas de utilidades
 * Verifica funciones helper del proyecto
 */

import { describe, expect, it } from "vitest";
import {
  formatDate,
  formatDateISO,
  formatDateShort,
} from "../src/utils/formatDate";

describe("formatDate Utility", () => {
  it("should format date correctly in Spanish", () => {
    const date = new Date("2024-06-15");
    const result = formatDate(date, "es-ES");

    // Should contain month and year
    expect(result).toMatch(/2024/);
    expect(result).toMatch(/junio/i);
  });

  it("should format date correctly in English", () => {
    const date = new Date("2024-06-15");
    const result = formatDate(date, "en-US");

    expect(result).toMatch(/2024/);
    expect(result).toMatch(/June/i);
  });

  it("should handle Date objects", () => {
    const date = new Date();
    const result = formatDate(date);
    expect(result).toBeTruthy();
  });

  it("should use Spanish as default locale", () => {
    const date = new Date("2024-01-15");
    const result = formatDate(date);
    expect(result).toMatch(/enero/i);
  });
});

describe("formatDateShort Utility", () => {
  it("should format date in short format", () => {
    const date = new Date("2024-06-15");
    const result = formatDateShort(date, "es-ES");
    expect(result).toMatch(/2024/);
  });
});

describe("formatDateISO Utility", () => {
  it("should return ISO format date string", () => {
    const date = new Date("2024-06-15T00:00:00Z");
    const result = formatDateISO(date);
    expect(result).toBe("2024-06-15");
  });

  it("should only include date part, not time", () => {
    const date = new Date("2024-06-15T14:30:00Z");
    const result = formatDateISO(date);
    expect(result).not.toContain("T");
    expect(result).not.toContain(":");
  });
});
