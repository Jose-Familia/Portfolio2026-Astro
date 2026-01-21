/**
 * Content Collections Configuration
 * Define los esquemas de validación para el contenido
 */

import { defineCollection, z } from "astro:content";

// Colección de Proyectos
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    status: z
      .enum(["in-progress", "completed", "archived"])
      .default("completed"),
    publishDate: z.coerce.date(),
    thumbnail: z.string().optional(),
    images: z.array(z.string()).default([]),
    technologies: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        live: z.string().url().optional(),
        github: z.string().url().optional(),
        case_study: z.string().url().optional(),
      })
      .optional(),
    seo: z
      .object({
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
      })
      .optional(),
  }),
});

// Colección de Blog
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    coverImage: z.string().optional(),
    category: z.enum([
      "development",
      "design",
      "tutorials",
      "opinion",
      "career",
    ]),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    seo: z
      .object({
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
        canonicalUrl: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  projects,
  blog,
};
