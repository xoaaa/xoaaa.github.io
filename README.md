[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/_7FDTvqi)

# Portfolio Annisa Zahra Fitria

## Struktur file

- `index.html` : isi halaman (profil, about, pengalaman)
- `style.css` : tampilan (tema hijau muda, pink muda, kuning muda)
- `projects.js` : **daftar project** (di sini tempat menambah project)
- `script.js` : logika filter kategori, jendela detail project, dan viewer foto
- `Ara.jpg` : foto profil (taruh di folder yang sama dengan `index.html`)
- `images/projects/<id-project>/` : foto untuk tiap project

## Menambah project baru

1. Buka `projects.js`, salin satu blok `{ ... }`, tempel di bawahnya (jangan lupa koma), lalu ubah isinya.
2. Buat folder `images/projects/<id-project>/` (nama folder = `id` project).
3. Taruh foto di folder itu:
   - `cover.jpg` : gambar sampul di daftar project (disarankan rasio 4:3)
   - `1.jpg`, `2.jpg`, `3.jpg`, ... : foto scene di halaman detail (portrait atau landscape bebas)
4. Tulis path foto di field `cover` dan `screenshots`.

Kategori baru otomatis muncul sebagai tombol filter. Foto yang belum ada menampilkan kotak placeholder, jadi website tidak rusak.
