"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { currentUser, logout } from '@/lib/browser-auth';

const TOP_MENU = [
 ['Beranda','/','/'],
 ['Kesehatan Kulit','/pages/kesehatan_kulitpage','kesehatan_kulit,informasi_kulit'],
 ['Kesehatan Hewan','/pages/kesehatan_hewanpage','kesehatan_hewan,informasi_hewan,chat_hewan'],
 ['Dokter','/pages/daftar_dokterpage','daftar_dokter,detail_dokter,jadwal_dokter,booking'],
 ['Toko','/pages/tokopage','toko'],
 ['Asuransi','/pages/asuransipage','asuransi'],
 ['Diet & Gizi','/pages/diet_gizipage','diet_gizi,informasi_gizi,chat_gizi'],
 ['BMI','/pages/bmipage','bmi,bmi_faq'],
] as const;
const BOTTOM_ON = new Set(['/', '/pages/layananpage','/pages/daftar_dokterpage','/pages/detail_dokterpage','/pages/jadwal_dokterpage','/pages/bookingpage','/pages/riwayatpage','/pages/profilepage','/pages/pengaturanpage']);

function TopNav({ pathname }: { pathname: string }) {
 return <header className="hd-topnav"><div className="hd-topnav-inner">
  <a href="/" className="hd-logo">HeiDoc</a>
  <nav className="hd-nav-links">
    {TOP_MENU.map(([label,link,routes]) => <a key={label} href={link} className={pathname === link || (routes !== '/' && routes.split(',').some(r => pathname.endsWith(`/${r}page`))) ? 'active' : ''}>{label}</a>)}
  </nav>
  <button type="button" className="hd-login-btn" onClick={() => { logout(); window.location.assign('/pages/loginpage'); }}>Keluar</button>
 </div></header>;
}

function BottomNav({ pathname }: { pathname: string }) {
 return <nav className="bottom-nav">
  <a href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}><i className="fa-solid fa-house"/><span>Beranda</span></a>
  <a href="/pages/riwayatpage" className={`nav-item ${pathname.endsWith('/riwayatpage') ? 'active' : ''}`}><i className="fa-solid fa-clock-rotate-left"/><span>Riwayat</span></a>
  <a href="/pages/daftar_dokterpage" className="nav-item-center"><i className="fa-solid fa-stethoscope"/></a>
  <a href="/pages/profilepage" className={`nav-item ${pathname.endsWith('/profilepage') ? 'active' : ''}`}><i className="fa-solid fa-user"/><span>Profil</span></a>
  <a href="/pages/pengaturanpage" className={`nav-item ${pathname.endsWith('/pengaturanpage') ? 'active' : ''}`}><i className="fa-solid fa-gear"/><span>Pengaturan</span></a>
 </nav>;
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
 const pathname = usePathname();
 const isLogin = pathname === '/pages/loginpage';
 const [authorized, setAuthorized] = useState<boolean | null>(null);
 useEffect(() => {
  if (isLogin) { setAuthorized(true); return; }
  // Compatibility with the original settings page logout handler.
  Object.assign(window, { heidocLogout: logout });
  if (!currentUser()) { window.location.replace('/pages/loginpage'); return; }
  setAuthorized(true);
 },[isLogin]);
 if (!isLogin && !authorized) return <div className="hd-auth-loading">Membuka HeiDoc...</div>;
 return <>{!isLogin && <TopNav pathname={pathname}/>} {children} {!isLogin && BOTTOM_ON.has(pathname) && <BottomNav pathname={pathname}/>}</>;
}
