# Globals

Objek global menyediakan variabel dan fungsi yang tersedia di mana saja. Secara default, yang dibangun ke dalam bahasa atau lingkungan.

Di browser itu bernama `window`, untuk Node.js itu adalah` global`, untuk lingkungan lain mungkin memiliki nama lain.

Baru-baru ini, `globalThis` telah ditambahkan ke bahasa, sebagai nama standar untuk objek global, yang harus didukung di semua lingkungan. Pada beberapa browser, yaitu non-Chromium Edge, `globalThis` belum didukung, tetapi dapat dengan mudah diisi polif.

Kami akan menggunakan `window` di sini, dengan asumsi bahwa lingkungan kami adalah browser. Jika skrip Anda dapat berjalan di lingkungan lain, lebih baik menggunakan `globalThis` sebagai gantinya.

Semua properti objek global dapat diakses secara langsung:

```js run
alert("Hello");
// is the same as
window.alert("Hello");
```

Di browser, fungsi global dan variabel yang dideklarasikan dengan `var` (bukan` let / const`!) Menjadi properti dari objek global:

```js run untrusted refresh
var gVar = 5;

alert(window.gVar); // 5 (became a property of the global object)
```

Tolong jangan mengandalkan itu! Perilaku ini ada karena alasan kompatibilitas. Skrip modern menggunakan [modul JavaScript] (info: modul) di mana hal seperti itu tidak terjadi.

Jika kita menggunakan `let` sebagai gantinya, hal seperti itu tidak akan terjadi:

```js run untrusted refresh
let gLet = 5;

alert(window.gLet); // undefined (doesn't become a property of the global object)
```

Jika suatu nilai sangat penting sehingga Anda ingin membuatnya tersedia secara global, tulis langsung sebagai properti:

```js run
*!*
// make current user information global, to let all scripts access it
window.currentUser = {
  name: "John"
};
*/!*

// somewhere else in code
alert(currentUser.name);  // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John
```

Yang mengatakan, menggunakan variabel global umumnya tidak disarankan. Seharusnya ada sesedikit mungkin variabel global. Desain kode di mana suatu fungsi mendapat "input" variabel dan menghasilkan "hasil" tertentu lebih jelas, lebih rentan terhadap kesalahan dan lebih mudah untuk diuji daripada jika menggunakan variabel luar atau global.

## Menggunakan untuk polyfill

Kami menggunakan objek global untuk menguji dukungan fitur bahasa modern.

Misalnya, uji apakah ada objek `Promise` bawaan (tidak ada di browser yang benar-benar tua):

```js run
if (!window.Promise) {
  alert("Your browser is really old!");
}
```

Jika tidak ada (misalnya, kami menggunakan browser lama), kami dapat membuat "polyfill": menambahkan fungsi yang tidak didukung oleh lingkungan, tetapi ada dalam standar modern.

```js run
if (!window.Promise) {
  window.Promise = ... // custom implementation of the modern language feature
}
```

## Ringkasan

- Objek global menyimpan variabel yang harus tersedia di mana saja.

     Itu termasuk built-in JavaScript, seperti `Array` dan nilai spesifik lingkungan, seperti` window.innerHeight` - tinggi jendela di browser.
- Objek global memiliki nama universal `globalThis`.

     ... Tetapi lebih sering disebut dengan nama khusus lingkungan "old-school", seperti `window` (browser) dan` global` (Node.js). Karena `globalThis` adalah proposal baru-baru ini, proposal ini tidak didukung di non-Chromium Edge (tetapi dapat diisi-polif).
- Kita harus menyimpan nilai dalam objek global hanya jika itu benar-benar global untuk proyek kita. Dan menjaga jumlah mereka minimum.
- Di dalam peramban, kecuali kami menggunakan [modul] (info: modul), fungsi global dan variabel yang dideklarasikan dengan `var` menjadi properti dari objek global.
- Untuk membuat kode kita kedepan-bukti dan lebih mudah dipahami, kita harus mengakses properti dari objek global secara langsung, sebagai `window.x`.


## Fakta Unik

```
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```

apakah outputnya?

```
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
```