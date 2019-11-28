

# Objects

Seperti yang kita ketahui dari bab <info: types>, ada tujuh tipe data dalam JavaScript. Enam dari mereka disebut "primitif", karena nilainya hanya berisi satu hal (baik itu string atau angka atau apa pun).

Sebaliknya, objek digunakan untuk menyimpan koleksi kunci dari berbagai data dan entitas yang lebih kompleks. Dalam JavaScript, objek menembus hampir setiap aspek bahasa. Jadi kita harus memahaminya terlebih dahulu sebelum masuk secara mendalam ke tempat lain.

Objek dapat dibuat dengan tanda kurung `{...}` dengan daftar opsional * properties *. Properti adalah pasangan "key: value", di mana `key` adalah string (juga disebut" nama properti "), dan` value` dapat berupa apa saja.

Kita dapat membayangkan objek sebagai kabinet dengan file yang ditandatangani. Setiap bagian data disimpan dalam file dengan kunci. Sangat mudah untuk menemukan file dengan namanya atau menambah / menghapus file.


Objek kosong ("kabinet kosong") dapat dibuat menggunakan salah satu dari dua sintaks:

```js
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```


Biasanya, tanda kurung `{...}` digunakan. Deklarasi itu disebut * objek literal *.

## Literal dan properti

Kami dapat segera memasukkan beberapa properti ke pasangan `{...}` sebagai pasangan "key: value":

```js
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

Properti memiliki kunci (juga dikenal sebagai "nama" atau "pengidentifikasi") sebelum titik dua `": "` dan nilai di sebelah kanannya.

Di objek `pengguna`, ada dua properti:

1. Properti pertama memiliki nama `" name "` dan nilai `" John "`.
2. Yang kedua memiliki nama `" age "` dan nilai `30`.

Objek `user` yang dihasilkan dapat dibayangkan sebagai sebuah kabinet dengan dua file yang ditandatangani berlabel" nama "dan" usia ".

Kami dapat menambah, menghapus, dan membaca file darinya kapan saja.

Nilai properti dapat diakses menggunakan notasi titik:

```js
// get property values of the object:
console.log( user.name ); // John
console.log( user.age ); // 30
```

Nilai bisa dari jenis apa pun. Mari kita tambahkan yang boolean:

```js
user.isAdmin = true;
```


Untuk menghapus properti, kita dapat menggunakan operator `delete`:

```js
delete user.age;
```


Kita juga dapat menggunakan nama properti multi-kata, tetapi kemudian harus dikutip:

```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};
```



```js
let user = {
  name: "John",
  age: 30*!*,*/!*
}
```
Itu disebut koma "trailing" atau "hanging". Memudahkan untuk menambah / menghapus / memindahkan properti, karena semua baris menjadi sama.

## Kurung kotak

Untuk properti multi-kata, akses titik tidak berfungsi:

```js run
// this would give a syntax error
user.likes birds = true
```

Itu karena titik memerlukan kunci untuk menjadi pengidentifikasi variabel yang valid. Yaitu: tidak ada ruang dan batasan lainnya.

Ada alternatif "notasi braket persegi" yang berfungsi dengan string apa pun:

```js run
let user = {};

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]); // true

// delete
delete user["likes birds"];
```

Sekarang semuanya baik-baik saja. Harap dicatat bahwa string di dalam tanda kurung dikutip dengan benar (semua jenis tanda kutip akan berlaku).

Kurung kotak juga menyediakan cara untuk mendapatkan nama properti sebagai hasil dari ekspresi apa pun - yang bertentangan dengan string literal - seperti dari variabel sebagai berikut:

```js
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;
```

Di sini, variabel `kunci` dapat dihitung pada saat run-time atau tergantung pada input pengguna. Dan kemudian kita menggunakannya untuk mengakses properti. Itu memberi kita banyak fleksibilitas.

Contohnya:

```js run
let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
console.log( user[key] ); // John (if enter "name")
```

Notasi titik tidak dapat digunakan dengan cara yang sama:

```js run
let user = {
  name: "John",
  age: 30
};

let key = "name";
console.log( user.key ) // undefined
```

### Properti yang dihitung

Kita bisa menggunakan tanda kurung siku dalam suatu objek literal. Itu disebut * properti yang dikomputasi *.

Contohnya:

```js run
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
*!*
  [fruit]: 5, // the name of the property is taken from the variable fruit
*/!*
};

console.log( bag.apple ); // 5 if fruit="apple"
```
Arti dari properti yang dihitung adalah sederhana: `[fruit]` berarti bahwa nama properti harus diambil dari `fruit`.

Jadi, jika pengunjung memasukkan `" apple "`, `bag` akan menjadi` {apple: 5} `.

Pada dasarnya, itu bekerja sama dengan:

```js run
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
```

...But looks nicer.

We can use more complex expressions inside square brackets:

```js
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

Kurung kotak jauh lebih kuat daripada notasi titik. Mereka mengizinkan nama dan variabel properti apa pun. Tetapi mereka juga lebih sulit untuk menulis.

Jadi sebagian besar waktu, ketika nama properti diketahui dan sederhana, titik digunakan. Dan jika kita membutuhkan sesuatu yang lebih kompleks, maka kita beralih ke tanda kurung.



## Singkatan nilai properti

Dalam kode nyata kita sering menggunakan variabel yang ada sebagai nilai untuk nama properti.

Contohnya:

```js run
function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...other properties
  };
}

let user = makeUser("John", 30);
console.log(user.name); // John
```

Dalam contoh di atas, properti memiliki nama yang sama dengan variabel. Kasus penggunaan membuat properti dari variabel adalah sangat umum, bahwa ada singkatan khusus * nilai properti * untuk membuatnya lebih pendek.

Alih-alih `name: name` kita bisa menulis` name`, seperti ini:

```js
function makeUser(name, age) {
*!*
  return {
    name, // same as name: name
    age   // same as age: age
    // ...
  };
*/!*
}
```

Kita dapat menggunakan properti normal dan singkatan dalam objek yang sama:

```js
let user = {
  name,  // same as name:name
  age: 30
};
```

## Pemeriksaan keberadaan

Fitur objek terkenal adalah memungkinkan untuk mengakses properti apa pun. Tidak akan ada kesalahan jika properti tidak ada! Mengakses properti yang tidak ada hanya mengembalikan `tidak terdefinisi`. Ini memberikan cara yang sangat umum untuk menguji apakah properti itu ada - untuk mendapatkannya dan membandingkan vs yang tidak ditentukan:

```js run
let user = {};

console.log( user.noSuchProperty === undefined ); // true means "no such property"
```

Juga ada operator khusus "" in "` untuk memeriksa keberadaan properti.

Sintaksnya adalah:
```js
"key" in object
```

contoh

```js run
let user = { name: "John", age: 30 };

console.log( "age" in user ); // true, user.age exists
console.log( "blabla" in user ); // false, user.blabla doesn't exist
```

Harap dicatat bahwa di sisi kiri `in` harus ada * nama properti *. Itu biasanya string yang dikutip.

Jika kita menghilangkan tanda kutip, itu berarti variabel yang berisi nama sebenarnya akan diuji. Contohnya:

```js run
let user = { age: 30 };

let key = "age";
console.log( *!*key*/!* in user ); // true, takes the name from key and checks for such property
```

````smart header="Using \"in\" for properties that store `undefined`"
Usually, the strict comparison `"=== undefined"` check the property existance just fine. But there's a special case when it fails, but `"in"` works correctly.

It's when an object property exists, but stores `undefined`:

```js run
let obj = {
  test: undefined
};

console.log( obj.test ); // it's undefined, so - no such property?

console.log( "test" in obj ); // true, the property does exist!
```

Dalam kode di atas, properti `obj.test` secara teknis ada. Jadi operator `in` bekerja dengan benar.

Situasi seperti ini jarang terjadi, karena `tidak terdefinisi` biasanya tidak ditugaskan. Kami kebanyakan menggunakan `null` untuk nilai" tidak dikenal "atau" kosong ". Jadi operator `in` adalah tamu eksotis dalam kode.


```js run
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

*!*
// non-integer properties are listed in the creation order
*/!*
for (let prop in user) {
  console.log( prop ); // name, surname, age
}
```

Jadi, untuk memperbaiki masalah dengan kode-kode telepon, kita dapat "menipu" dengan membuat kode-kode itu bukan bilangan bulat. Menambahkan tanda tambah "" + "` sebelum masing-masing kode cukup.

Seperti ini:

```js run
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  console.log( +code ); // 49, 41, 44, 1
}
```

Sekarang berfungsi sebagaimana dimaksud.

## Menyalin dengan referensi

Salah satu perbedaan mendasar objek vs primitif adalah bahwa mereka disimpan dan disalin "dengan referensi".

Nilai primitif: string, angka, boolean - ditugaskan / disalin "sebagai nilai keseluruhan".

Contohnya:

```js
let message = "Hello!";
let phrase = message;
```

Akibatnya kami memiliki dua variabel independen, masing-masing menyimpan string `" Hello! "`.

Objek tidak seperti itu.

** Variabel tidak menyimpan objek itu sendiri, tetapi "alamatnya dalam memori", dengan kata lain "referensi" untuk itu. **

Inilah gambar untuk objek:

```js
let user = {
  name: "John"
};
```

Di sini, objek disimpan di suatu tempat dalam memori. Dan variabel `user` memiliki" referensi "untuknya.

** Ketika variabel objek disalin - referensi disalin, objek tidak digandakan. **

Jika kita membayangkan objek sebagai kabinet, maka variabel adalah kunci untuk itu. Menyalin suatu variabel menduplikasi kunci, tetapi bukan kabinet itu sendiri.

Contohnya:

```js no-beautify
let user = { name: "John" };

let admin = user; // copy the reference
```

Nkarena kami memiliki dua variabel, masing-masing dengan referensi ke objek yang sama:

Kita dapat menggunakan variabel apa saja untuk mengakses kabinet dan mengubah isinya:

```js run
let user = { name: 'John' };

let admin = user;

*!*
admin.name = 'Pete'; // changed by the "admin" reference
*/!*

console.log(*!*user.name*/!*); // 'Pete', changes are seen from the "user" reference
```
Contoh di atas menunjukkan bahwa hanya ada satu objek. Seolah kami memiliki kabinet dengan dua kunci dan menggunakan salah satunya (`admin`) untuk masuk ke dalamnya. Kemudian, jika nanti kita menggunakan kunci lain (`pengguna`) kita akan melihat perubahan.

### Perbandingan dengan referensi

Operator kesetaraan `==` dan kesetaraan ketat `===` untuk objek bekerja persis sama.

** Dua objek sama hanya jika mereka adalah objek yang sama. **

Misalnya, jika dua variabel mereferensikan objek yang sama, mereka sama:

```js run
let a = {};
let b = a; // copy the reference

console.log( a == b ); // true, both variables reference the same object
console.log( a === b ); // true
```

Dan di sini dua objek independen tidak sama, meskipun keduanya kosong:

```js run
let a = {};
let b = {}; // two independent objects

console.log( a == b ); // false
```

Untuk perbandingan seperti `obj1> obj2` atau untuk perbandingan terhadap primitif` obj == 5`, objek dikonversi menjadi primitif. Kami akan mempelajari bagaimana konversi objek bekerja segera, tetapi untuk mengatakan yang sebenarnya, perbandingan seperti itu sangat jarang dan biasanya merupakan hasil dari kesalahan pengkodean.

### Objek Const

Objek yang dinyatakan sebagai `const` * dapat * diubah.

Contohnya:

```js run
const user = {
  name: "John"
};

*!*
user.age = 25; // (*)
*/!*

console.log(user.age); // 25
```

Tampaknya garis `(*)` akan menyebabkan kesalahan, tetapi tidak, sama sekali tidak ada masalah. Itu karena `const` hanya memperbaiki nilai` user` itu sendiri. Dan di sini `user` menyimpan referensi ke objek yang sama sepanjang waktu. Baris `(*)` masuk * di dalam * objek, tidak menetapkan ulang `pengguna`.

`Const` akan memberikan kesalahan jika kita mencoba mengatur` user` ke sesuatu yang lain, misalnya:


```js run
const user = {
  name: "John"
};

*!*
// Error (can't reassign user)
*/!*
user = {
  name: "Pete"
};
```

... Tetapi bagaimana jika kita ingin membuat properti objek konstan? Sehingga `user.age = 25` akan memberikan kesalahan. Itu mungkin juga. Kami akan membahasnya di bab <info: deskriptor-properti>.

## Kloning dan penggabungan, Object.assign

Jadi, menyalin variabel objek membuat satu referensi lagi ke objek yang sama.

Tetapi bagaimana jika kita perlu menduplikasi suatu objek? Buat salinan independen, klon?

Itu juga bisa dilakukan, tetapi sedikit lebih sulit, karena tidak ada metode bawaan untuk itu dalam JavaScript. Sebenarnya, itu jarang dibutuhkan. Menyalin dengan referensi baik sebagian besar waktu.

Tetapi jika kita benar-benar menginginkannya, maka kita perlu membuat objek baru dan meniru struktur yang sudah ada dengan mengulangi propertinya dan menyalinnya pada tingkat primitif.

Seperti ini:

```js run
let user = {
  name: "John",
  age: 30
};

*!*
let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
*/!*

// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it

console.log( user.name ); // still John in the original object
```

Kita juga dapat menggunakan metode [Object.assign] (mdn: js / Object / assign) untuk itu.

Sintaksnya adalah:

```js
Object.assign(dest, [src1, src2, src3...])
```

- Argumen `dest`, dan` src1, ..., srcN` (dapat sebanyak yang diperlukan) adalah objek.
- Ini menyalin properti dari semua objek `src1, ..., srcN` ke` dest`. Dengan kata lain, properti dari semua argumen mulai dari ke-2 disalin ke ke-1. Kemudian ia mengembalikan `dest`.

Sebagai contoh, kita dapat menggunakannya untuk menggabungkan beberapa objek menjadi satu:

```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

*!*
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
*/!*

// now user = { name: "John", canView: true, canEdit: true }
```

Jika objek penerima (`pengguna`) sudah memiliki properti bernama yang sama, itu akan ditimpa:

```js
let user = { name: "John" };

// overwrite name, add isAdmin
Object.assign(user, { name: "Pete", isAdmin: true });

// now user = { name: "Pete", isAdmin: true }
```

Kita juga bisa menggunakan `Object.assign` untuk mengganti loop untuk kloning sederhana:

```js
let user = {
  name: "John",
  age: 30
};

*!*
let clone = Object.assign({}, user);
*/!*
```

Ini menyalin semua properti `user` ke objek kosong dan mengembalikannya. Sebenarnya sama dengan loop, tetapi lebih pendek.

Sampai sekarang kita mengasumsikan bahwa semua properti `pengguna` adalah primitif. Tetapi properti bisa menjadi referensi ke objek lain. Apa yang harus dilakukan dengan mereka?

Seperti ini:
```js run
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

console.log( user.sizes.height ); // 182
```

Sekarang tidak cukup untuk menyalin `clone.sizes = user.sizes`, karena` user.sizes` adalah sebuah objek, itu akan disalin dengan referensi. Jadi `clone` dan` user` akan berbagi ukuran yang sama:

Seperti ini:

```js run
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

console.log( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
console.log(clone.sizes.width); // 51, see the result from the other one
```
Untuk memperbaikinya, kita harus menggunakan loop kloning yang memeriksa setiap nilai `user [key]` dan, jika itu adalah objek, maka replikasi strukturnya juga. Itu disebut "kloning dalam".

Ada algoritma standar untuk kloning mendalam yang menangani kasus di atas dan kasus yang lebih kompleks, yang disebut [Algoritma kloning terstruktur] (https://html.spec.whatwg.org/multipage/structured-data.html#safe-passing-of -struktur-data). Agar tidak menemukan kembali roda, kita dapat menggunakan implementasi yang berfungsi dari pustaka JavaScript [lodash] (https://lodash.com), metode ini disebut [_.cloneDeep (obj)] (https: // lodash.com/docs#cloneDeep).



## Ringkasan

Objek adalah array asosiatif dengan beberapa fitur khusus.

Mereka menyimpan properti (pasangan nilai kunci), di mana:
- Kunci properti harus berupa string atau simbol (biasanya string).
- Nilai bisa dari jenis apa pun.

Untuk mengakses properti, kita dapat menggunakan:
- Notasi titik: `obj.property`.
- Notasi kurung siku `obj [" properti "]`. Kurung kotak memungkinkan untuk mengambil kunci dari variabel, seperti `obj [varWithKey]`.

Operator tambahan:
- Untuk menghapus properti: `delete obj.prop`.
- Untuk memeriksa apakah ada properti dengan kunci yang diberikan: `" key "di obj`.
- Untuk beralih di atas objek: loop `for (let key in obj)`.

Objek ditugaskan dan disalin dengan referensi. Dengan kata lain, variabel menyimpan bukan "nilai objek", tetapi "referensi" (alamat dalam memori) untuk nilai tersebut. Jadi, menyalin variabel seperti itu atau meneruskannya sebagai argumen fungsi menyalin referensi itu, bukan objek. Semua operasi melalui referensi yang disalin (seperti menambah / menghapus properti) dilakukan pada objek tunggal yang sama.

Untuk membuat "salinan asli" (klon) kita dapat menggunakan `Object.assign` atau [_.cloneDeep (obj)] (https://lodash.com/docs#cloneDeep).

Apa yang telah kita pelajari dalam bab ini disebut "objek biasa", atau hanya `Objek`.

Ada banyak jenis objek lain dalam JavaScript:

- `Array` untuk menyimpan koleksi data yang dipesan,
- `Date` untuk menyimpan informasi tentang tanggal dan waktu,
- `Kesalahan` untuk menyimpan informasi tentang kesalahan.
- ...Dan seterusnya.

Mereka memiliki fitur khusus yang akan kami pelajari nanti. Terkadang orang mengatakan sesuatu seperti "Array type" atau "Date type", tetapi secara formal mereka bukan tipe milik mereka sendiri, tetapi milik satu tipe data "objek". Dan mereka memperluasnya dengan berbagai cara.

Objek dalam JavaScript sangat kuat. Di sini kita baru saja menggaruk permukaan topik yang sangat besar. Kami akan bekerja erat dengan objek dan belajar lebih banyak tentang mereka di bagian selanjutnya dari tutorial.