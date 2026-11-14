# PHP Native

Template aplikasi PHP native tanpa framework yang menampilkan informasi konfigurasi PHP melalui `phpinfo()` di `index.php`. Halaman ini dapat mengungkap informasi sensitif server; batasi akses atau hapus sebelum digunakan di lingkungan publik.

## Persyaratan

- PHP untuk menjalankan aplikasi.
- [Node.js](https://nodejs.org/) dan [pnpm](https://pnpm.io/installation) untuk membuat arsip deployment.

## Pengembangan

```sh
php -S localhost:8080
```

Buka `http://localhost:8080/`. Hentikan server dengan `Ctrl+C`. Server bawaan PHP hanya untuk pengembangan.

## Membuat arsip deployment

```sh
pnpm install
pnpm run package
```

Arsip `app.zip` berisi `index.php` di direktori utama. Alternatifnya, setelah `pnpm install`, jalankan `make live` jika GNU Make tersedia. Ekstrak arsip ke document root server PHP. Jangan menyertakan rahasia dalam arsip; atur melalui lingkungan deployment.

## Penyimpanan di SewuCloud

Data di luar folder `upload` dapat hilang saat pod di-restart atau diganti. Simpan data yang perlu dipertahankan pada penyimpanan persisten sesuai konfigurasi SewuCloud dan lakukan pencadangan berkala.
