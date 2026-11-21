import { skillsContent } from '@/data/skills';

/**
 * Contenido de la página About Me
 * Información personal de José Familia
 */

// Tipo para experiencia laboral
interface Experience {
  position: string;
  company: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  highlights?: string[];
}

export const aboutContent = {
  es: {
    name: "José Familia",
    title: "Ingeniería en Sistemas · Desarrollo · Cloud",
    location: "Santo Domingo, República Dominicana",

    // Filosofía personal
    philosophy: {
      title: "Diseñar, construir y entender.",
      description:
        "Me interesa el ciclo completo de una aplicación: resolver una necesidad, cuidar la experiencia de uso y entender cómo funciona en producción.",
    },

    // Biografía
    bio: [
      "Soy José Familia, estudiante de Ingeniería en Sistemas Computacionales en UNAPEC. Mi interés principal es el diseño y desarrollo de aplicaciones: desde la interfaz y las API hasta los datos y el despliegue.",
      "Mi formación combina programación, estructuras de datos, bases de datos, redes y sistemas operativos. Me interesa convertir esos fundamentos en aplicaciones claras, mantenibles y útiles, con decisiones técnicas que pueda explicar y validar.",
      "Desarrollo proyectos personales con JavaScript, TypeScript y Python. Profundizo en Astro, React, Next.js y NestJS, y continúo mi formación en AWS, contenedores y arquitectura de sistemas. Documento lo que construyo y las decisiones detrás de cada solución.",
    ],

    skills: skillsContent.es,

    // Stack tecnológico
    stack: [
      { name: "React", icon: "react", url: "https://reactjs.org" },
      {
        name: "TypeScript",
        icon: "typescript",
        url: "https://typescriptlang.org",
      },
      { name: "Astro", icon: "astro", url: "https://astro.build" },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        url: "https://tailwindcss.com",
      },
      { name: "Node.js", icon: "nodejs", url: "https://nodejs.org" },
      { name: "PostgreSQL", icon: "postgresql", url: "https://postgresql.org" },
    ],

    // Experiencia laboral
    experience: [
      {
        company: "Banco Popular Dominicano",
        position: "Analista I de redes",
        startDate: new Date("2026-06-22"),
        current: true,
        description:
          "Producción y monitoreo de aplicaciones y servicios de TI: seguimiento de alertas e incidentes, escalamiento y soporte en entornos Windows y Linux con Dynatrace y Splunk.",
      },
    ] as Experience[],

    // Educación
    education: [
      {
        institution: "Universidad APEC",
        degree: "Ingeniería en Sistemas Computacionales",
        location: "Santo Domingo, República Dominicana",
        startDate: new Date("2021-01-01"),
        current: true,
        description:
          "Programa enfocado en comprender los sistemas computacionales desde cero, incluyendo sistemas operativos, redes, lenguajes de programación, bases de datos y desarrollo de aplicaciones.",
      },
      {
        institution: "Colegio Yajaimary",
        degree: "Bachiller Técnico en Gestión Tributaria y Finanzas",
        location: "Santo Domingo, República Dominicana",
        startDate: new Date("2016-01-01"),
        endDate: new Date("2020-12-31"),
        current: false,
        description:
          "Programa técnico de bachillerato en Gestión Tributaria y Finanzas.",
      },
    ],

    // Certificaciones
    certifications: [
      {
        name: "SQL Associate",
        issuer: "DataCamp",
        type: "Certificación profesional",
        date: new Date("2026-02-19"),
        skills: ["SQL", "Bases de datos", "Análisis de datos"],
      },
      {
        name: "Oracle Next Education: Frontend",
        issuer: "Oracle | Alura Latam",
        type: "Programa formativo",
        date: new Date("2023-10-03"),
        credentialId: "F2 T5 Front-end",
        skills: ["Desarrollo Web", "Programación", "Frontend"],
      },
      {
        name: "Diseño Web Responsivo",
        issuer: "freeCodeCamp",
        type: "Certificación",
        date: new Date("2023-03-30"),
        skills: ["Desarrollo Web", "Diseño"],
      },
    ],
  },

  en: {
    name: "José Familia",
    title: "Systems Engineering · Development · Cloud",
    location: "Santo Domingo, Dominican Republic",

    // Personal philosophy
    philosophy: {
      title: "Design, build and understand.",
      description:
        "I care about the full application lifecycle: solving a need, shaping the user experience and understanding how it runs in production.",
    },

    // Bio
    bio: [
      "I'm José Familia, a Computer Systems Engineering student at UNAPEC. My main interest is application design and development, from interfaces and APIs to data and deployment.",
      "My education brings together programming, data structures, databases, networking and operating systems. I want to turn those foundations into useful, maintainable applications, with technical decisions I can explain and validate.",
      "I build personal projects with JavaScript, TypeScript and Python. I am expanding my work with Astro, React, Next.js and NestJS while studying AWS, containers and system architecture. I document both what I build and the decisions behind each solution.",
    ],

    skills: skillsContent.en,

    // Tech stack
    stack: [
      { name: "React", icon: "react", url: "https://reactjs.org" },
      {
        name: "TypeScript",
        icon: "typescript",
        url: "https://typescriptlang.org",
      },
      { name: "Astro", icon: "astro", url: "https://astro.build" },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        url: "https://tailwindcss.com",
      },
      { name: "Node.js", icon: "nodejs", url: "https://nodejs.org" },
      { name: "PostgreSQL", icon: "postgresql", url: "https://postgresql.org" },
    ],

    // Work experience
    experience: [
      {
        company: "Banco Popular Dominicano",
        position: "Network Analyst I",
        startDate: new Date("2026-06-22"),
        current: true,
        description:
          "Production and monitoring of IT applications and services: alert and incident follow-up, escalation and support across Windows and Linux environments using Dynatrace and Splunk.",
      },
    ] as Experience[],

    // Education
    education: [
      {
        institution: "Universidad APEC",
        degree: "BSc in Computer Systems Engineering",
        location: "Santo Domingo, Dominican Republic",
        startDate: new Date("2021-01-01"),
        current: true,
        description:
          "Degree program focused on understanding computer systems from the ground up, including operating systems, networking, programming languages, databases, and application development.",
      },
      {
        institution: "Colegio Yajaimary",
        degree: "High School Diploma (Technical Program)",
        location: "Santo Domingo, Dominican Republic",
        startDate: new Date("2016-01-01"),
        endDate: new Date("2020-12-31"),
        current: false,
        description:
          "Technical-focused high school program in Tax Management and Finance.",
      },
    ],

    // Certifications
    certifications: [
      {
        name: "SQL Associate",
        issuer: "DataCamp",
        type: "Professional certification",
        date: new Date("2026-02-19"),
        skills: ["SQL", "Databases", "Data Analysis"],
      },
      {
        name: "Oracle Next Education: Frontend",
        issuer: "Oracle | Alura Latam",
        type: "Training program",
        date: new Date("2023-10-03"),
        credentialId: "F2 T5 Front-end",
        skills: ["Web Development", "Programming", "Frontend"],
      },
      {
        name: "Responsive Web Design",
        issuer: "freeCodeCamp",
        type: "Certification",
        date: new Date("2023-03-30"),
        skills: ["Web Development", "Design"],
      },
    ],
  },
};

export type AboutContent = typeof aboutContent.es;
