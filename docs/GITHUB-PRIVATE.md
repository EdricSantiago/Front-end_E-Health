# Cara buat repository GitHub private untuk tim

1. Sign in GitHub, buka https://github.com/new.
2. Nama: `heidoc-ehealth-nextjs`.
3. **Visibility: Private**.
4. Jangan auto-add README, karena README sudah tersedia dalam folder project.
5. Klik **Create repository**.
6. Di VS Code buka folder yang diekstrak, lalu:

```bash
git init
git branch -M main
git add .
git commit -m "Initial HeiDoc React Next.js without Prisma"
git remote add origin https://github.com/USERNAME/heidoc-ehealth-nextjs.git
git push -u origin main
```

7. Buka repository → Settings → Collaborators → Add people → undang 4 anggota. Mereka perlu accept invitation.
8. Setiap anggota `git clone URL_REPO`, buat branch `feature/...`, commit & push branch, buka Pull Request (PR) ke `main`.
9. **Jangan unggah** `node_modules`, `.next`, API token, atau `.env`.
10. Di GitHub, aktifkan protection/branch rules bila tersedia untuk mewajibkan PR ke `main`.

Saat ingin deploy prototype frontend tanpa Prisma, impor private repo dari Vercel dan jalankan standar Next.js. Ingat LocalStorage tersimpan per-browser dan bukan database online.
