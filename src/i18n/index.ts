/**
 * Sistema de internacionalización (i18n)
 * Soporta español (es) e inglés (en)
 */

export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es" as const;

export type Lang = keyof typeof languages;

/**
 * Traducciones de la UI
 */
export const ui = {
  es: {
    // Navegación
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",

    // Página About
    "about.title": "Sobre mí",
    "about.myStory": "Mi historia",
    "about.skills": "Habilidades técnicas",
    "about.experience": "Experiencia laboral",
    "about.education": "Educación",
    "about.certifications": "Certificaciones",
    "about.mainStack": "Stack principal",
    "about.workTogether": "¿Trabajamos juntos?",
    "about.available":
      "Estoy disponible para proyectos freelance y colaboraciones.",
    "about.contact": "Contactar",
    "about.current": "Actual",
    "about.present": "Presente",

    // Niveles de habilidad
    "skill.basic": "Básico",
    "skill.intermediate": "Intermedio",
    "skill.advanced": "Avanzado",
    "skill.expert": "Experto",

    // Generales
    "general.readMore": "Leer más",
    "general.viewAll": "Ver todos",
    "general.backTo": "Volver a",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.builtWith": "Construido con",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    // About page
    "about.title": "About Me",
    "about.myStory": "My Story",
    "about.skills": "Technical Skills",
    "about.experience": "Work Experience",
    "about.education": "Education",
    "about.certifications": "Certifications",
    "about.mainStack": "Main Stack",
    "about.workTogether": "Work together?",
    "about.available":
      "I am available for freelance projects and collaborations.",
    "about.contact": "Contact",
    "about.current": "Current",
    "about.present": "Present",

    // Skill levels
    "skill.basic": "Basic",
    "skill.intermediate": "Intermediate",
    "skill.advanced": "Advanced",
    "skill.expert": "Expert",

    // General
    "general.readMore": "Read more",
    "general.viewAll": "View all",
    "general.backTo": "Back to",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with",
  },
} as const;

/**
 * Obtiene la traducción de una clave
 */
export function t(lang: Lang, key: keyof typeof ui.es): string {
  return ui[lang][key] || ui[defaultLang][key] || key;
}

/**
 * Obtiene el idioma de la URL
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

/**
 * Genera la URL traducida
 */
export function getTranslatedUrl(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  const pathWithoutLang = url.pathname.replace(
    new RegExp(`^/${currentLang}`),
    "",
  );

  if (targetLang === defaultLang) {
    return pathWithoutLang || "/";
  }

  return `/${targetLang}${pathWithoutLang}`;
}

/**
 * Rutas localizadas
 */
export const routes = {
  es: {
    about: "/sobre-mi",
    projects: "/proyectos",
    blog: "/blog",
    contact: "/contacto",
  },
  en: {
    about: "/en/about",
    projects: "/en/projects",
    blog: "/en/blog",
    contact: "/en/contact",
  },
} as const;
