import { makeHandler } from "@keystatic/astro/api";
import keystaticConfig from "../../../../keystatic.config";

// Indicar que esta ruta debe ser renderizada del lado del servidor
export const prerender = false;

export const ALL = makeHandler({ config: keystaticConfig });
