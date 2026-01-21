import { z } from "zod";

// Esquema para entradas de blog
export const blogEntrySchema = z.object({
  title: z.string().min(1),
  date: z.string().min(1), // ISO date string
  author: z.string().min(1),
  summary: z.string().optional(),
  content: z.string().min(1),
  tags: z.array(z.string()).optional(),
  coverImage: z.string().url().optional(),
});

// Esquema para proyectos
export const projectSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  technologies: z.array(z.string()),
  repoUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  image: z.string().url().optional(),
});

// Esquema para mensajes de contacto
export const contactMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});
