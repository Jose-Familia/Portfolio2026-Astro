import { afterEach, describe, expect, it } from 'vitest';
import { initializeTheme, resolveTheme, themeColors } from '../src/scripts/theme';

const disposals: Array<() => void> = [];
afterEach(() => { disposals.splice(0).forEach(dispose => dispose()); });
function harness(options: { saved?: string; dark?: boolean; blocked?: boolean; reduced?: boolean } = {}) {
  class Media extends EventTarget { constructor(public matches: boolean) { super(); } change(matches: boolean) { this.matches = matches; this.dispatchEvent(new Event('change')); } }
  const system = new Media(options.dark || false);
  const reduced = new Media(options.reduced || false);
  const doc = document.implementation.createHTMLDocument('Theme');
  doc.documentElement.lang = 'es';
  doc.head.innerHTML = '<meta name="theme-color" content="#fff">';
  doc.body.innerHTML = '<button data-theme-toggle><svg><path /></svg></button>';
  const data = new Map<string,string>(options.saved ? [['theme',options.saved]] : []);
  const win = new EventTarget() as unknown as Window;
  Object.defineProperty(win, 'matchMedia', { value: (query: string) => query.includes('reduced') ? reduced : system });
  Object.defineProperty(win, 'localStorage', { get() {
    if (options.blocked) throw new Error('Storage denied');
    return { getItem: (key: string) => data.get(key) || null, setItem: (key: string,value: string) => data.set(key,value) };
  } });
  disposals.push(initializeTheme(win, doc));
  return { doc, win, system, data, click() { doc.querySelector('path')!.dispatchEvent(new MouseEvent('click', { bubbles: true })); } };
}

describe('Theme lifecycle', () => {
  it('resolves invalid preferences using the system', () => {
    expect(resolveTheme('unknown', true)).toBe('dark');
    expect(resolveTheme(null, false)).toBe('light');
    expect(resolveTheme('light', true)).toBe('light');
  });
  it('applies a saved theme to the page, browser chrome and accessible toggle', () => {
    const {doc} = harness({saved:'dark'});
    expect(doc.documentElement.classList.contains('dark')).toBe(true);
    expect(doc.documentElement.style.colorScheme).toBe('dark');
    expect(doc.querySelector('meta')?.content).toBe(themeColors.dark);
    expect(doc.querySelector('button')?.getAttribute('aria-label')).toBe('Activar tema claro');
    expect(doc.querySelector('button')?.getAttribute('aria-pressed')).toBe('true');
  });
  it('toggles once after multiple page-load events, including clicks on SVG paths', () => {
    const h = harness({saved:'light'});
    h.doc.dispatchEvent(new Event('astro:page-load'));
    h.doc.dispatchEvent(new Event('astro:page-load'));
    h.click();
    expect(h.doc.documentElement.dataset.theme).toBe('dark');
    expect(h.data.get('theme')).toBe('dark');
    h.click();
    expect(h.doc.documentElement.dataset.theme).toBe('light');
  });
  it('prepares the next document before an Astro swap and restores state after it', () => {
    const h = harness({saved:'dark'});
    const incoming = document.implementation.createHTMLDocument('Incoming');
    incoming.documentElement.lang = 'en';
    incoming.head.innerHTML = '<meta name="theme-color">';
    incoming.body.innerHTML = '<button data-theme-toggle></button>';
    const event = new Event('astro:before-swap');
    Object.defineProperty(event,'newDocument',{value:incoming});
    h.doc.dispatchEvent(event);
    expect(incoming.documentElement.dataset.theme).toBe('dark');
    expect(incoming.querySelector('meta')?.content).toBe(themeColors.dark);
    expect(incoming.querySelector('button')?.getAttribute('aria-label')).toBe('Switch to light theme');
    h.doc.documentElement.className = '';
    h.doc.dispatchEvent(new Event('astro:after-swap'));
    expect(h.doc.documentElement.classList.contains('dark')).toBe(true);
  });
  it('keeps manual selection when storage is blocked and the system changes', () => {
    const h = harness({blocked:true});
    h.click();
    h.system.change(false);
    expect(h.doc.documentElement.dataset.theme).toBe('dark');
  });
  it('follows system changes until the visitor chooses a theme', () => {
    const h = harness();
    h.system.change(true);
    expect(h.doc.documentElement.dataset.theme).toBe('dark');
    h.click();
    h.system.change(true);
    expect(h.doc.documentElement.dataset.theme).toBe('light');
  });
  it('synchronizes another tab and returns to system preference on storage clear', () => {
    const h = harness();
    h.win.dispatchEvent(new StorageEvent('storage',{key:'theme',newValue:'dark'}));
    expect(h.doc.documentElement.dataset.theme).toBe('dark');
    h.win.dispatchEvent(new StorageEvent('storage',{key:null,newValue:null}));
    expect(h.doc.documentElement.dataset.theme).toBe('light');
  });
  it('skips the theme transition when reduced motion is selected', () => {
    const h = harness({reduced:true});
    h.click();
    expect(h.doc.documentElement.dataset.theme).toBe('dark');
    expect(h.doc.documentElement.classList.contains('theme-transition')).toBe(false);
  });
});
