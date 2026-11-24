// Renders poster.html (1024x1024 newspaper front page) to entry.png.
// Uses the Playwright Chromium bundled with the shot tool; the page is a
// local file, so no network is needed. Run from the repo root: node render.mjs
import { chromium } from '/home/hatch/.shot-tool/node_modules/playwright/index.mjs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto('file://' + path.join(here, 'poster.html'));
await page.waitForTimeout(500);
await page.screenshot({
  path: path.join(here, 'entry.png'),
  clip: { x: 0, y: 0, width: 1024, height: 1024 },
});
await browser.close();
console.log('wrote entry.png');
