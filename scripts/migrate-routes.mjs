
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(import.meta.url);
const project = path.resolve(path.dirname(scriptPath), "..");
const appPages = path.join(project, "app", "pages");

const names = [
    "asuransi",
    "bmi",
    "bmi_faq",
    "booking",
    "chat_dokter",
    "chat_gizi",
    "chat_hewan",
    "daftar_dokter",
    "detail_dokter",
    "diet_gizi",
    "informasi_gizi",
    "informasi_hewan",
    "informasi_kulit",
    "jadwal_dokter",
    "kesehatan_hewan",
    "kesehatan_kulit",
    "layanan",
    "login",
    "pengaturan",
    "profile",
    "riwayat",
    "toko",
];

let renamed = 0;
let changed = 0;

// Mengubah nama folder route
for (const name of names) {
    const before = path.join(appPages, `${name}.html`);
    const after = path.join(appPages, `${name}page`);
    
    if (fs.existsSync(before) && fs.existsSync(after)) {
        throw new Error(
            `Folder lama dan baru sama-sama ada: ${name}`
        );
    }
    
    if (fs.existsSync(before)) {
        fs.renameSync(before, after);
        renamed++;
        
        console.log(`${name}.html -> ${name}page`);
    }
}

// Mengubah route index.html jika ada
const indexBefore = path.join(project, "app", "index.html");
const indexAfter = path.join(project, "app", "indexpage");

if (fs.existsSync(indexBefore) && !fs.existsSync(indexAfter)) {
    fs.renameSync(indexBefore, indexAfter);
    renamed++;
}

// Membuat daftar penggantian URL
const lookup = new Map(
    [...names, "index"].map((name) => [
        `${name}.html`,
        `${name}page`,
    ])
);

const pattern = new RegExp(
    [...lookup.keys()]
    .map((name) => name.replace(".", "\\."))
    .join("|"),
    "g"
);

// Folder yang akan diperiksa
const scanDirs = [
    "app",
    "components",
    "lib",
    "public/legacy/js",
    "docs",
];

const extensions = new Set([
    ".tsx",
    ".ts",
    ".js",
    ".mjs",
    ".md",
    ".json",
]);

function updateFiles(folder) {
    if (!fs.existsSync(folder)) return;
    
    for (const entry of fs.readdirSync(folder, {
        withFileTypes: true,
    })) {
        const full = path.join(folder, entry.name);
        
        if (entry.isDirectory()) {
            updateFiles(full);
            continue;
        }
        
        if (!extensions.has(path.extname(entry.name))) {
            continue;
        }
        
        if (full === scriptPath) {
            continue;
        }
        
        const original = fs.readFileSync(full, "utf8");
        
        let updated = original.replace(
            pattern,
            (match) => lookup.get(match)
        );
        
        // Untuk dynamic route di Navbar
        updated = updated.replaceAll(
            "`/${r}.html`",
            "`/${r}page`"
        );
        
        if (updated !== original) {
            fs.writeFileSync(full, updated, "utf8");
            changed++;
            
            console.log(`Updated: ${path.relative(project, full)}`);
        }
    }
}

// Menjalankan perubahan
for (const folder of scanDirs) {
    updateFiles(path.join(project, folder));
}

// Memperbarui README jika ada
const readme = path.join(project, "README.md");

if (fs.existsSync(readme)) {
    const original = fs.readFileSync(readme, "utf8");
    
    const updated = original.replace(
        pattern,
        (match) => lookup.get(match)
    );
    
    if (updated !== original) {
        fs.writeFileSync(readme, updated, "utf8");
        changed++;
    }
}

console.log("\nMigrasi route selesai!");
console.log(`Folder diubah: ${renamed}`);
console.log(`File diperbarui: ${changed}`);
console.log("Login: /pages/loginpage");
