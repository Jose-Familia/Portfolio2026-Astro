---
title: DigitalWave
description: Agencia Creativa Especializada en Diseño, Branding y Marketing Digital
featured: true
status: completed
publishDate: 2026-01-01
thumbnail: /src/assets/images/projects/digital-wave/thumbnail.png
images: []
technologies:
  - HTML/CSS
  - Javascript
tags:
  - Design
links:
  live: https://digitalwavee.netlify.app/
  github: https://github.com/Jose-Familia/DigitalWave-Creative-Agency
seo: {}
---

Sitio web moderno y responsivo para DigitalWave, una agencia digital creativa especializada en desarrollo web, branding, marketing digital y diseño UX/UI.

**🌟 Características**

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y efectos visuales
- **Modo Claro/Oscuro**: Sistema de temas con persistencia en localStorage
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Menú Hamburguesa**: Navegación móvil intuitiva con menú lateral deslizante
- **Animaciones Suaves**: Efectos de scroll y transiciones fluidas
- **Rendimiento Optimizado**: CSS consolidado y JavaScript modular

**📁 Estructura del Proyecto**

DigitalWave/\
├── index.html # Página principal\
├── index.css # Estilos consolidados (todos los estilos en un archivo)\
├── pages/\
│ ├── Servicios.html # Página de servicios\
│ ├── Testimonios.html # Testimonios de clientes\
│ ├── FaQ.html # Preguntas frecuentes\
│ └── Contactos.html # Formulario de contacto\
├── scripts/\
│ ├── theme.js # Control de tema claro/oscuro\
│ ├── menu.js # Menú hamburguesa mobile\
│ ├── animations.js # Animaciones de scroll\
│ └── contact.js # Validación de formulario\
└── README.md

**💡 Funcionalidades Principales**

**Página Principal (index.html)**

- Hero section con gradiente animado
- Sección de servicios destacados
- Proceso de trabajo en 4 pasos
- Testimonios de clientes
- Call-to-Action final
- Estadísticas de la agencia

**Página de Servicios**

6 servicios completos con detalles:

- 🌐 Desarrollo Web
- 🎨 Branding & Identidad Visual
- 📱 Marketing Digital
- 💡 Diseño UX/UI
- 💼 Consultoría Digital
- 📈 Growth Marketing

**Página de Testimonios**

- 6 testimonios detallados de clientes
- Sistema de calificación con estrellas
- Información del cliente y resultados obtenidos

**Página FAQ**

15 preguntas frecuentes organizadas en 5 categorías:

- 🌐 Desarrollo Web
- 💼 Proceso y Precios
- 🛠️ Soporte y Mantenimiento
- 📈 Marketing y SEO
- 🎨 Diseño y Branding

**Página de Contacto**

- Formulario con validación
- Información de contacto
- Selector de servicios
- Validación de campos en tiempo real

**🎨 Sistema de Temas**

El sitio incluye dos temas que se pueden alternar:

**Tema Oscuro (por defecto)**

- Fondo: `#08131b`
- Texto: `#ffffff`
- Acento: `#00aaff`

**Tema Claro**

- Fondo: `#ffffff`
- Texto: `#0b1a1f`
- Acento: `#0077cc`

El tema seleccionado se guarda en localStorage para persistir entre sesiones.

**📱 Responsive Design**

**Breakpoints**

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: \< 768px

**Características Mobile**

- Menú hamburguesa animado
- Navegación lateral deslizante
- Botón de tema integrado en el menú
- Diseño de una columna optimizado
- Touch-friendly con áreas de toque grandes

**🛠️ Tecnologías Utilizadas**

- DOM manipulation
- Event listeners
- LocalStorage API
- Intersection Observer API

**📦 Características Técnicas**

**CSS Consolidado**

- Todos los estilos en un solo archivo (`index.css`)
- Variables CSS para fácil personalización
- Sistema de temas con cambio dinámico
- Optimizado para rendimiento

**JavaScript Modular**

- `theme.js`: Control de tema claro/oscuro con persistencia
- `menu.js`: Menú hamburguesa con múltiples controles (click, ESC, click fuera, resize)
- `animations.js`: Animaciones de scroll con Intersection Observer
- `contact.js`: Validación de formulario en tiempo real

**Accesibilidad**

- Atributos ARIA apropiados
- Navegación por teclado (ESC para cerrar menú)
- Contraste de colores accesible
- Etiquetas semánticas HTML5

**🌐 Navegación del Sitio**

```
plain text
├── Inicio (index.html)
├── Servicios (pages/Servicios.html)
├── Testimonios (pages/Testimonios.html)
├── FAQ (pages/FaQ.html)
└── Contacto (pages/Contactos.html)
```

**🎯 Próximas Mejoras**

- \[ ] Integración con backend para formulario de contacto
- \[ ] Animaciones adicionales con GSAP
- \[ ] Blog section
- \[ ] Portfolio/proyectos realizados
- \[ ] Optimización de imágenes con lazy loading
- \[ ] PWA (Progressive Web App)

**📄 Licencia**

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

**👤 Autor**

**Jose Familia**

- GitHub: [@Jose-Familia](https://github.com/Jose-Familia)
- Repositorio: [DigitalWave-Creative-Agency](https://github.com/Jose-Familia/DigitalWave-Creative-Agency)
