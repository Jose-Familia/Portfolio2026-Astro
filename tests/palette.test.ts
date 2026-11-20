import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
const css = readFileSync('src/styles/global.css','utf8');
const values = (block: string) => Object.fromEntries([...block.matchAll(/--(color-[a-z-]+):\s*(\d+) (\d+) (\d+);/g)].map(match => [match[1],match.slice(2).map(Number)]));
const luminance = (rgb: number[]) => rgb.map(value => { const c=value/255;return c<=.04045?c/12.92:((c+.055)/1.055)**2.4; }).reduce((sum,value,i)=>sum+value*[.2126,.7152,.0722][i],0);
const contrast = (a:number[],b:number[]) => { const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); };
describe('Palette contrast', () => {
  for(const theme of [':root','.dark']) {
    it(`keeps normal text readable on every ${theme} surface`, () => {
      const start=css.indexOf(theme+' {');
      const palette=values(css.slice(start,css.indexOf('\n  }',start)));
      for(const foreground of ['color-foreground','color-muted','color-subtle','color-accent-ink']) {
        for(const background of ['color-background','color-surface','color-surface-alt']) {
          expect(contrast(palette[foreground],palette[background]),`${theme}: ${foreground} on ${background}`).toBeGreaterThanOrEqual(4.5);
        }
      }
    });
  }
});
