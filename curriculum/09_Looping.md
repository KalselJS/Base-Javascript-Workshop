Loop adalah kumpulan kode perintah yang dieksekusi berulang-ulang sesuai dengan kondisi tertentu. Ada beberapa jenis looping didalam JavaScript: 

* For loop, 
* While loop
* Do While loop
* ForIn
* ForOf

Ada beberapa jenis loop yang berbeda, namun pada dasarnya semuanya melakukan hal yang sama, mereka mengulangi sebuah aksi beberapa kali (dan sebenarnya memungkinkan bahwa dapat saja menjadi nol). Berbagai mekanisme loop menawarkan berbagai cara untuk menentukan titik awal dan akhir perulangan. Ada berbagai situasi yang lebih mudah dikerjakan oleh sebuah tipe loop dibandingkan tipe (loop) yang lain.

## For Statement

Sebuah for loop mengulang hingga kondisi yang ditentukan evaluasinya menjadi salah/false.  for loop pada Javascript serupa dengan  for loop pada Java dan C. Sebuah statement (pernyataan) for   terlihat sebagai berikut:

```
for ([initial]; [kondisi]); 
[operasi]) statement
```

jenis ini digunakan untuk menelusuri Property dari sebuah Objek.

Contoh:

```js
  var merekMobil = ["Tesla", "Suzuki", "Honda" ]
    for (var i = 0; i < merekMobil.length; i++ {
         console.log(merekMobil[i]);
    }
```


## While Statement

Sebuah statement while di eksekusi pernyataan pernyataannya asalkan memenuhi syarat kondisinya yang bernilai true/benar. Sebuah statement  while terlihat sebagai berikut:

```
while (kondisi)
  statement
```

Jika kondisi bernilai false/salah, statement dengan perulangan berhenti di eksekusi dan kontrol akan melewati statement yang mengikuti perulangan tersebut.

Kondisi terjadi sebelum statement dalam perulangan di eksekusi. Jika kondisi bernilai true/benar, statement di eksekusi dan kondisi di uji kembali. Jika kondisi bernilai false/salah, eksekusi akan berhenti dan konrol lewat untuk statement yang mengikuti while.

Untuk mengeksekusi banyak statement, gunakan blok statement ({ ... }) untuk mengelompokan banyak statement tersebut.

contoh:

```js
   var i = 1;
        while (i<15) {
            console.log("Hitung :" + i +"<br>");
            i++;
    }
```

**Jangan lupa untuk memberikan batas pemberentian looping, karena jika tidak siap-siap browser kalian akan crash.**


## DoWhile Statetement

Do While Loop ini, mirip dengan While loop, perbedaannya hanya pengecekan datanya dilakukan di akhir dari looping. Jadi prinsipnya, jalankan dulu baru periksa. Itu artinya loop ini minimal akan dilakukan sekali.

```
do
  statement
while (kondisi);
```

Statement akan di jalankan lebih dulu sebelum kondisi diperiksa. Untuk menjalankan banyak statements, gunakan statement blok `({ ... })`. Jika condition bernilai benar, maka statement akan dijalankan kembali. Kondisi diperiksa pada setiap akhir eksekusi. Ketika kondisi bernilai salah, eksekusi berhenti dan kontrol akan melewati pernyataan yang mengikuti `do...while`

contoh:


```js
var angka = 0;

do {
  angka += 1;
  console.log("hitung ", angka);
} while (i < 15);

```

## ForIn
Statement for...in mengiterasi sebuah variabel spesifik diatas properti enumerable dari sebuah objek. Untuk setiap properti yang berbeda

Jika di gunakan untuk objek, perulangan FOR IN akan menampilkan seluruh property dan method dari objek tersebut.

```
var jawaban = { 
    a: "Barito",
    b: "Banua",
    c: "Borneo",
};
                                                
var pilihan; 
                                                   
for (pilihan in jawaban)
{
   console.log(jawaban[pilihan]);
}
```

tetapi kita juga bisa menggunakannya pada array

```
    var array=[5,4,3,2,1];     
    var penampung;                  

    for (penampung in array)
    {
        console.log("Isi array adalah: "+a[b]);
    }
```

## ForOf

Statement `for...of` membuat sebuah iterasi perulangan diatas iterable objects (termasuk Array, Map, Set, arguments object dan seterusnya), menjalankan hubungan iterasi khusus dengan statement yang akan dieksekusi untuk setiap nilai properti yang berbeda.


perbedaan diantara sebuah perulangan for...of dan sebuah perulangan for...in. Ketika for...in mengiterasi diatas nama-nama properti, for...of mengiterasi diatas nilai-nilai

```
    let array=[5,4,3,2,1];                      

    for (let penampung in array)
    {
        console.log("Isi array adalah: "+penampung); // 5,4,3,2,1
    }

```
