/** One lifecycle for theme and reveal effects across Astro navigations. */
function getTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
  } catch { /* Theme still works when storage is disabled. */ }
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme = getTheme(), root = document.documentElement) {
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
}

function updateIcons() {
  const dark = document.documentElement.classList.contains('dark');
  document.querySelectorAll<HTMLImageElement>('img[data-light][data-dark]').forEach(image => {
    image.src = (dark ? image.dataset.light : image.dataset.dark)!;
  });
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach(button => {
    button.setAttribute('aria-label', dark ? 'Activar tema claro' : 'Activar tema oscuro');
    button.setAttribute('aria-pressed', String(dark));
  });
}

let observer: IntersectionObserver | undefined;
let animations: Animation[] = [];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
function clearMotion() {
  observer?.disconnect();
  animations.forEach(animation => animation.cancel());
  animations = [];
}
function reveal() {
  clearMotion();
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer?.unobserve(entry.target);
      const element = entry.target as HTMLElement;
      // Content is visible by default. Only animate as it enters the viewport.
      // Avoid nested effects on text/tags already moving with their parent.
      if (element.parentElement?.closest('.animate-fade-in-up, .scroll-reveal')) return;
      const stagger = Number(getComputedStyle(element).getPropertyValue('--stagger')) || 0;
      const animation = element.animate([
        { opacity: .25, transform: 'translateY(14px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 460, delay: Math.min(Math.max(stagger, 0) * 40, 160), easing: 'cubic-bezier(.22,1,.36,1)' });
      animations.push(animation);
      animation.finished.then(() => {
        animations = animations.filter(item => item !== animation);
      }).catch(() => {});
    });
  }, { threshold: .08 });
  document.querySelectorAll('.animate-fade-in-up, .scroll-reveal').forEach(element => observer!.observe(element));
}

// Delegation avoids adding another toggle handler after every navigation.
document.addEventListener('click', event => {
  if (!(event.target instanceof Element) || !event.target.closest('[data-theme-toggle]')) return;
  const theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  try { localStorage.setItem('theme', theme); } catch { /* Session-only selection. */ }
  applyTheme(theme); updateIcons();
});
document.addEventListener('astro:before-swap', event => {
  const nextDocument = (event as Event & { newDocument: Document }).newDocument;
  // Preserve the active theme even when localStorage is unavailable.
  applyTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light', nextDocument.documentElement);
  clearMotion();
});
document.addEventListener('astro:page-load', () => { updateIcons(); reveal(); });
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  applyTheme(); updateIcons();
});
reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) clearMotion(); });
window.addEventListener('storage', event => {
  if (event.key === 'theme') { applyTheme(); updateIcons(); }
});
