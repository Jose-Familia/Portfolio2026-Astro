# Portfolio 2026

Portfolio profesional minimalista construido con Astro, Keystatic y TailwindCSS.

## 🚀 Características

- **Astro** - Framework de última generación para sitios web de contenido
- **Keystatic CMS** - Gestión de contenido sin código, con interfaz amigable
- **TailwindCSS** - Estilos utilitarios para diseño rápido y consistente
- **Motion** - Animaciones sutiles y performantes
- **TypeScript** - Tipado estático para código más seguro
- **SEO optimizado** - Meta tags, Open Graph, JSON-LD
- **Modo oscuro** - Soporte completo para tema claro/oscuro
- **Accesible** - Siguiendo las mejores prácticas de a11y

## 📁 Estructura del Proyecto

```
/
├── public/                 # Assets estáticos
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── blog/          # Componentes del blog
│   │   ├── home/          # Componentes de la home
│   │   ├── layout/        # Header, Footer
│   │   ├── motion/        # Componentes de animación (React)
│   │   ├── projects/      # Componentes de proyectos
│   │   └── ui/            # Componentes UI base
│   ├── content/           # Contenido gestionado por Keystatic
│   │   ├── blog/          # Artículos del blog
│   │   ├── pages/         # Contenido de páginas
│   │   ├── projects/      # Proyectos
│   │   └── settings/      # Configuración del sitio
│   ├── layouts/           # Layouts de página
│   │   ├── BaseLayout.astro
│   │   ├── BlogPostLayout.astro
│   │   └── ProjectLayout.astro
│   ├── pages/             # Rutas/páginas
│   │   ├── api/           # API routes (Keystatic)
│   │   ├── blog/
│   │   ├── keystatic/     # Panel de admin
│   │   └── proyectos/
│   ├── styles/            # Estilos globales
│   │   └── global.css
│   └── utils/             # Utilidades y helpers
├── astro.config.mjs       # Configuración de Astro
├── keystatic.config.tsx   # Configuración de Keystatic CMS
├── tailwind.config.mjs    # Configuración de Tailwind
└── tsconfig.json          # Configuración de TypeScript
```

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio-2026.git

# Entrar al directorio
cd portfolio-2026

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📝 Gestión de Contenido

El proyecto usa **Keystatic** para gestionar el contenido. Para acceder al panel de administración:

1. Inicia el servidor de desarrollo: `npm run dev`
2. Visita `http://localhost:4321/keystatic`
3. Edita el contenido desde la interfaz visual

### Tipos de contenido

- **Páginas**: Home, Sobre mí (singletons)
- **Proyectos**: Colección de proyectos con imágenes, tecnologías y enlaces
- **Blog**: Artículos con categorías, tags y contenido MDX
- **Configuración**: Datos del sitio, SEO y redes sociales

## 🎨 Personalización

### Colores

Edita los colores en `tailwind.config.mjs`:

```js
colors: {
  primary: {
    500: '#0ea5e9', // Color principal
    // ...
  },
}
```

### Tipografía

Las fuentes se cargan desde Google Fonts en `BaseLayout.astro`. Puedes cambiar Inter y JetBrains Mono por otras fuentes.

### Animaciones

Las animaciones CSS están definidas en `tailwind.config.mjs` y los componentes de Motion en `src/components/motion/`.

## 📦 Scripts

| Comando           | Descripción              |
| ----------------- | ------------------------ |
| `npm run dev`     | Servidor de desarrollo   |
| `npm run build`   | Compilar para producción |
| `npm run preview` | Preview del build        |
| `npm run astro`   | CLI de Astro             |

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente que es un proyecto Astro
3. Configura las variables de entorno si usas Keystatic con GitHub

### Otras plataformas

Astro soporta múltiples adaptadores: Netlify, Cloudflare, Node.js, etc.

## 📄 Licencia

MIT License - Siéntete libre de usar este proyecto como base para tu portfolio.

---

Hecho con ❤️ usando [Astro](https://astro.build)
# Portfolio2026-Astro
