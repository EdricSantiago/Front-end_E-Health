"use client";
import { useEffect } from 'react';

/**
 * Bridge sementara dari JavaScript asli HeiDoc ke halaman TSX.
 * Each URL is navigated with normal <a> tags (full document navigation).
 * Keep the scripts on document so React StrictMode effects don't double-run them.
 */
export function LegacyEffects({ scripts }: { scripts: string[] }) {
 useEffect(() => {
  const key = `heidoc-loaded:${window.location.pathname}`;
  const registry = window as Window & { __heidocLegacyLoaded?: Record<string, boolean> };
  registry.__heidocLegacyLoaded ??= {};
  if (registry.__heidocLegacyLoaded[key]) return;
  registry.__heidocLegacyLoaded[key] = true;

  const loadScript = (src: string) => new Promise<void>((resolve) => {
   const tag = document.createElement('script');
   tag.src = `/legacy/${src}`;
   tag.async = false;
   tag.onload = () => resolve();
   tag.onerror = () => {console.warn('Gagal memuat fitur demo',src); resolve();};
   document.body.appendChild(tag);
  });

  (async () => {
   for (const src of scripts) await loadScript(src);
   // Some original files register their interactions on DOMContentLoaded.
   document.dispatchEvent(new Event('DOMContentLoaded'));
  })();
  // No cleanup: classic scripts set up global handlers for this document lifetime.
  // The project uses regular anchors, so route changes reload the document.
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 return null;
}
