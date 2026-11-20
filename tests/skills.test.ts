import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { skillsContent } from '../src/data/skills';
import { getTechLogo } from '../src/utils/techLogos';

describe('Skill badges', () => {
  it('provides a logo for every technology in both languages', () => {
    for (const lang of ['es', 'en'] as const) {
      for (const group of skillsContent[lang]) {
        for (const skill of group.items) {
          const logo = getTechLogo(skill.icon);
          expect(logo, `${lang}: ${skill.name}`).toBeDefined();
          if (logo?.single?.startsWith('/icons/')) {
            expect(existsSync(resolve('public', logo.single.slice(1)))).toBe(true);
          }
        }
      }
    }
  });
  it('keeps translated groups consistent and distinguishes cloud study', () => {
    expect(skillsContent.es.flatMap(group => group.items)).toEqual(skillsContent.en.flatMap(group => group.items));
    expect(skillsContent.es.find(group => group.items.some(skill => skill.icon === 'aws'))?.practice).toBeTruthy();
  });
});
