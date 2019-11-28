# Sintaks dasar kelas

`` `quote author =" Wikipedia "
Dalam pemrograman berorientasi objek, * kelas * adalah program-kode-templat yang dapat dikembangkan untuk membuat objek, memberikan nilai awal untuk status (variabel anggota) dan implementasi perilaku (fungsi atau metode anggota).
`` `

Dalam praktiknya, kita sering perlu membuat banyak objek dengan jenis yang sama, seperti pengguna, atau barang atau apa pun.

Seperti yang sudah kita ketahui dari bab <info: constructor-new>, `new function` dapat membantu dengan itu.

Namun dalam JavaScript modern, ada konstruk "kelas" yang lebih canggih, yang memperkenalkan fitur-fitur baru yang berguna untuk pemrograman berorientasi objek.

## Sintaks "class"

Sintaks dasarnya adalah:

```js
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

Kemudian gunakan `new MyClass ()` untuk membuat objek baru dengan semua metode yang terdaftar.

Metode `constructor ()` dipanggil secara otomatis oleh `new`, sehingga kita dapat menginisialisasi objek di sana.

Sebagai contoh:

```js run
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// Usage:
let user = new User("John");
user.sayHi();
```

Ketika `Pengguna baru (" John ")` dipanggil:
1. Objek baru dibuat.
2. `constructor` berjalan dengan argumen yang diberikan dan memberikan` this.name` padanya.

... Kemudian kita dapat memanggil metode objek, seperti `user.sayHi ()`.


`` `warnahi header =" Tidak ada koma di antara metode kelas "
Jebakan umum untuk pengembang pemula adalah menempatkan koma antara metode kelas, yang akan menghasilkan kesalahan sintaksis.

Notasi di sini tidak harus disamakan dengan objek literal. Di dalam kelas, tidak ada koma yang diperlukan.
`` `

## Apa itu kelas?

Jadi, apa sebenarnya `kelas` itu? Itu bukan entitas tingkat bahasa yang sepenuhnya baru, seperti yang mungkin dipikirkan orang.

Mari kita mengungkap sihir apa pun dan melihat apa sebenarnya kelas itu. Itu akan membantu dalam memahami banyak aspek kompleks.

Dalam JavaScript, kelas adalah sejenis fungsi.

Di sini, lihat:

```js run
class User {
  constructor(name) { this.name = name; }
  sayHi() { console.log(this.name); }
}

// proof: User is a function
*!*
console.log(typeof User); // function
*/!*
```

Apa yang benar-benar dikerjakan oleh `class User {...}` adalah:

1. Membuat fungsi bernama `Pengguna`, yang menjadi hasil dari deklarasi kelas. Kode fungsi diambil dari metode `constructor` (diasumsikan kosong jika kita tidak menulis metode seperti itu).
2. Menyimpan metode kelas, seperti `sayHi`, dalam` User.prototype`.

Setelah objek `Pengguna baru` dibuat, ketika kita memanggil metodenya, itu diambil dari prototipe, seperti yang dijelaskan dalam bab <info: function-prototype>. Jadi objek memiliki akses ke metode kelas.

Kami dapat menggambarkan hasil deklarasi `Pengguna kelas` sebagai:

Berikut kode untuk mengintrospeksi:

```js run
class User {
  constructor(name) { this.name = name; }
  sayHi() { console.log(this.name); }
}

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // console.log(this.name);

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
```

## Bukan hanya pemanis

Kadang-kadang orang mengatakan bahwa `class` adalah" pemanis "(sintaksis yang dirancang untuk membuat hal-hal lebih mudah dibaca, tetapi tidak memperkenalkan sesuatu yang baru), karena kita sebenarnya dapat mendeklarasikan yang sama tanpa kata kunci` class` sama sekali:

```js run
// rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
  this.name = name;
}
// any function prototype has constructor property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function() {
  console.log(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();
```

Hasil definisi ini hampir sama. Jadi, memang ada alasan mengapa `class` dapat dianggap sebagai gula sintaksis untuk mendefinisikan konstruktor bersama dengan metode prototipe-nya.

Meski begitu, ada perbedaan penting.

1. Pertama, fungsi yang dibuat oleh `class` dilabeli oleh properti internal khusus` [[FunctionKind]]: "classConstructor" `. Jadi itu tidak sepenuhnya sama dengan membuatnya secara manual.

     Dan tidak seperti fungsi biasa, konstruktor kelas harus dipanggil dengan `baru`:

    ```js run
    class User {
      constructor() {}
    }

    console.log(typeof User); // function
    User(); // Error: Class constructor User cannot be invoked without 'new'
    ```

Juga, representasi string konstruktor kelas di sebagian besar mesin JavaScript dimulai dengan "class ..."

    ```js run
    class User {
      constructor() {}
    }

    console.log(User); // class User { ... }
    ```

2. Metode kelas tidak dapat dihitung.
     Definisi kelas menetapkan flag `enumerable` menjadi` false` untuk semua metode dalam `" prototype "`.

     Itu bagus, karena jika kita `for..in` atas objek, kita biasanya tidak ingin metode kelasnya.

3. Kelas selalu `gunakan ketat`.
     Semua kode di dalam konstruk kelas secara otomatis dalam mode ketat.

Selain itu, sintaks `class` membawa banyak fitur lain yang akan kami eksplorasi nanti.

## Ekspresi Kelas

Sama seperti fungsi, kelas dapat didefinisikan di dalam ekspresi lain, diedarkan, dikembalikan, ditugaskan, dll.

Berikut adalah contoh ekspresi kelas:

```js
let User = class {
  sayHi() {
    console.log("Hello");
  }
};
```

Mirip dengan Named Function Expressions, ekspresi kelas mungkin memiliki nama.

Jika ekspresi kelas memiliki nama, itu hanya terlihat di dalam kelas:

```js run
// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class *!*MyClass*/!* {
  sayHi() {
    console.log(MyClass); // MyClass name is visible only inside the class
  }
};

new User().sayHi(); // works, shows MyClass definition

console.log(MyClass); // error, MyClass name isn't visible outside of the class
```

Kami bahkan dapat membuat kelas secara dinamis "sesuai permintaan", seperti ini:

```js run
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      console.log(phrase);
    };
  };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello
```


## Getters / setters, singkatan lainnya

Sama seperti objek literal, kelas dapat mencakup getter / setter, properti yang dihitung dll.

Berikut ini contoh untuk `user.name` diimplementasikan menggunakan` get / set`:

```js run
class User {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

*!*
  get name() {
*/!*
    return this._name;
  }

*!*
  set name(value) {
*/!*
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");
console.log(user.name); // John

user = new User(""); // Name too short.
```

Deklarasi kelas membuat getter dan setter di `User.prototype`, seperti ini:

```js
Object.defineProperties(User.prototype, {
  name: {
    get() {
      return this._name
    },
    set(name) {
      // ...
    }
  }
});
```
Berikut ini contoh dengan nama properti yang dihitung dalam tanda kurung `[...]`:

```js run
class User {

*!*
  ['say' + 'Hi']() {
*/!*
    console.log("Hello");
  }

}

new User().sayHi();
```

## Class properties

```warn header="Old browsers may need a polyfill"
Class-level properties are a recent addition to the language.
```

Dalam contoh di atas, `Pengguna` hanya memiliki metode. Mari kita tambahkan properti:

```js run
class User {
*!*
  name = "Anonymous";
*/!*

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

new User().sayHi();

console.log(User.prototype.sayHi); // placed in User.prototype
console.log(User.prototype.name); // undefined, not placed in User.prototype
```

Properti `name` tidak ditempatkan ke` User.prototype`. Sebagai gantinya, ia dibuat oleh `baru` sebelum memanggil konstruktor, itu adalah properti dari objek itu sendiri.

## Ringkasan

Sintaks kelas dasar terlihat seperti ini:

```js
class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}
```

`MyClass` secara teknis adalah fungsi (fungsi yang kami sediakan sebagai` constructor`), sedangkan metode, getter dan setter ditulis ke `MyClass.prototype`.

