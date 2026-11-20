import { initializeTheme } from './theme';

initializeTheme(window, document);

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

document.addEventListener('astro:before-swap', clearMotion);
document.addEventListener('astro:page-load', reveal);
reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) clearMotion(); });
