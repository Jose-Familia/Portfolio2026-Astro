/** Shared for ES/EN pages. Bind once per form, including client navigations. */
document.addEventListener('astro:page-load', () => {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  if (!form || form.dataset.initialized) return;
  form.dataset.initialized = 'true';
  const english = document.documentElement.lang === 'en';
  const errorBox = document.getElementById('form-error');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const originalLabel = button.textContent;
  let sending = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    sending = true;
    errorBox?.classList.add('hidden');
    button.disabled = true;
    button.textContent = english ? 'Sending…' : 'Enviando…';
    form.setAttribute('aria-busy', 'true');
    const data = new FormData(form);
    data.set('lang', english ? 'en' : 'es');
    try {
      const response = await fetch('/api/contact', { method: 'POST', body: data });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || (english ? 'Please try again or email me directly.' : 'Intenta de nuevo o escríbeme directamente.'));
      location.assign(english ? '/en/thanks' : '/gracias');
    } catch (error) {
      const text = errorBox?.querySelector('p');
      if (text) text.textContent = error instanceof Error ? error.message : (english ? 'Could not send your message.' : 'No se pudo enviar el mensaje.');
      errorBox?.classList.remove('hidden');
    } finally {
      sending = false;
      button.disabled = false;
      button.textContent = originalLabel;
      form.removeAttribute('aria-busy');
    }
  });
});
