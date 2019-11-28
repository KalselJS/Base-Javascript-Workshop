# Pengumpulan sampah

Manajemen memori dalam JavaScript dilakukan secara otomatis dan tidak terlihat oleh kami. Kami membuat primitif, objek, fungsi ... Semua yang membutuhkan memori.

Apa yang terjadi ketika sesuatu tidak diperlukan lagi? Bagaimana mesin JavaScript menemukannya dan membersihkannya?

## Reachability

Konsep utama manajemen memori dalam JavaScript adalah * reachability *.

Sederhananya, nilai-nilai "yang dapat dijangkau" adalah nilai-nilai yang dapat diakses atau digunakan entah bagaimana. Mereka dijamin untuk disimpan dalam memori.

1. Ada satu set dasar nilai yang dapat dijangkau secara inheren, yang tidak dapat dihapus karena alasan yang jelas.

    Contohnya:

    - Variabel dan parameter lokal dari fungsi saat ini.
    - Variabel dan parameter untuk fungsi lain pada rantai panggilan bersarang saat ini.
    - Variabel global.
    - (ada beberapa yang lain, yang internal juga)

    Nilai-nilai ini disebut * root *.

2. Nilai lain apa pun dianggap dapat dijangkau jika dapat dicapai dari root dengan referensi atau oleh rantai referensi.

    Misalnya, jika ada objek dalam variabel lokal, dan objek itu memiliki properti yang mereferensikan objek lain, objek itu dianggap dapat dijangkau. Dan yang direferensikan juga dapat dijangkau. Contoh detail untuk diikuti.

Ada proses latar belakang di mesin JavaScript yang disebut [pengumpul sampah] (https://en.wikipedia.org/wiki/Garbage_collection_ (computer_science)). Ini memonitor semua objek dan menghapus yang telah menjadi tidak terjangkau.

Hal utama yang perlu diketahui:

- Pengumpulan sampah dilakukan secara otomatis. Kita tidak bisa memaksakan atau mencegahnya.
- Objek disimpan dalam memori saat mereka dapat dijangkau.
- Dirujuk tidak sama dengan dapat dijangkau (dari root): satu pak objek yang saling terkait dapat menjadi tidak terjangkau secara keseluruhan.

Mesin modern menerapkan algoritma canggih pengumpulan sampah.

Sebuah buku umum "The Handbook Collection Handbook: Seni Manajemen Memori Otomatis" (R. Jones et al) mencakup beberapa di antaranya.

Jika Anda terbiasa dengan pemrograman tingkat rendah, informasi lebih rinci tentang pengumpul sampah V8 ada di artikel [Tur V8: Pengumpulan Sampah] (http://jayconrod.com/posts/55/a-tour-of- v8-pengumpulan sampah).

[V8 blog] (https://v8.dev/) juga menerbitkan artikel tentang perubahan dalam manajemen memori dari waktu ke waktu. Secara alami, untuk mempelajari pengumpulan sampah, Anda sebaiknya bersiap dengan mempelajari tentang V8 internal secara umum dan membaca blog [Vyacheslav Egorov] (http://mrale.ph) yang bekerja sebagai salah satu insinyur V8. Saya katakan: "V8", karena paling baik dibahas dengan artikel di internet. Untuk mesin lain, banyak pendekatan yang serupa, tetapi pengumpulan sampah berbeda dalam banyak aspek.

Pengetahuan mendalam tentang mesin bagus ketika Anda membutuhkan optimasi tingkat rendah. Akan lebih bijaksana untuk merencanakan itu sebagai langkah selanjutnya setelah Anda terbiasa dengan bahasa tersebut.


## Refrensi
* https://github.com/javascript-tutorial/en.javascript.info/blob/master/1-js/04-object-basics/02-garbage-collection/article.md