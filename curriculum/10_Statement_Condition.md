# Operator bersyarat: 'if' , '?'

Terkadang, kita perlu melakukan tindakan berbeda berdasarkan kondisi yang berbeda.

Untuk melakukan itu, kita dapat menggunakan pernyataan `if` dan operator kondisional`? `, Yang juga disebut operator " tanda tanya ".

## Pernyataan "if"

Pernyataan `if (...)` mengevaluasi kondisi dalam tanda kurung dan, jika hasilnya `true`, mengeksekusi blok kode.

Sebagai contoh:

```js run
let year = prompt('Di tahun berapakah indonesia, merdeka?', '');

*!*
if (year == 1945) console.log( 'Betul !' );
*/!*
```

Dalam contoh di atas, syaratnya adalah pemeriksaan kesetaraan sederhana (`year == 1945`), tetapi ini bisa menjadi jauh lebih kompleks.

Jika kita ingin menjalankan lebih dari satu pernyataan, kita harus membungkus blok kode kita di dalam kurung kurawal:

```js
if (year == 1945) {
  console.log( "Betul !" );
  console.log( "Selamat kamu dapat sepeda !" );
}
```

Kami sarankan untuk membungkus blok kode Anda dengan kurung kurawal `{}` setiap kali Anda menggunakan pernyataan `if`, bahkan jika hanya ada satu pernyataan untuk dijalankan. Hal tersebut meningkatkan keterbacaan.

## Konversi Boolean

Pernyataan `if (...)` mengevaluasi ekspresi dalam tanda kurung dan mengubah hasilnya menjadi boolean.

- Angka `0`, string kosong` "" `,` null`, `undefined`, dan` NaN` semuanya menjadi `false`. Karena itu mereka disebut nilai "palsu".
- Nilai-nilai lain menjadi `benar`, sehingga disebut" benar ".

Jadi, kode dalam kondisi ini tidak akan pernah dijalankan:

```js
if (0) { // 0 is falsy
  ...
}
```

... dan di dalam kondisi ini - selalu akan:

```js
if (1) { // 1 is truthy
  ...
}
```

Kami juga dapat meneruskan nilai boolean yang sudah dievaluasi ke `if`, seperti ini:

```
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  ...
}
```
## Klausa "else"

Pernyataan `if` dapat berisi blok opsional "else". Itu dijalankan ketika kondisinya salah.

Sebagai contoh:

```js run
let year = prompt('Di tahun berapakah indonesia, merdeka?', '');

if (year == 1945) {
    console.log('Betul !')
} else{
    console.log('Kamu salah !')
}
```

## Beberapa syarat: "else if"

Terkadang, kami ingin menguji beberapa varian kondisi. Klausa `else if` memungkinkan kita melakukan itu.

Sebagai contoh:

```js run
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 1945) {
    console.log('Betul !')
} else if (year >= 1945){
    console.log('Kamu kejauhan !')
} else {
    console.log('OOpss')
}
```

Dalam kode di atas, JavaScript pertama memeriksa `year <1945`. Jika itu salah, maka masuk ke kondisi berikutnya `year> 2015`. Jika itu juga salah, ini menunjukkan `console.log` terakhir.

Mungkin ada lebih banyak `else if` yang diblokir. `Else` terakhir adalah opsional.

## Operator bersyarat '?'

Terkadang, kita perlu menetapkan variabel tergantung pada suatu kondisi.

Contohnya:

```js run no-beautify
let accessAllowed;
let age = prompt('Berapa umurmu?', '');

*!*
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
*/!*

console.log(accessAllowed);
```

Operator "kondisional" atau "tanda tanya" memungkinkan kami melakukan itu dengan cara yang lebih singkat dan sederhana.

Operator diwakili oleh tanda tanya `?`. Terkadang disebut "terner", karena operator memiliki tiga operan. Ini sebenarnya satu-satunya operator dalam JavaScript yang memiliki banyak.

Sintaksnya adalah:

```js
let result = condition ? value1 : value2;
```

`Condition` dievaluasi: jika itu benar maka` value1` dikembalikan, jika tidak - `value2`.

Sebagai contoh:

```js
let accessAllowed = (age > 18) ? true : false;
```

Secara teknis, kita bisa menghilangkan tanda kurung sekitar `age> 18`. Operator tanda tanya memiliki prioritas rendah, sehingga dijalankan setelah perbandingan `>`.

Contoh ini akan melakukan hal yang sama seperti sebelumnya:

```js
// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;
```

Tetapi tanda kurung membuat kode lebih mudah dibaca, jadi kami sarankan untuk menggunakannya.

```js
// the same
let accessAllowed = age > 18;
```

## Berganda '?'

Urutan operator tanda tanya `?` Dapat mengembalikan nilai yang bergantung pada lebih dari satu kondisi.

Contohnya:

```js run
let age = prompt('umur?', 18);

let message = (age < 3) ? 'Hi, bayi!' :
  (age < 18) ? 'Halo!' :
  (age < 100) ? 'Selamat!' :
  'Wow!';

console.log( message );
```

Mungkin sulit pada awalnya untuk memahami apa yang terjadi. Tetapi setelah melihat lebih dekat, kita dapat melihat bahwa itu hanya serangkaian tes biasa:

1. Tanda tanya pertama memeriksa apakah `umur <3`.
2. Jika benar - ia mengembalikan `'Hai, sayang!'`. Kalau tidak, ia melanjutkan ke ekspresi setelah titik dua '":"', memeriksa `umur <18`.
3. Jika itu benar - ia mengembalikan `'Hello!'`. Jika tidak, ia melanjutkan ke ekspresi setelah titik dua berikutnya '":"', memeriksa `age <100`.
4. Jika itu benar - ia mengembalikan '' Salam! '`. Kalau tidak, itu akan berlanjut ke ekspresi setelah titik dua terakhir '': '', mengembalikan `'Sungguh usia yang tidak biasa!'`.

Begini cara ini terlihat menggunakan `if..else`:

```js
if (age < 3) {
  message = 'Hi, bayi!';
} else if (age < 18) {
  message = 'Halo!';
} else if (age < 100) {
  message = 'Selamat!';
} else {
  message = 'Wow!';
}
```

## Penggunaan non-tradisional '?'

Terkadang tanda tanya `?` Digunakan sebagai pengganti `if`:

```js run no-beautify
let company = prompt('Nama perusahaan yang membuat javascript?', '');

*!*
(company == 'Netscape') ?
   console.log('Betul!') : console.log('Salah.');
*/!*
```

Bergantung pada kondisi `company == 'Netscape'`, ekspresi pertama atau kedua setelah`? `Dijalankan dan menampilkan console.log.

Kami tidak memberikan hasil ke variabel di sini. Sebagai gantinya, kami mengeksekusi kode yang berbeda tergantung pada kondisinya.

** Tidak disarankan untuk menggunakan operator tanda tanya dengan cara ini. **

Notasi lebih pendek dari pernyataan `if` yang setara, yang menarik bagi beberapa programmer. Tapi itu kurang bisa dibaca.

Berikut adalah kode yang sama menggunakan `if` untuk perbandingan
:

```js run no-beautify
let company = prompt('Nama perusahaan yang membuat javascript?', '');

*!*
if (company == 'Netscape') {
  console.log('Betul!');
} else {
  console.log('Salah.');
}
*/!*
```

Mata kita memindai kode secara vertikal. Blok kode yang menjangkau beberapa baris lebih mudah dipahami daripada set instruksi horizontal yang panjang.

Tujuan dari operator tanda tanya `?` Adalah untuk mengembalikan satu nilai atau lainnya tergantung pada kondisinya. Silakan gunakan untuk itu. Gunakan `if` saat Anda perlu menjalankan cabang kode yang berbeda.