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
    title: "Estudiante de Ingeniería en Sistemas",
    location: "Santo Domingo, República Dominicana",

    // Filosofía personal
    philosophy: {
      title: "Soy un auto-constructor.",
      description:
        "Aprendo, fallo, me levanto y sigo adelante — porque todo lo valioso se gana con inteligencia, disciplina y corazón.",
    },

    // Biografía
    bio: [
      "Soy José Familia, estudiante de Ingeniería en Sistemas Computacionales en la Universidad APEC. Aunque aún no cuento con experiencia laboral formal en el área, he dedicado los últimos años a formarme de manera autodidacta en desarrollo web.",
      "Desde 2023 construyo proyectos personales que me permiten practicar y aprender nuevas tecnologías. Cada proyecto es un paso más en mi camino: errores incluidos, porque de ahí es donde más aprendo.",
      "Mi objetivo es prepararme para cuando llegue la oportunidad de trabajar profesionalmente. Mientras tanto, sigo aprendiendo, documentando mi progreso y construyendo mi portafolio.",
    ],

    // Habilidades
    skills: [
      {
        category: "Frontend",
        items: [
          { name: "HTML" },
          { name: "CSS" },
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "React" },
          { name: "Astro" },
          { name: "Tailwind CSS" },
        ],
      },
      {
        category: "Backend",
        items: [{ name: "Node.js" }, { name: "SQL" }, { name: "PostgreSQL" }],
      },
      {
        category: "Herramientas",
        items: [
          { name: "Git" },
          { name: "GitHub" },
          { name: "Docker" },
          { name: "Linux" },
          { name: "VS Code" },
        ],
      },
    ],

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

    // Experiencia laboral (aún como estudiante)
    experience: [] as Experience[],

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
        name: "Oracle Next Education: Frontend",
        issuer: "Oracle | Alura Latam",
        date: new Date("2023-10-03"),
        credentialId: "F2 T5 Front-end",
        skills: ["Desarrollo Web", "Programación", "Frontend"],
      },
      {
        name: "Introducción a la Inteligencia Artificial",
        issuer: "Coursera | UNAM",
        date: new Date("2024-07-30"),
        skills: ["Inteligencia Artificial", "AI/ML"],
      },
      {
        name: "Diseño Web Responsivo",
        issuer: "freeCodeCamp",
        date: new Date("2023-03-30"),
        skills: ["Desarrollo Web", "Diseño"],
      },
      {
        name: "Introducción al Desarrollo Web (2/2)",
        issuer: "Google",
        date: new Date("2023-02-17"),
        credentialId: "180245423",
        skills: ["Desarrollo Web", "Programación", "Redes"],
      },
      {
        name: "Introducción al Desarrollo Web (1/2)",
        issuer: "Google",
        date: new Date("2023-02-06"),
        credentialId: "180991538",
        skills: ["Desarrollo Web", "Programación", "Redes"],
      },
    ],
  },

  en: {
    name: "José Familia",
    title: "Computer Systems Engineering Student",
    location: "Santo Domingo, Dominican Republic",

    // Personal philosophy
    philosophy: {
      title: "I am a self-builder.",
      description:
        "I learn, I fail, I get back up, and I move forward — because everything worthwhile is earned with intelligence, discipline, and heart.",
    },

    // Bio
    bio: [
      "I'm José Familia, a Computer Systems Engineering student at Universidad APEC. While I don't have formal work experience in the field yet, I've spent the last few years teaching myself web development.",
      "Since 2023, I've been building personal projects that allow me to practice and learn new technologies. Each project is another step forward—mistakes included, because that's where I learn the most.",
      "My goal is to prepare myself for when the opportunity to work professionally arrives. In the meantime, I keep learning, documenting my progress, and building my portfolio.",
    ],

    // Skills
    skills: [
      {
        category: "Frontend",
        items: [
          { name: "HTML" },
          { name: "CSS" },
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "React" },
          { name: "Astro" },
          { name: "Tailwind CSS" },
        ],
      },
      {
        category: "Backend",
        items: [{ name: "Node.js" }, { name: "SQL" }, { name: "PostgreSQL" }],
      },
      {
        category: "Tools",
        items: [
          { name: "Git" },
          { name: "GitHub" },
          { name: "Docker" },
          { name: "Linux" },
          { name: "VS Code" },
        ],
      },
    ],

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

    // Work experience (still a student)
    experience: [] as Experience[],

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
        name: "Oracle Next Education: Frontend",
        issuer: "Oracle | Alura Latam",
        date: new Date("2023-10-03"),
        credentialId: "F2 T5 Front-end",
        skills: ["Web Development", "Programming", "Frontend"],
      },
      {
        name: "Introduction to Artificial Intelligence",
        issuer: "Coursera | UNAM",
        date: new Date("2024-07-30"),
        skills: ["Artificial Intelligence", "AI/ML"],
      },
      {
        name: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: new Date("2023-03-30"),
        skills: ["Web Development", "Design"],
      },
      {
        name: "Introduction to Web Development (2/2)",
        issuer: "Google",
        date: new Date("2023-02-17"),
        credentialId: "180245423",
        skills: ["Web Development", "Programming", "Networking"],
      },
      {
        name: "Introduction to Web Development (1/2)",
        issuer: "Google",
        date: new Date("2023-02-06"),
        credentialId: "180991538",
        skills: ["Web Development", "Programming", "Networking"],
      },
    ],
  },
};

export type AboutContent = typeof aboutContent.es;
