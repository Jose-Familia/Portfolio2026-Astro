import { beforeEach, describe, expect, it, vi } from 'vitest';
import { POST } from '../src/pages/api/contact';
import { escapeHtml } from '../src/utils/escapeHtml';
import type { APIContext } from 'astro';

const send = vi.hoisted(() => vi.fn());
vi.mock('resend', () => ({ Resend: class { emails = { send }; } }));
function submit(fields: Record<string, string>) {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) body.set(key, value);
  return POST({ request: new Request('http://localhost/api/contact', { method: 'POST', body }) } as APIContext);
}
const valid = { name: 'José', email: 'test@example.com', message: 'Un mensaje de prueba.', lang: 'es' };
beforeEach(() => { vi.unstubAllEnvs(); send.mockReset(); });

describe('Contact endpoint', () => {
  it('rejects invalid requests before trying to send', async () => {
    vi.stubEnv('RESEND_API_KEY', '');
    const response = await submit({ ...valid, email: 'invalid' });
    expect(response.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });
  it('returns a usable fallback when the email service is not configured', async () => {
    vi.stubEnv('RESEND_API_KEY', '');
    const response = await submit(valid);
    expect(response.status).toBe(503);
    expect((await response.json()).error).toContain('familiajoserene@gmail.com');
    expect(send).not.toHaveBeenCalled();
  });
  it('escapes markup in the message and sends only once', async () => {
    vi.stubEnv('RESEND_API_KEY', 'test-key');
    send.mockResolvedValue({ data: { id: 'test-id' }, error: null });
    const response = await submit({ ...valid, message: '<script>alert("hello")</script>\nTexto' });
    expect(response.status).toBe(200);
    expect(send).toHaveBeenCalledTimes(1);
    expect(send.mock.calls[0][0].html).toContain('&lt;script&gt;');
    expect(send.mock.calls[0][0].html).not.toContain('<script>');
    expect(escapeHtml(`&<>"'`)).toBe('&amp;&lt;&gt;&quot;&#39;');
  });
});
