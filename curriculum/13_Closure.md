# Closure

JavaScript adalah bahasa yang sangat berorientasi fungsi. Ini memberi kita banyak kebebasan. Suatu fungsi dapat dibuat secara dinamis, disalin ke variabel lain atau diteruskan sebagai argumen ke fungsi lain dan dipanggil dari tempat yang sama sekali berbeda nanti.

Kita tahu bahwa suatu fungsi dapat mengakses variabel di luarnya, fitur ini cukup sering digunakan.

Tetapi apa yang terjadi ketika variabel luar berubah? Apakah suatu fungsi mendapatkan nilai terbaru atau yang ada saat fungsi itu dibuat?

Juga, apa yang terjadi ketika suatu fungsi berjalan ke tempat lain dalam kode dan dipanggil dari sana - apakah ia mendapatkan akses ke variabel luar tempat baru?

Bahasa yang berbeda berperilaku berbeda di sini, dan dalam bab ini kita membahas perilaku JavaScript.

Secara definisi, closures adalah inner function yang punya hak akses ke scope di dalam function di mana dia bernaung, dan scope-scope di function luar lain nya.
Oke, gampangnya untuk sekarang, mari kita refer closures sebagai function yang didefinisiin di dalam function lainnya. Meskipun, kompleks nya nggak sepenuhnya begitu, tapi karena udah hampir sepenuhnya benar, untuk sekarang kita anggap aja seperti itu, ya. Biar nggak keribetan.
Nah, closures ini bisa ngakses ke variabel-variabel yang ada di dalam scope yang berbeda:

* Variabel yang ada di dalam scope nya sendiri (ini udah jelas bisa lah ya);
* Variabel yang ada di dalam scope global;
* Dan variabel yang ada di dalam scope function di luar nya / parent function nya.

Dan hebatnya lagi, closures itu juga bisa ngakses ke:

* Parameter yang dia punya (ini udah jelas bisa lah, ya);
* Parameter yang ada di dalam function di luar nya / parent function nya.

```
function yourUmur() {
    const umur = 42

    function printUmur(){
        console.log(umur)
    }

    printUmur()
}

yourUmur()
```

Di atas, ada function namanya yourUmur(), dan kalo diliat di dalemnya lagi, ada function lagi tuh yang namanya printUmur(). Nah, printUmur() ini lah yang disebut closures. Dan dia nggak cuma sekedar sebagai inner function aja. Kayak yang saya sebutin di atas, dia bisa ngakses variabel dan parameter-parameter di mana-mana aja.
Dan, untuk contoh ini, kalo kamu run code ini, maka bakal keluar output — seperti yang kamu tebak — 76. Ini karena statement console.log nya si printUmur() berhasil ngakses variabel yang ada di outer scope nya — atau scope yang berada di luar lingkup nya.
Dan ini adalah konsep dasar dari closures. Doi bakal berhak ngakses variabel maupun parameter yang tersedia, bahkan yang ada di luar dari scope dia sendiri.
Oke oke, iya tau, contoh code di atas nggak ngebantu banget dalam memahami closures.
Yaudah, sekarang liat code yang ini.

```


Refrences
* https://medium.com/@rivayudha/closures-apaan-tuh-alasan-kamu-benci-javascript-8484a3437a40