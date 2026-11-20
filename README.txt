CORIOLIS FEEDER ACADEMY PWA v1.1
Schenck MULTICOR K50 · DISOCONT generasi lama · Pulverized coal

PEMBARUAN
- 10 ilustrasi teknis SVG, satu untuk setiap modul.
- Gambar responsif dan dapat diperbesar.
- Materi modul ditanam langsung di app.js agar tidak gagal saat index.html dibuka langsung.
- Kuis dan progress lokal tetap dipertahankan (kunci penyimpanan versi lama tetap sama).
- Cache service worker diperbarui untuk v1.1.

MENJALANKAN
1. Ekstrak ZIP.
2. Cara paling mudah: buka index.html di browser modern. Materi teks sudah tertanam di app.js; ilustrasi SVG dibaca dari folder illustrations.
3. Untuk fitur PWA/offline penuh, jalankan server lokal:
   Windows: buka terminal di folder hasil ekstrak, jalankan: python -m http.server 8000
   Lalu buka http://localhost:8000
4. Untuk instalasi PWA, gunakan localhost atau HTTPS lalu pilih Install PWA.

CATATAN TEKNIS
Seluruh diagram adalah ilustrasi prinsip kerja dan alur konseptual, bukan gambar fabrikasi atau wiring resmi Schenck. Susunan komponen, terminal, parameter DISOCONT, setpoint, batas operasi, dan prosedur kalibrasi harus diverifikasi dengan manual yang sesuai model, serial number, dan revisi unit.
