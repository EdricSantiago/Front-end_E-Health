"use client";
/** Handler translation for inline onclick actions from the original HTML files. */
export function handleLegacyAction(expression: string) {
  const match = expression.match(/^([a-zA-Z][a-zA-Z0-9_]*)\((.*)\)$/);
  if (!match) return;
  const operation = match[1];
  const arg = match[2].trim().replace(/^["']|["']$/g,'');
  const enc = encodeURIComponent(arg);
  switch(operation) {
    case 'goBack': {const from = sessionStorage.getItem('bmi_origin'); if(from) window.location.assign(from); else window.history.back(); break;}
    case 'goToSection': document.getElementById(arg)?.scrollIntoView({behavior:'smooth'}); break;
    case 'goToShop': case 'openAnimalProduct': window.location.assign('/pages/tokopage'); break;
    case 'goToInformation': window.location.assign('/pages/informasi_kulitpage'); break;
    case 'openAnimalInfo': window.location.assign('/pages/informasi_hewanpage'); break;
    case 'openDietInfo': window.location.assign('/pages/informasi_gizipage'); break;
    case 'openAnimalChat': window.location.assign(`/pages/chat_hewanpage${arg ? '?doctor='+enc : ''}`); break;
    case 'openDietChat': window.location.assign(`/pages/chat_gizipage${arg ? '?doctor='+enc : ''}`); break;
    case 'openChat': window.location.assign(`/pages/chat_dokterpage?doctor=${enc}`); break;
    case 'showProblem': window.alert(`Kamu memilih masalah kulit: ${arg}`); break;
    default: console.warn('Tombol belum dikenali:', operation);
  }
}
