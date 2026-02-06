import { collection, config, fields, singleton } from "@keystatic/core";

/**
 * Configuración de Keystatic CMS
 *
 * En desarrollo: Almacenamiento local
 * En producción: Usa GitHub para guardar cambios (hace commits automáticos)
 */

export default config({
  assetBasePath: "/images",
  storage:
    process.env.NODE_ENV === "production"
      ? {
          kind: "github",
          repo: "Jose-Familia/Portfolio2026-Astro",
        }
      : { kind: "local" },

  // UI del admin panel
  ui: {
    brand: {
      name: "Portfolio Admin",
    },
    navigation: {
      "Contenido Principal": ["home", "about"],
      Colecciones: ["projects", "blog"],
      Configuración: ["settings", "social"],
    },
  },

  // Singletons - Contenido único (páginas estáticas)
  singletons: {
    // Configuración de la página Home
    home: singleton({
      label: "Página Principal",
      path: "src/content/pages/home",
      format: { data: "yaml" },
      schema: {
        hero: fields.object({
          title: fields.text({
            label: "Título Principal",
            validation: { isRequired: true },
          }),
          subtitle: fields.text({
            label: "Subtítulo",
            multiline: true,
          }),
          cta: fields.object({
            primaryText: fields.text({ label: "Texto CTA Principal" }),
            primaryLink: fields.text({ label: "Enlace CTA Principal" }),
            secondaryText: fields.text({ label: "Texto CTA Secundario" }),
            secondaryLink: fields.text({ label: "Enlace CTA Secundario" }),
          }),
        }),
        intro: fields.object({
          title: fields.text({ label: "Título Introducción" }),
          description: fields.text({
            label: "Descripción",
            multiline: true,
          }),
        }),
        featuredProjects: fields.object({
          title: fields.text({ label: "Título Sección" }),
          count: fields.integer({
            label: "Número de proyectos a mostrar",
            defaultValue: 3,
            validation: { min: 1, max: 6 },
          }),
        }),
      },
    }),

    // Página Sobre Mí
    about: singleton({
      label: "Sobre Mí",
      path: "src/content/pages/about",
      format: { data: "yaml" },
      schema: {
        title: fields.text({
          label: "Título",
          validation: { isRequired: true },
        }),
        intro: fields.text({
          label: "Introducción",
          multiline: true,
        }),
        bio: fields.mdx({
          label: "Biografía Completa",
          description: "Contenido rico con formato Markdown",
        }),
        skills: fields.array(
          fields.object({
            category: fields.text({ label: "Categoría" }),
            items: fields.array(
              fields.object({
                name: fields.text({ label: "Nombre" }),
                level: fields.select({
                  label: "Nivel",
                  options: [
                    { label: "Básico", value: "basic" },
                    { label: "Intermedio", value: "intermediate" },
                    { label: "Avanzado", value: "advanced" },
                    { label: "Experto", value: "expert" },
                  ],
                  defaultValue: "intermediate",
                }),
              }),
              {
                label: "Habilidades",
                itemLabel: (props) =>
                  props.fields.name.value || "Nueva habilidad",
              },
            ),
          }),
          {
            label: "Categorías de Skills",
            itemLabel: (props) =>
              props.fields.category.value || "Nueva categoría",
          },
        ),
        stack: fields.array(
          fields.object({
            name: fields.text({ label: "Tecnología" }),
            icon: fields.text({ label: "Icono (nombre o URL)" }),
            url: fields.url({ label: "Enlace" }),
          }),
          {
            label: "Stack Tecnológico",
            itemLabel: (props) => props.fields.name.value || "Nueva tecnología",
          },
        ),
        experience: fields.array(
          fields.object({
            company: fields.text({ label: "Empresa" }),
            position: fields.text({ label: "Cargo" }),
            startDate: fields.date({ label: "Fecha Inicio" }),
            endDate: fields.date({ label: "Fecha Fin" }),
            current: fields.checkbox({ label: "Trabajo Actual" }),
            description: fields.text({
              label: "Descripción",
              multiline: true,
            }),
          }),
          {
            label: "Experiencia Laboral",
            itemLabel: (props) =>
              `${props.fields.position.value || "Cargo"} @ ${props.fields.company.value || "Empresa"}`,
          },
        ),
      },
    }),

    // Configuración global del sitio
    settings: singleton({
      label: "Configuración General",
      path: "src/content/settings/site",
      format: { data: "yaml" },
      schema: {
        siteName: fields.text({
          label: "Nombre del Sitio",
          validation: { isRequired: true },
        }),
        siteDescription: fields.text({
          label: "Descripción del Sitio (SEO)",
          multiline: true,
        }),
        author: fields.object({
          name: fields.text({ label: "Nombre" }),
          email: fields.text({ label: "Email" }),
          avatar: fields.image({
            label: "Avatar",
            directory: "public/images/site",
            publicPath: "/images/site",
          }),
        }),
        seo: fields.object({
          defaultTitle: fields.text({ label: "Título por defecto" }),
          titleTemplate: fields.text({
            label: "Plantilla de título",
            description:
              "Usa %s para el título de la página. Ej: %s | Portfolio",
          }),
          ogImage: fields.image({
            label: "Imagen Open Graph",
            directory: "public/images/site/og",
            publicPath: "/images/site/og",
          }),
        }),
        analytics: fields.object({
          googleAnalyticsId: fields.text({ label: "Google Analytics ID" }),
        }),
      },
    }),

    // Redes sociales
    social: singleton({
      label: "Redes Sociales",
      path: "src/content/settings/social",
      format: { data: "yaml" },
      schema: {
        links: fields.array(
          fields.object({
            platform: fields.select({
              label: "Plataforma",
              options: [
                { label: "GitHub", value: "github" },
                { label: "LinkedIn", value: "linkedin" },
                { label: "Twitter/X", value: "twitter" },
                { label: "Instagram", value: "instagram" },
                { label: "YouTube", value: "youtube" },
                { label: "Dribbble", value: "dribbble" },
                { label: "Behance", value: "behance" },
                { label: "CodePen", value: "codepen" },
                { label: "Dev.to", value: "devto" },
                { label: "Medium", value: "medium" },
              ],
              defaultValue: "github",
            }),
            url: fields.url({
              label: "URL",
              validation: { isRequired: true },
            }),
            label: fields.text({ label: "Etiqueta accesible" }),
          }),
          {
            label: "Enlaces Sociales",
            itemLabel: (props) => props.fields.platform.value || "Red social",
          },
        ),
      },
    }),
  },

  // Collections - Contenido repetible (proyectos, blog)
  collections: {
    // Colección de Proyectos
    projects: collection({
      label: "Proyectos",
      slugField: "title",
      path: "src/content/projects/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Título del Proyecto",
            validation: { isRequired: true },
          },
        }),
        description: fields.text({
          label: "Descripción Corta",
          multiline: true,
          validation: { isRequired: true },
        }),
        content: fields.markdoc({
          label: "Descripción Completa",
          description: "Contenido detallado del proyecto",
        }),
        featured: fields.checkbox({
          label: "Proyecto Destacado",
          defaultValue: false,
        }),
        status: fields.select({
          label: "Estado",
          options: [
            { label: "En desarrollo", value: "in-progress" },
            { label: "Completado", value: "completed" },
            { label: "Archivado", value: "archived" },
          ],
          defaultValue: "completed",
        }),
        publishDate: fields.date({
          label: "Fecha de Publicación",
          validation: { isRequired: true },
        }),
        thumbnail: fields.image({
          label: "Imagen Principal",
          directory: "public/images/projects",
          publicPath: "/images/projects",
        }),
        images: fields.array(
          fields.image({
            label: "Imagen",
            directory: "public/images/projects",
            publicPath: "/images/projects",
          }),
          { label: "Galería de Imágenes" },
        ),
        technologies: fields.array(fields.text({ label: "Tecnología" }), {
          label: "Tecnologías Utilizadas",
          itemLabel: (props) => props.value || "Tecnología",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Etiquetas",
          itemLabel: (props) => props.value || "Tag",
        }),
        links: fields.object({
          live: fields.url({ label: "Demo en Vivo" }),
          github: fields.url({ label: "Repositorio GitHub" }),
          case_study: fields.url({ label: "Caso de Estudio" }),
        }),
        seo: fields.object({
          metaTitle: fields.text({ label: "Meta Título (SEO)" }),
          metaDescription: fields.text({
            label: "Meta Descripción (SEO)",
            multiline: true,
          }),
        }),
      },
    }),

    // Colección de Blog
    blog: collection({
      label: "Artículos del Blog",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Título del Artículo",
            validation: { isRequired: true },
          },
        }),
        excerpt: fields.text({
          label: "Extracto",
          multiline: true,
          validation: { isRequired: true },
        }),
        content: fields.markdoc({
          label: "Contenido",
          description: "Contenido completo del artículo",
        }),
        publishDate: fields.date({
          label: "Fecha de Publicación",
          validation: { isRequired: true },
        }),
        updatedDate: fields.date({
          label: "Última Actualización",
        }),
        draft: fields.checkbox({
          label: "Borrador",
          defaultValue: false,
          description: "Los borradores no se publican",
        }),
        featured: fields.checkbox({
          label: "Artículo Destacado",
          defaultValue: false,
        }),
        coverImage: fields.image({
          label: "Imagen de Portada",
          directory: "public/images/blog",
          publicPath: "/images/blog",
        }),
        category: fields.select({
          label: "Categoría",
          options: [
            { label: "Desarrollo", value: "development" },
            { label: "Diseño", value: "design" },
            { label: "Tutoriales", value: "tutorials" },
            { label: "Opinión", value: "opinion" },
            { label: "Carrera", value: "career" },
          ],
          defaultValue: "development",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Etiquetas",
          itemLabel: (props) => props.value || "Tag",
        }),
        readingTime: fields.integer({
          label: "Tiempo de Lectura (minutos)",
          validation: { min: 1 },
        }),
        seo: fields.object({
          metaTitle: fields.text({ label: "Meta Título (SEO)" }),
          metaDescription: fields.text({
            label: "Meta Descripción (SEO)",
            multiline: true,
          }),
          canonicalUrl: fields.url({ label: "URL Canónica" }),
        }),
      },
    }),
  },
});
