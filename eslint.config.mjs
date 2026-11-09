import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
export default defineConfig([
 ...nextVitals,
 ...nextTs,
 // LegacyEffects relies on full document loads to reset classic-script globals.
 { rules: { '@next/next/no-html-link-for-pages': 'off' } },
 globalIgnores(['.next/**','out/**','build/**','next-env.d.ts']),
]);
