# Arrays

Objek memungkinkan Anda untuk menyimpan koleksi nilai kunci.

Tetapi cukup sering kita menemukan bahwa kita memerlukan * koleksi tertata *, di mana kita memiliki elemen ke-1, ke-2, ke-3 dan seterusnya. Sebagai contoh, kita memerlukannya untuk menyimpan daftar sesuatu: pengguna, barang, elemen HTML dll.

Tidak nyaman menggunakan objek di sini, karena tidak menyediakan metode untuk mengelola urutan elemen. Kami tidak dapat menyisipkan properti baru "di antara" yang sudah ada. Objek tidak dimaksudkan untuk penggunaan seperti itu.

Ada struktur data khusus bernama `Array`, untuk menyimpan koleksi yang dipesan.

## Deklarasi

Ada dua sintaks untuk membuat array kosong:

```js
let arr = new Array();
let arr = [];
```

Hampir setiap saat, sintaks kedua sering digunakan. kita dapat menyediakan elemen awal dalam tanda kurung

```js
let buah = ["Apple", "Orange", "Plum"];
```

Array elements are numbered, starting with zero.

We can get an element by its number in square brackets:

```js run
let buah = ["Apple", "Orange", "Plum"];

console.log( buah[0] ); // Apple
console.log( buah[1] ); // Orange
console.log( buah[2] ); // Plum
```

Kami dapat mengganti elemennya dengan cara

```js
buah[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
```

... Atau tambahkan yang baru ke array:

```js
buah[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
```
Jumlah total elemen dalam array adalah dengan menggunakan `length`

```js run
let buah = ["Apple", "Orange", "Plum"];

console.log( buah.length ); // 3
```

Kita juga bisa menggunakan `logger` untuk menampilkan isi array.

```js run
let buah = ["Apple", "Orange", "Plum"];

console.log( buah ); // Apple,Orange,Plum
```

Array dapat menyimpan elemen jenis apa pun.


```js run no-beautify
// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// dapatkan objek di indeks 1 dan kemudian tunjukkan namanya
console.log( arr[1].name ); // John

// dapatkan fungsi di indeks 3 dan jalankan
arr[3](); // hello
```


````
Array, seperti halnya objek, dapat diakhiri dengan koma:
```js
let buah = [
  "Apple",
  "Orange",
  "Plum"*!*,*/!*
];
```

Gaya "trailing koma" memudahkan untuk menyisipkan / menghapus item, karena semua baris menjadi sama.
````


## Methods pop/push, shift/unshift

A [queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:

- `push` appends an element to the end.
- `shift` get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.


Array mendukung kedua operasi.

Dalam praktiknya kita sangat membutuhkannya. Misalnya, antrian pesan yang perlu ditampilkan di layar.

Ada lagi use case untuk array - struktur data bernama [stack] (https://en.wikipedia.org/wiki/Stack_ (abstract_data_type)).

Ini mendukung dua operasi:

- `push` menambahkan elemen ke ujung.
- `pop` mengambil elemen dari akhir.

Jadi elemen baru ditambahkan atau diambil selalu dari "akhir".

Tumpukan biasanya diilustrasikan sebagai paket kartu: kartu baru ditambahkan ke atas atau diambil dari atas:


Untuk tumpukan, item push terbaru diterima terlebih dahulu, itu juga disebut prinsip LIFO (Last-In-First-Out). Untuk antrian, kami memiliki FIFO (First-In-First-Out).

Array dalam JavaScript dapat berfungsi baik sebagai antrian dan sebagai tumpukan. Mereka memungkinkan Anda untuk menambah / menghapus elemen ke / dari awal atau akhir.

Dalam ilmu komputer, struktur data yang memungkinkannya disebut [deque] (https://en.wikipedia.org/wiki/Double-ended_queue).
**Methods that work with the end of the array:**

`pop`
: Ekstrak elemen terakhir dari array dan mengembalikannya:

    ```js run
    let buah = ["Apple", "Orange", "Pear"];

    console.log( buah.pop() ); // remove "Pear" and console.log it

    console.log( buah ); // Apple, Orange
    ```

`push`
: Append the element to the end of the array:

    ```js run
    let buah = ["Apple", "Orange"];

    buah.push("Pear");

    console.log( buah ); // Apple, Orange, Pear
    ```

    The call `buah.push(...)` is equal to `buah[buah.length] = ...`.

**Metode yang bekerja dengan array yang sudah berisi**

`shift`
: Ekstrak elemen pertama array dan mengembalikannya

    ```js
    let buah = ["Apple", "Orange", "Pear"];

    console.log( buah.shift() ); // remove Apple and console.log it

    console.log( buah ); // Orange, Pear
    ```

`unshift`
: Tambahkan elemen ke awal array

    ```js
    let buah = ["Orange", "Pear"];

    buah.unshift('Apple');

    console.log( buah ); // Apple, Orange, Pear
    ```

Metode `push` dan` unshift` dapat menambahkan beberapa elemen sekaligus:e:

```js run
let buah = ["Apple"];

buah.push("Orange", "Peach");
buah.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log( buah );
```

## Internals

Array adalah jenis objek khusus. Tanda kurung yang digunakan untuk mengakses properti `arr [0]` sebenarnya berasal dari sintaks objek. Itu pada dasarnya sama dengan `obj [key]`, di mana `arr` adalah objek, sementara angka digunakan sebagai kunci.

Mereka memperluas objek yang menyediakan metode khusus untuk bekerja dengan koleksi data yang diurutkan dan juga properti `length`. Tetapi pada intinya itu masih merupakan objek.

Ingat, hanya ada 7 tipe dasar dalam JavaScript. Array adalah objek dan dengan demikian berperilaku seperti objek.

Misalnya, itu disalin dengan referensi:

```js run
let buah = ["Banana"]

let arr = buah; // copy by reference (two variables reference the same array)

console.log( arr === buah ); // true

arr.push("Pear"); // modify the array by reference

console.log( buah ); // Banana, Pear - 2 items now
```

... Tetapi apa yang membuat array sangat spesial adalah representasi internal mereka. Mesin mencoba untuk menyimpan elemen-elemennya di area memori yang berdekatan, satu demi satu, seperti yang digambarkan pada ilustrasi dalam bab ini, dan ada optimasi lain juga, untuk membuat array bekerja sangat cepat.

Tetapi mereka semua rusak jika kita berhenti bekerja dengan array seperti dengan "koleksi yang dipesan" dan mulai bekerja dengan itu seolah-olah itu adalah objek biasa.

Misalnya, secara teknis kita bisa melakukan ini:

```js
let buah = []; // make an array

buah[99999] = 5; // assign a property with the index far greater than its length

buah.age = 25; // create a property with an arbitrary name
```
Itu mungkin, karena array adalah objek di pangkalan mereka. Kami dapat menambahkan properti apa pun kepada mereka.

Tetapi mesin akan melihat bahwa kita bekerja dengan array seperti dengan objek biasa. Optimalisasi khusus array tidak cocok untuk kasus seperti itu dan akan dimatikan, manfaatnya hilang.

Cara menyalahgunakan array:

- Tambahkan properti non-numerik seperti `arr.test = 5`.
- Buat lubang, seperti: tambahkan `arr [0]` dan kemudian `arr [1000]` (dan tidak ada di antara keduanya).
- Isi larik dengan urutan terbalik, seperti `arr [1000]`, `arr [999]` dan sebagainya.

Tolong pikirkan array sebagai struktur khusus untuk bekerja dengan * data yang dipesan *. Mereka menyediakan metode khusus untuk itu. Array disetel dengan hati-hati di dalam mesin JavaScript untuk bekerja dengan data berurutan yang berdekatan, silakan gunakan dengan cara ini. Dan jika Anda membutuhkan kunci sewenang-wenang, kemungkinan besar Anda benar-benar membutuhkan objek biasa `{}`.

## Performance

Metode `push / pop` berjalan cepat, sementara` shift / unshift` lambat.


Mengapa lebih cepat bekerja dengan akhir array daripada dengan awalnya? Mari kita lihat apa yang terjadi selama eksekusi:

```js
buah.shift(); // take 1 element from the start
```

Tidak cukup untuk mengambil dan menghapus elemen dengan angka `0`. Unsur-unsur lain perlu dinomori ulang juga.

Operasi `shift` harus melakukan 3 hal:

1. Hapus elemen dengan indeks `0`.
2. Pindahkan semua elemen ke kiri, beri nomor baru dari indeks `1` ke` 0`, dari `2` ke` 1` dan seterusnya.
3. Perbarui properti `length`.

**Semakin banyak elemen dalam array, semakin banyak waktu untuk memindahkannya, semakin banyak operasi dalam memori.**

Hal yang sama terjadi dengan `unshift`: untuk menambahkan elemen ke awal array, kita harus terlebih dahulu memindahkan elemen yang ada ke kanan, meningkatkan indeks mereka.

Dan apa dengan `push / pop`? Mereka tidak perlu memindahkan apa pun. Untuk mengekstrak elemen dari akhir, metode `pop` membersihkan indeks dan mempersingkat` length`.

Tindakan untuk operasi `pop`:

```js
buah.pop(); // take 1 element from the end
```


**Metode `pop` tidak perlu memindahkan apa pun, karena elemen lain menyimpan indeksnya. Itu sebabnya sangat cepat.**

Hal serupa dengan metode `push`.

## Loops

Salah satu cara tertua untuk menjalankan item di array adalah dengan loop for indexes `for`

```js run
let arr = ["Apple", "Orange", "Pear"];

*!*
for (let i = 0; i < arr.length; i++) {
*/!*
  console.log( arr[i] );
}
```

Tetapi untuk array ada bentuk lain dari loop, `for..of`:

```js run
let buah = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of buah) {
  console.log( fruit );
}
```

`For..of` tidak memberikan akses ke jumlah elemen saat ini, hanya nilainya, tetapi dalam kebanyakan kasus itu sudah cukup. Dan itu lebih pendek.

Secara teknis, karena array adalah objek, dimungkinkan juga untuk menggunakan `for..in`:

```js run
let arr = ["Apple", "Orange", "Pear"];

*!*
for (let key in arr) {
*/!*
  console.log( arr[key] ); // Apple, Orange, Pear
}
```

Tapi itu sebenarnya ide yang buruk. Ada potensi masalah dengan itu:

1. Loop `for..in` iterates over * all properties *, tidak hanya yang numerik.

     Ada yang disebut "array-like" objek di browser dan di lingkungan lain, yang * terlihat seperti array *. Yaitu, mereka memiliki properti `length` dan indeks, tetapi mereka mungkin juga memiliki properti dan metode non-numerik lainnya, yang biasanya tidak kita butuhkan. Loop `for..in` akan mencantumkannya. Jadi jika kita perlu bekerja dengan objek mirip array, maka properti "ekstra" ini bisa menjadi masalah.

2. Loop `for..in` dioptimalkan untuk objek umum, bukan array, dan karenanya 10-100 kali lebih lambat. Tentu saja, masih sangat cepat. Speedup mungkin hanya masalah dalam kemacetan. Tetapi kita tetap harus menyadari perbedaannya.

Secara umum, kita seharusnya tidak menggunakan `for..in` untuk array.


## A word about "length"

Properti `length` otomatis diperbarui ketika kami memodifikasi array. Lebih tepatnya, sebenarnya bukan hitungan nilai dalam array, tetapi indeks numerik terbesar ditambah satu.

Misalnya, satu elemen dengan indeks besar memberikan panjang lebar:

```js run
let buah = [];
buah[123] = "Apple";

console.log( buah.length ); // 124
```

Perhatikan bahwa kami biasanya tidak menggunakan array seperti itu.

Hal lain yang menarik tentang properti `length` adalah properti itu dapat ditulisi.

Jika kami meningkatkannya secara manual, tidak ada yang menarik terjadi. Tetapi jika kita menguranginya, array terpotong. Prosesnya tidak dapat dipulihkan,

```js run
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
console.log( arr ); // [1, 2]

arr.length = 5; // return length back
console.log( arr[3] ); // undefined: the values do not return
```

Jadi, cara paling sederhana untuk menghapus array adalah: `arr.length = 0;`.


## new Array() [#new-array]

Ada satu sintaks lagi untuk membuat array:

```js
let arr = *!*new Array*/!*("Apple", "Pear", "etc");
```

Ini jarang digunakan, karena tanda kurung siku `[]` lebih pendek. Juga ada fitur rumit dengan itu.

Jika `new Array` dipanggil dengan argumen tunggal yang merupakan angka, maka ia menciptakan array * tanpa item, tetapi dengan panjang yang diberikan *.

Mari kita lihat bagaimana seseorang dapat menembak dirinya sendiri di kaki:

```js run
let arr = new Array(2); // will it create an array of [2] ?

console.log( arr[0] ); // undefined! no elements.

console.log( arr.length ); // length 2
```

Dalam kode di atas, `Array baru (angka)` memiliki semua elemen `tidak terdefinisi`.

Untuk menghindari kejutan seperti itu, kami biasanya menggunakan tanda kurung siku, kecuali kami benar-benar tahu apa yang kami lakukan.

## Array multidimensi

Array dapat memiliki item yang juga array. Kita dapat menggunakannya untuk array multidimensi, misalnya untuk menyimpan matriks:

```js run
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, the central element
```

## toString

Array memiliki implementasi sendiri metode `toString` yang mengembalikan daftar elemen yang dipisahkan koma.


```js run
let arr = [1, 2, 3];

console.log( arr ); // 1,2,3
console.log( String(arr) === '1,2,3' ); // true
```

Coba juga ini

```js run
console.log( [] + 1 ); // "1"
console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); // "1,21"
```

Array tidak memiliki `Symbol.toPrimitive`, tidak juga` valueOf` yang layak, mereka hanya menerapkan konversi `toString`, jadi di sini` [] `menjadi string kosong,` [1] `menjadi` "1" `dan` [ 1,2] `menjadi` "1,2" `.

Ketika operator biner plus `" + "` menambahkan sesuatu ke string, itu juga mengubahnya menjadi string, sehingga langkah selanjutnya terlihat seperti ini:

```js run
console.log( "" + 1 ); // "1"
console.log( "1" + 1 ); // "11"
console.log( "1,2" + 1 ); // "1,21"
```

## Summary

Array adalah jenis objek khusus, cocok untuk menyimpan dan mengelola item data yang dipesan.

- The declaration:

    ```js
    // square brackets (usual)
    let arr = [item1, item2...];

    // new Array (exceptionally rare)
    let arr = new Array(item1, item2...);
    ```

Panggilan ke `Array baru (angka )` menciptakan sebuah array dengan panjang yang diberikan, tetapi tanpa elemen.

- Properti `length` adalah panjang array atau, tepatnya, indeks numerik terakhir ditambah satu. Ini disesuaikan secara otomatis dengan metode array.
- Jika kita memperpendek `length` secara manual, array terpotong.

Kita bisa menggunakan array sebagai deque dengan operasi berikut:

- `push (... items)` menambahkan `items` ke akhir.
- `pop ()` menghapus elemen dari ujung dan mengembalikannya.
- `shift ()` menghapus elemen dari awal dan mengembalikannya.
- `unshift (... items)` menambahkan `items` ke awal.

Untuk mengulang elemen-elemen array:
   - `for (let i = 0; i <arr.length; i ++)` - bekerja tercepat, kompatibel dengan browser lama.
   - `for (biarkan item arr)` - sintaks modern untuk item saja,
   - `for (let i in arr)` - tidak pernah digunakan.

Kami akan kembali ke array dan mempelajari lebih banyak metode untuk menambah, menghapus, mengekstrak elemen, dan mengurutkan array dalam bab <info: array-methods>.

