# Number
Semua angka dalam JavaScript disimpan dalam format 64-bit IEEE-754, juga dikenal sebagai "angka floating point presisi ganda".


## Beberapa Cara Penulisan

```
let miliar = 1000000000;
let jumlahBotol = 15000
let hargaAqua = 4.5
```

Namun dalam kehidupan nyata, kita biasanya menghindari menulis string panjang nol karena mudah salah ketik. Kami juga malas. Kami biasanya akan menulis sesuatu seperti "1 miliar" untuk satu miliar atau "7,3 miliar" untuk 7 miliar 300 juta. Hal yang sama berlaku untuk sebagian besar angka.

Dalam JavaScript, kami memperpendek angka dengan menambahkan huruf "e" ke nomor tersebut dan menentukan jumlah nolnya.

```
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

console.log( 7.3e9 );  // 7.3 billions (7,300,000,000)
```

Dengan kata lain, "e" mengalikan angka dengan 1 dengan angka nol yang diberikan.

Angka heksadesimal banyak digunakan dalam JavaScript untuk mewakili warna, menyandikan karakter, dan untuk banyak hal lainnya. Jadi secara alami, ada cara yang lebih singkat untuk menuliskannya: 0x dan kemudian angkanya.

Contohnya:

```
console.log( 0xff ); // 255
console.log( 0xFF ); // 255 (the same, case doesn't matter)
```


## Pembulatan
Salah satu operasi yang paling sering digunakan ketika bekerja dengan angka adalah pembulatan.

Ada beberapa fungsi bawaan untuk pembulatan:

* Math.floor
  Rounds down: 3.1 menjadi 3, dan -1.1 menjadi -2.

* Math.ceil
  Rounds up: 3.1 menjadi 4, dan -1.1 menjadi -1.

* Math.round
  Putaran ke bilangan bulat terdekat: 3.1 menjadi 3, 3.6 menjadi 4 dan -1.1 menjadi -1.

* Math.trunc (tidak didukung oleh Internet Explorer)
  Menghapus apa pun setelah titik desimal tanpa pembulatan: 3,1 menjadi 3, -1,1 menjadi -1.

selain itu ada Metode `toFixed (n)` membulatkan angka menjadi n digit setelah titik dan mengembalikan representasi string dari hasilnya.

## Pengecekan

* isNaN(value) mengubah argumennya menjadi angka dan kemudian mengujinya apakah dia number / tidak

```
console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true
```

* mengonversi argumennya ke angka dan mengembalikan true jika itu nomor biasa

```
console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, because a special value: NaN
console.log( isFinite(Infinity) );
```


### Refrensi
* https://javascript.info/number