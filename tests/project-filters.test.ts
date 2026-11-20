import { describe, expect, it } from 'vitest';
import { matchesProject, normalizeSearch } from '../src/scripts/project-filters';

describe('Project discovery', () => {
  it('finds accented words without requiring accents', () => {
    expect(normalizeSearch('  Automatización  ')).toBe('automatizacion');
    expect(matchesProject('Automatización con Python', ['Escritorio'], 'automatizacion python', 'all')).toBe(true);
  });
  it('combines the selected category with all search terms', () => {
    expect(matchesProject('Nexo Python SQLite', ['Escritorio'], 'python sqlite', 'escritorio')).toBe(true);
    expect(matchesProject('Nexo Python SQLite', ['Escritorio'], 'python', 'web')).toBe(false);
    expect(matchesProject('Nexo Python SQLite', ['Escritorio'], 'python react', 'all')).toBe(false);
  });
  it('matches exact tags rather than partial substrings', () => {
    expect(matchesProject('Web application', ['Web'], '', 'web')).toBe(true);
    expect(matchesProject('Web application', ['Web'], '', 'we')).toBe(false);
  });
});
