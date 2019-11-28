Salah satu hal paling dasar yang bisa dilakukan oleh suatu bahasa pemrograman adalah operasi aritmatika. Pada operasi aritmatika tersebut terlibat operand, berupa angka, dan juga operator yang menentukan operasi apa yang akan dilakukan terhadap satu atau lebih operand tadi.
JavaScript tentunya memiliki operator-operator untuk mendukung operasi matematika. Setidaknya ada tujuh operator matematika di JavaScript, yaitu:

* Penjumlahan (+)
* Pengurangan (-)
* Perkalian (*)
* Pembagian (/)
* Modulus (%)
* Incremental (++)
* Decremental (- -)

## Penjumlahan

Pada JavaScript, operator penjumlahan menggunakan karakter plus, `+` .

```js
 console.log(4 + 3) // 7
```

Pada JavaScript, operator penjumlahan selain digunakan untuk menjumlahkan dua buah angka juga dapat digunakan sebagai operator konkatenasi untuk string, menyambung string.

```js
 console.log( 1 + '2' + '5') // 5
```

## Pengurangan
Operator pengurangan menggunakan karakter minus, `-`

```js
 console.log( 2 - 1) // 1
```

## Perkalian
Operator perkalian menggunakan karakter bintang, *.

```js
 console.log(3 * 4) // 12
```

## Pembagian
Operasi pembagian menggunakan karakter slash, `/`.

Operasi pembagian memungkinkan hasil dalam bentuk decimal dengan angka dibelakang koma hingga tak terhingga. JavaScript membulatkan angka dibelakang koma sampai dengan 16 digit jika angka dibelakang koma melebihi 16 digit.

```js

console.log(5 / 4) // 1.25
console.log(20 / 4) // 5
```

## Modulus
Operasi modulus menggunakan karakter percent, %. Operasi modulus merupakan operasi untuk menghasilkan sisa, remainder, dari hasil pembagian. Oleh karena itu hasil dari operasi modulus selalu merupakan bilangan bulat, baik negatif, nol, atau positif.

```js

console.log(5 % 4) // modulus positif
console.log(-5 % 4) // modulus negatif
```

## Increment
Increment, ++

Anda pastinya familiar dengan operator sebelumnya namun mungkin belum familiar dengan operator increment. Seperti namanya, operator increment menambah nilai suatu variabel satu nilai keatas, bertambah satu. Operator increment hanya bisa digunakan dengan variabel, tidak bisa dengan literals atau pun expression.

```
var a = 5

a++;

console.log(a)
```

Saya pernah melihat penggunaan operator increment tapi didepan variabel, seperti ++a. Apa perbedaannya?

Benar. Operator increment dapat digunakan pada awal variabel, disebut prefix increment.

```js
var a = 5

console.log(a++) // 5
console.log(a) // 6

//lalu

console.log(++a); // 7
console.log(a) //7

```

Perhatikan contoh diatas. Pada bagian pertama saya menggunakan postix increment. Console.log pertama mencetak angka 5. Kenapa 5? Bukankah harusnya 6 karena a di-increment? Disini lah letak perbedaannya. Jika menggunakan postfix increment maka operasi akan dilakukan diakhir setelah variabel a dieksekusi expression lainnya, dalm kasus ini variabel a dieksekusi oleh console.log terlebih dahulu kemudian baru di-increment.
Sementara prefix increment merupakan kebalikannya. Variabel akan di-increment terlebih dahulu sebelum dilakukan operasi atau expression apapun. Dalam kasus ini a di-increment dahulu sebelum dicetak oleh console.log().


## Decrement --
Operator decrement merupakan kebalikan dari operator increment. Anda menggunakan operator decrement untuk mengurangi nilai suatu variabel satu nilai.

```js
var a = 5

console.log(a--) // 5
console.log(a) // 4

//lalu

console.log(--a); // 3
console.log(a) //3

```

Penggunaan prefix decrement dan postfix decrement sama seperti layaknya operator increment seperti yang saya contohkan sebelumnya.

