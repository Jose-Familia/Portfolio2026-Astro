// Utility to provide inline SVG logos (light/dark) for tech stack tags
// Imports SVGs as raw strings to embed directly in Astro components

// Light/Dark variants

// Single variants
// Utility to provide tech logo URLs (light/dark) for stack tags
// Imports SVGs as URLs to render via <img> for consistent sizing

// Light/Dark variants
import AstroSVG from "../../image/svgs/astro-svgrepo-com.svg?url";
import GitHubSVG from "../../image/svgs/github-color-svgrepo-com.svg?url";
import NextjsSVG from "../../image/svgs/nextjs_icon_dark.svg?url";
import ReactSVG from "../../image/svgs/react-svgrepo-com.svg?url";

// Single variants
import CSSLogo from "../../image/svgs/css.svg?url";
import Docker from "../../image/svgs/docker.svg?url";
import Git from "../../image/svgs/git.svg?url";
import HTML5 from "../../image/svgs/html5.svg?url";
import JavaScript from "../../image/svgs/javascript.svg?url";
import Linux from "../../image/svgs/linux.svg?url";
import NestJS from "../../image/svgs/nestjs.svg?url";
import NodeJS from "../../image/svgs/nodejs.svg?url";
import PostgreSQL from "../../image/svgs/postgresql.svg?url";
import Postman from "../../image/svgs/postman.svg?url";
import SQLLogo from "../../image/svgs/sql_database.svg?url";
import TailwindCSS from "../../image/svgs/tailwindcss.svg?url";
import TypeScript from "../../image/svgs/typescript.svg?url";
import VSCode from "../../image/svgs/vscode.svg?url";

export type LogoVariant = {
  light?: string;
  dark?: string;
  single?: string;
};

export const logos: Record<string, LogoVariant> = {
  // Primary stack (use single new SVGs where available)
  react: { single: ReactSVG },
  astro: { single: AstroSVG },
  typescript: { single: TypeScript },
  tailwind: { single: TailwindCSS },
  tailwindcss: { single: TailwindCSS },
  nodejs: { single: NodeJS },
  postgresql: { single: PostgreSQL },

  // CSS and GitHub
  css: { single: CSSLogo },
  github: { single: GitHubSVG },
  sql: { single: SQLLogo },

  // Extras used across site
  javascript: { single: JavaScript },
  nextjs: { single: NextjsSVG },
  nextjs_icon: { single: NextjsSVG },
  nestjs: { single: NestJS },
  docker: { single: Docker },
  html5: { single: HTML5 },
  git: { single: Git },
  linux: { single: Linux },
  postman: { single: Postman },
  vscode: { single: VSCode },
  // express removed
};

export function getTechLogo(key: string): LogoVariant | undefined {
  if (!key) return undefined;
  // normalize keys
  const normalized = key.toLowerCase().replace(/[^a-z0-9]/g, "");
  // map common aliases
  const aliasMap: Record<string, string> = {
    tailwind: "tailwindcss",
    nextjs: "nextjs",
    nextjsicon: "nextjs",
    // githubcopilot alias removed (no copilot asset)
    html: "html5",
    css: "css",
    github: "github",
  };
  const resolvedKey = aliasMap[normalized] || normalized;
  return logos[resolvedKey];
}
