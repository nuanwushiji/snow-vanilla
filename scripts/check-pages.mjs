import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const references = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map(match => match[1]);
const localReferences = references.filter(reference => !/^(?:https?:|#|data:)/.test(reference));
const rootRelative = localReferences.filter(reference => reference.startsWith('/'));

if (rootRelative.length) {
  throw new Error(`Root-relative paths break under /snow-vanilla/: ${rootRelative.join(', ')}`);
}

const missing = localReferences
  .map(reference => reference.replace(/^\.\//, '').split(/[?#]/)[0])
  .filter(reference => reference && !existsSync(resolve(root, reference)));

if (missing.length) {
  throw new Error(`Missing local assets: ${missing.join(', ')}`);
}

console.log(`GitHub Pages path check passed (${localReferences.length} local assets).`);
