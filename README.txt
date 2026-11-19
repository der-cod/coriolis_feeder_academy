CORIOLIS FEEDER ACADEMY PWA v1.0

Isi:
- index.html: aplikasi
- styles.css: tampilan responsif
- app.js: navigasi, quiz, progress lokal, install prompt
- modules.json: 10 modul pembelajaran
- manifest.webmanifest: identitas PWA
- sw.js: service worker dan cache offline
- icons/: ikon aplikasi

Cara menjalankan:
1. Ekstrak ZIP.
2. Jalankan melalui web server lokal atau hosting HTTPS (PWA/service worker tidak aktif bila index.html dibuka langsung dengan file://).
3. Untuk uji lokal dengan Python: buka terminal di folder hasil ekstrak, lalu jalankan:
   python -m http.server 8000
4. Buka http://localhost:8000
5. Di Chrome/Edge, gunakan tombol Install PWA bila tersedia atau menu Install app.

Progress quiz disimpan pada localStorage browser/perangkat yang digunakan.
Aplikasi v1.0 tidak mengandung terminal wiring atau parameter DISOCONT yang belum diverifikasi.
