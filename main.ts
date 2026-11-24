// Entry program for make.fun news-image-20261124.
// Places the pre-rendered front page into the grader's output folder.
// The PNG is produced inside this repo by render.mjs (Playwright, 1024x1024)
// from poster.html; this program only copies it, using the Node standard
// library, so its output is deterministic.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync('./entry.png', join(destination, 'entry.png'));
