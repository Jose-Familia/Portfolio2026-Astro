import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { estimateReadingTime } from '../src/utils/readingTime';

const slugs = ['astro-react-hidratacion-selectiva', 'nestjs-modulos-limites-de-dominio', 'postgresql-inventario-concurrencia', 'docker-imagen-node-multietapa', 'kubernetes-probes-diseno-de-aplicaciones', 'aws-sqs-reintentos-idempotencia'];

describe('Technical articles', () => {
  it('includes complete articles with past dates, local covers and references', () => {
    const dates = new Set();
    for (const slug of slugs) {
      const text = readFileSync(resolve('src/content/blog', `${slug}.mdoc`), 'utf8');
      const date = text.match(/publishDate: "([^"]+)"/)?.[1];
      expect(date).toBeTruthy();
      expect(new Date(date!).getTime()).toBeLessThan(new Date('2026-11-20').getTime());
      dates.add(date);
      const body = text.split('---').slice(2).join('---');
      expect(body.split(/\s+/).length).toBeGreaterThan(400);
      expect(body).toContain('## Referencias');
      expect(existsSync(resolve('public/images/blog', `${slug}.svg`))).toBe(true);
    }
    expect(dates.size).toBe(slugs.length);
    expect(readdirSync('src/content/blog').filter(path => path.endsWith('.mdoc')).length).toBeGreaterThanOrEqual(8);
  });
  it('uses a stable reading time for the list and detail pages', () => {
    expect(estimateReadingTime('')).toBe(1);
    expect(estimateReadingTime('palabra '.repeat(440))).toBe(2);
    expect(estimateReadingTime('palabra '.repeat(441))).toBe(3);
  });
});
