export interface Skill { name: string; icon: string; }
export interface SkillGroup {
  category: string;
  description: string;
  practice?: string;
  items: Skill[];
}

const frontend = [
  { name: 'HTML', icon: 'html5' }, { name: 'CSS', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' }, { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' }, { name: 'Next.js', icon: 'nextjs' },
  { name: 'Astro', icon: 'astro' }, { name: 'Tailwind CSS', icon: 'tailwindcss' },
];
const backend = [
  { name: 'Node.js', icon: 'nodejs' }, { name: 'NestJS', icon: 'nestjs' },
  { name: 'Python', icon: 'python' }, { name: 'Postman', icon: 'postman' },
];
const data = [
  { name: 'SQL', icon: 'sql' }, { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'SQLite', icon: 'sqlite' }, { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Redis', icon: 'redis' },
];
const cloud = [
  { name: 'AWS', icon: 'aws' }, { name: 'Docker', icon: 'docker' },
  { name: 'Kubernetes', icon: 'kubernetes' }, { name: 'Terraform', icon: 'terraform' },
  { name: 'Linux', icon: 'linux' },
];
const tools = [
  { name: 'Git', icon: 'git' }, { name: 'GitHub', icon: 'github' },
  { name: 'VS Code', icon: 'vscode' },
  { name: 'Dynatrace', icon: 'dynatrace' }, { name: 'Splunk', icon: 'splunk' },
];

export const skillsContent: Record<'es' | 'en', SkillGroup[]> = {
  es: [
    { category: 'Frontend e interfaces', description: 'Interfaces adaptables, componentes reutilizables y experiencias accesibles.', items: frontend },
    { category: 'Backend y API', description: 'Lógica de negocio, contratos HTTP y aplicaciones de escritorio.', items: backend },
    { category: 'Bases de datos', description: 'Modelado relacional, persistencia y exploración de almacenes NoSQL.', items: data },
    { category: 'Cloud e infraestructura', description: 'Despliegue de aplicaciones, contenedores y fundamentos de arquitectura.', practice: 'En formación y práctica', items: cloud },
    { category: 'Herramientas de desarrollo', description: 'Control de versiones, flujo de trabajo y observabilidad.', items: tools },
  ],
  en: [
    { category: 'Frontend and interfaces', description: 'Responsive interfaces, reusable components and accessible experiences.', items: frontend },
    { category: 'Backend and APIs', description: 'Business logic, HTTP contracts and desktop applications.', items: backend },
    { category: 'Databases', description: 'Relational modelling, persistence and exploration of NoSQL stores.', items: data },
    { category: 'Cloud and infrastructure', description: 'Application deployment, containers and architecture fundamentals.', practice: 'Learning and hands-on practice', items: cloud },
    { category: 'Development tools', description: 'Version control, development workflow and observability.', items: tools },
  ],
};
