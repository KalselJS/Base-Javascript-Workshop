# Promise

Ada 5 metode statis di kelas `Promise`. Kami akan segera membahas kasus penggunaannya di sini.

## Promise.all

Katakanlah kita ingin menjalankan banyak Promise untuk dieksekusi secara paralel, dan menunggu sampai semuanya siap.

Misalnya, unduh beberapa URL secara paralel dan proses konten ketika semuanya selesai.

Untuk itulah `Promise.all` untuk.

Sintaksnya adalah:

```js
let promise = Promise.all([...promises...]);
```

`Promise.all` mengambil larik Promise (secara teknis bisa berupa apa saja yang dapat diubah, tetapi biasanya larik) dan mengembalikan Promise baru.

Promise baru terselesaikan ketika semua Promise yang tercantum diselesaikan dan berbagai hasil mereka menjadi hasilnya.

Misalnya, `Promise.all` di bawah diselesaikan setelah 3 detik, dan hasilnya adalah array` [1, 2, 3] `:

```js run
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(console.log); // 1,2,3 when promises are ready: each promise contributes an array member
```

Harap perhatikan bahwa urutan anggota array yang dihasilkan sama dengan yang diPromisekan dalam sumbernya. Meskipun Promise pertama membutuhkan waktu paling lama untuk diselesaikan, itu masih yang pertama dalam berbagai hasil.

Trik yang umum adalah memetakan array data pekerjaan ke dalam array Promise, dan kemudian membungkusnya menjadi `Promise.all`.

Misalnya, jika kita memiliki array URL, kita dapat mengambil semuanya seperti ini:

```js run
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));
```

Contoh yang lebih besar dengan mengambil informasi pengguna untuk array pengguna GitHub dengan nama mereka (kita bisa mengambil array barang dengan id mereka).

```js run
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      console.log(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => console.log(user.name)));
```

**Jika ada Promise yang ditolak, Promise yang dikembalikan oleh `Promise.all` akan langsung mengembalikan (error) / reject .**

Contoh:

```js run
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
*!*
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
*/!*
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(console.log); // Error: Whoops!
```

Di sini Promise kedua ditolak dalam dua detik. Itu mengarah pada penolakan langsung terhadap `Promise.all`, jadi` .catch` mengeksekusi: kesalahan penolakan menjadi hasil dari keseluruhan `Promise.all`.

`` `warn header =" Jika terjadi kesalahan, Promise-Promise lain diabaikan "
Jika satu Promise ditolak, `Promise.semua` segera menolak, sepenuhnya lupa tentang yang lain dalam daftar. Hasilnya diabaikan.

Misalnya, jika ada beberapa panggilan `fetch`, seperti pada contoh di atas, dan satu gagal, yang lain masih akan terus dieksekusi, tetapi` Promise.all` tidak akan menontonnya lagi. Mereka mungkin akan puas, tetapi hasilnya akan diabaikan.

`Promise.all` tidak melakukan apa pun untuk membatalkannya, karena tidak ada konsep" pembatalan "dalam Promise. Dalam [bab lain] (info: fetch-abort) kita akan membahas `AbortController` yang dapat membantu dengan itu, tetapi itu bukan bagian dari API Promise.
`` `

`` `` smart header = "` Promise.all (iterable) `memungkinkan nilai yang tidak diPromisekan \" reguler \ "di` iterable` "
Biasanya, `Promise.all (...)` menerima iterable (dalam kebanyakan kasus array) Promise. Tetapi jika salah satu dari objek-objek itu bukan Promise, itu diteruskan ke array yang dihasilkan "sebagaimana adanya".

Misalnya, di sini hasilnya adalah `[1, 2, 3]`:

```js run
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2,
  3  
]).then(console.log); // 1, 2, 3
```

Jadi kita dapat mengembalikan nilai yang telah siap ke `Promise.all` jika memungkinkan.


## Promise.allSettled


`Promise.all` menolak secara keseluruhan jika ada Promise yang ditolak. Itu bagus untuk kasus "semua atau tidak sama sekali", ketika kita membutuhkan *semua* hasil untuk melanjutkan:

```js
Promise.all([
  fetch('/template.html'),
  fetch('/style.css'),
  fetch('/data.json')
]).then(render); // render method needs results of all fetches
```

`Promise.allSettled` menunggu semua Promise untuk diselesaikan. Array yang dihasilkan memiliki:

- `{status:"fulfilled", value:result}` for successful responses,
- `{status:"rejected", reason:error}` for errors.

Misalnya, kami ingin mengambil informasi tentang banyak pengguna. Bahkan jika satu permintaan gagal, kami masih tertarik pada yang lain.

Mari kita gunakan `Promise.allSettled`:

```js run
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        console.log(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    });
  });
```

`Hasil` pada baris` (*) `di atas adalah:

```js
[
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]
```

Jadi, untuk setiap Promise kami mendapatkan status dan `nilai / kesalahan`.

### Polyfill

Jika browser tidak mendukung `Promise.allSettled`, mudah untuk melakukan polyfill:

```js
if(!Promise.allSettled) {
  Promise.allSettled = function(promises) {
    return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
      state: 'fulfilled',
      value
    }), reason => ({
      state: 'rejected',
      reason
    }))));
  };
}
```

Dalam kode ini, `promises.map` mengambil nilai input, mengubahnya menjadi Promise (untuk berjaga-jaga jika tidak ada Promise yang diloloskan) dengan` p => Promise.resolve (p) `, dan kemudian menambahkan penangan` .then` ke semua orang.

Pawang itu mengubah hasil yang sukses `v` menjadi` {state: 'terpenuhi', nilai: v} `, dan kesalahan` r` menjadi `{state: 'ditolak', alasan: r}`. Itu persis format `Promise.allSettled`.

Sekarang kita bisa menggunakan `Promise.allSettled` untuk mendapatkan hasil dari * semua * Promise yang diberikan, bahkan jika beberapa dari mereka menolak.

## Promise.race

Mirip dengan `Promise.all`, tetapi hanya menunggu Promise pertama yang diselesaikan, dan mendapatkan hasilnya (atau kesalahan).

Sintaksnya adalah:

```js
let promise = Promise.race(iterable);
```

For instance, here the result will be `1`:

```js run
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1
```

Promise pertama di sini adalah yang tercepat, jadi itu hasilnya. Setelah Promise menetap pertama "memenangkan perlombaan", semua hasil / kesalahan lebih lanjut diabaikan.


## Promise.resolve / reject

Metode `Promise.resolve` dan` Promise.reject` jarang diperlukan dalam kode modern, karena sintaks `async / await` (kami akan membahasnya [sedikit kemudian] (info: async-await)) membuatnya agak usang.

Kami membahasnya di sini untuk kelengkapan, dan bagi mereka yang tidak dapat menggunakan `async / await` karena beberapa alasan.

- `Promise.resolve(value)` menciptakan Promise terselesaikan dengan hasil `value`.

Sama dengan:

```js
let promise = new Promise(resolve => resolve(value));
```

Metode ini digunakan untuk kompatibilitas, ketika suatu fungsi diharapkan untuk mengembalikan Promise.

Misalnya, fungsi `loadCached` di bawah ini mengambil URL dan mengingat (cache) kontennya. Untuk panggilan selanjutnya dengan URL yang sama, segera mendapatkan konten sebelumnya dari cache, tetapi menggunakan `Promise.resolve` untuk membuat Promise tentang hal itu, sehingga nilai yang dikembalikan selalu menjadi Promise:

```js
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
*!*
    return Promise.resolve(cache.get(url)); // (*)
*/!*
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url,text);
      return text;
    });
}
```

Kita dapat menulis `loadCached (url) .then (...)`, karena fungsinya dijamin akan mengembalikan Promise. Kita selalu dapat menggunakan `. Lalu` setelah `loadCached`. Itulah tujuan `Promise.resolve` di baris` (*) `.

### Promise.reject

- `Promise.reject (error)` membuat Promise yang ditolak dengan `error`.

Sama dengan:

```js
let promise = new Promise((resolve, reject) => reject(error));
```

Dalam praktiknya, metode ini hampir tidak pernah digunakan.

## Ringkasan

Ada 5 metode statis dari kelas `Promise`:

1. `Promise.all (Promise)` - menunggu semua Promise untuk menyelesaikan dan mengembalikan berbagai hasil mereka. Jika salah satu Promise yang diberikan ditolak, itu menjadi kesalahan `Promise.semua`, dan semua hasil lainnya diabaikan.
2. `Promise.allSettled (Promise)` (metode yang baru ditambahkan) - menunggu semua Promise untuk menyelesaikan dan mengembalikan hasilnya sebagai array objek dengan:
     - `state`:` "terpenuhi" `atau` "ditolak" `
     - `value` (jika terpenuhi) atau` alasan` (jika ditolak).
3. `Promise.race (Promise)` - menunggu Promise pertama untuk diselesaikan, dan hasilnya / kesalahan menjadi hasilnya.
4. `Promise.resolve (value)` - membuat Promise terselesaikan dengan nilai yang diberikan.
5. `Promise.reject (error)` - membuat Promise yang ditolak dengan kesalahan yang diberikan.

Dari kelima ini, `Promise.all` mungkin yang paling umum dalam praktik.