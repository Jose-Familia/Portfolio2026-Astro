/** Filter by exact category and normalized text; URLs remain shareable. */
export function normalizeSearch(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export function matchesProject(searchable: string, tags: string[], query: string, tag: string) {
  const text = normalizeSearch(searchable);
  return (tag === 'all' || tags.some(value => normalizeSearch(value) === normalizeSearch(tag)))
    && normalizeSearch(query).split(/\s+/).every(term => text.includes(term));
}

export function initProjectFilters(root: HTMLElement) {
  if (root.dataset.initialized) return;
  root.dataset.initialized = 'true';
  const input = root.querySelector<HTMLInputElement>('[data-project-search]')!;
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-filter]')];
  const cards = [...root.querySelectorAll<HTMLElement>('[data-project]')];
  const params = new URLSearchParams(location.search);
  let tag = params.get('tag') || 'all';
  if (!buttons.some(button => button.dataset.filter === tag)) tag = 'all';
  input.value = params.get('q') || '';

  const render = (saveUrl = true) => {
    let visible = 0;
    cards.forEach(card => {
      const match = matchesProject(card.dataset.search || '', JSON.parse(card.dataset.tags || '[]'), input.value, tag);
      card.hidden = !match;
      if (match) visible++;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === tag)));
    root.querySelector<HTMLElement>('[data-project-count]')!.textContent = `${visible} de ${cards.length} proyectos`;
    root.querySelector<HTMLElement>('[data-no-results]')!.hidden = visible > 0;
    if (saveUrl) {
      const url = new URL(location.href);
      input.value.trim() ? url.searchParams.set('q', input.value.trim()) : url.searchParams.delete('q');
      tag === 'all' ? url.searchParams.delete('tag') : url.searchParams.set('tag', tag);
      history.replaceState(history.state, '', url);
    }
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    tag = button.dataset.filter || 'all';
    render();
  }));
  input.addEventListener('input', () => render());
  root.querySelector('[data-reset-projects]')?.addEventListener('click', () => {
    tag = 'all'; input.value = ''; render(); input.focus();
  });
  render(false);
}
