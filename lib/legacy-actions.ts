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
    case 'goToShop': case 'openAnimalProduct': window.location.assign('/pages/toko.html'); break;
    case 'goToInformation': window.location.assign('/pages/informasi_kulit.html'); break;
    case 'openAnimalInfo': window.location.assign('/pages/informasi_hewan.html'); break;
    case 'openDietInfo': window.location.assign('/pages/informasi_gizi.html'); break;
    case 'openAnimalChat': window.location.assign(`/pages/chat_hewan.html${arg ? '?doctor='+enc : ''}`); break;
    case 'openDietChat': window.location.assign(`/pages/chat_gizi.html${arg ? '?doctor='+enc : ''}`); break;
    case 'openChat': window.location.assign(`/pages/chat_dokter.html?doctor=${enc}`); break;
    case 'showProblem': window.alert(`Kamu memilih masalah kulit: ${arg}`); break;
    default: console.warn('Tombol belum dikenali:', operation);
  }
}
