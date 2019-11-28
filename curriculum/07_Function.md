
# Fungsi
Fungsi adalah sub-program yang bisa digunakan kembali baik di dalam program itu sendiri, maupun di program yang lain.

Fungsi di dalam Javascript adalah sebuah objek. Karena memiliki properti dan juga method.

## Penggunaan
Ada beberapa cara yang bisa dilakukan untuk membuat fungsi di javascript, seperti berikut ini:

1. Menggunakan cara biasa:

```
function namaFungsi(){
    console.log("Halo Javascript !");
}
```

2. Menggunakan ekspresi:

```
var namaFungsi = function(){
    console.log("Halo Javascript !");
}
```

Kita menggunakan variabel, lalu diisi dengan fungsi. Fungsi ini sebenarnya adalah fungsi anonim (anonymous function) atau fungsi tanpa nama.


3. Menggunakan tanda panah (=>)

sebenarnya arrow function itu hanyalah penyederhanaan penulisan sebuah function.

```
var namaFungsi = function(){
    console.log("Halo Javascript !");
}

// atau seperti ini (jika isi fungsi hanya satu baris):
var namaFungsi = () => console.log("Hello Javascript !")
```

4. Menggunakan Constructor.

Cara ini sebenarnya tidak direkomendasikan oleh Developer Mozilla, karena terlihat kurang bagus. Soalnya body fungsinya dibuat dalam bentuk string yang dapat mempengaruhi kinerja engine javascript.

```
var namaFungsi = new Function('console.log("Hello Javascript !");');
```

## Fun Fact

```
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```

Anehnya, kedua fungsi ini tidak akan mengembalikan hal yang sama. Ayo kita coba:

```
console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());
```

akan menghasilkan:

```
foo1 returns:
Object {bar: "hello"}
foo2 returns:
undefined 
```

Tidak hanya ini mengejutkan, tetapi apa yang membuat ini sangat aneh adalah bahwa `foo2 ()` tidak mengembalikan error saat di jalankan.


Alasan untuk ini ada hubungannya dengan fakta bahwa titik koma secara teknis di dalam JavaScript (meskipun menghilangkannya). Akibatnya, ketika baris yang berisi pernyataan kembali (dengan tidak ada yang lain di baris) ditemui di `foo2 ()`, tanda titik koma secara otomatis dimasukkan segera setelah pernyataan kembali.

Tidak ada kesalahan yang dilemparkan karena sisa kode benar-benar valid, meskipun tidak pernah dipanggil atau melakukan apa pun (itu hanya blok kode yang tidak digunakan yang mendefinisikan di propesrti yang sama dengan string "halo").

Perilaku ini juga berpendapat untuk mengikuti konvensi penempatan kurung kurawal pembuka di akhir baris dalam JavaScript, bukan pada awal baris baru. Seperti yang ditunjukkan di sini, ini menjadi lebih dari sekedar preferensi gaya dalam JavaScript.
