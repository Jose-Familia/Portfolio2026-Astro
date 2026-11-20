export type Theme = 'light' | 'dark';
export const themeColors: Record<Theme, string> = { light: '#f7f9fc', dark: '#0e1117' };
const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark';
export function resolveTheme(preference: unknown, systemDark: boolean): Theme {
  return isTheme(preference) ? preference : systemDark ? 'dark' : 'light';
}

/** Keep the current preference in memory too, for browsers that block storage. */
export function initializeTheme(win: Window, doc: Document) {
  const system = win.matchMedia('(prefers-color-scheme: dark)');
  const reduced = win.matchMedia('(prefers-reduced-motion: reduce)');
  let preference: Theme | undefined;
  try { const saved = win.localStorage.getItem('theme'); if (isTheme(saved)) preference = saved; } catch {}
  let active = resolveTheme(preference, system.matches);
  let timer: ReturnType<typeof setTimeout> | undefined;

  const apply = (theme: Theme, target = doc) => {
    const root = target.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    target.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[theme]);
    const english = root.lang === 'en';
    const label = english ? (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme') : (theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro');
    target.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    });
  };
  const sync = () => apply(active);
  const stopTransition = () => { clearTimeout(timer); doc.documentElement.classList.remove('theme-transition'); };
  const onClick = (event: Event) => {
    const target = event.target as Element | null;
    if (!target?.closest?.('[data-theme-toggle]')) return;
    stopTransition();
    if (!reduced.matches) {
      doc.documentElement.classList.add('theme-transition');
      // Commit the old palette before switching to the new one.
      void doc.documentElement.offsetWidth;
      timer = setTimeout(stopTransition, 260);
    }
    active = active === 'dark' ? 'light' : 'dark';
    preference = active;
    try { win.localStorage.setItem('theme', active); } catch {}
    sync();
  };
  const onBeforeSwap = (event: Event) => {
    stopTransition();
    const incoming = (event as Event & { newDocument?: Document }).newDocument;
    if (incoming) apply(active, incoming);
  };
  const onSystem = () => { if (!preference) { active = resolveTheme(undefined, system.matches); sync(); } };
  const onStorage = (event: StorageEvent) => {
    if (event.key !== 'theme' && event.key !== null) return;
    preference = isTheme(event.newValue) ? event.newValue : undefined;
    active = resolveTheme(preference, system.matches);
    sync();
  };
  sync();
  doc.addEventListener('click', onClick);
  doc.addEventListener('astro:before-swap', onBeforeSwap);
  doc.addEventListener('astro:after-swap', sync);
  doc.addEventListener('astro:page-load', sync);
  system.addEventListener('change', onSystem);
  reduced.addEventListener('change', stopTransition);
  win.addEventListener('storage', onStorage);
  return () => {
    stopTransition();
    doc.removeEventListener('click', onClick);
    doc.removeEventListener('astro:before-swap', onBeforeSwap);
    doc.removeEventListener('astro:after-swap', sync);
    doc.removeEventListener('astro:page-load', sync);
    system.removeEventListener('change', onSystem);
    reduced.removeEventListener('change', stopTransition);
    win.removeEventListener('storage', onStorage);
  };
}
