# Variable
Variabel bersifat mutable, artinya nilai yang tersimpan di dalamnya dapat kita isi ulang (berubah).

## Var
Cara pendeklarasian seperti biasa
```
// mula-mula kita buat variabel dengan isi seperti ini
var age = 18;

// lalu kita isi ulang
age = 21;
```
## Let
Biasanya untuk mendeklarasikan sebuah variabel pada javascript sering kita menggunakan var,tapi setelah muncul rilis terbaru dari Ecmascript, pada ES6 dikenalkan let dan const untuk mendeklarasikan sebuah variabel. Berbeda dengan var, dengan let memungkinkan untuk mendeklarasikan variabel yang terbatas cakupannya pada sebuah blok,statement atau expression. tidak seperti keyword “var” yang mendefinisikan variabel secara global atau secara lokal keseluruhan funsi terlepas dari cakupan blok.

```
var a = 10;
{
  var a = 20; //deklarasi variabel dg var pada sebuah blok
  console.log(a); // output: 20
}
console.log(a); // output: 20;

let b= 10;
{
  let b= 20; //deklarasi variabel dg let pada sebuah blok
  console.log(b); // output: 20
}
console.log(b); // output: 10
```

ketika menggunakan var, maka ketika kita mendeklarasikan variabel dengan nama yang sama pada sebuah blok,maka nilai variabel itu akan berubah, sedangkan jika menggunakan let, variabel yang kita deklarasikan di dalam sebuah blok akan dianggap sebagai variabel tersendiri dan tidak mempengaruhi variabel yang dideklariskan di luar blok sehingga, output yang dihasilkan berbeda.

```
{
   var salary1 = 9000;
}
console.log(salary1); // output : 9000
{
  let salary2 = 8000;
}
console.log(salary2); // output: Uncaught ReferenceError: salary2 is not defined
```

jika kita menggunakan var,maka kita bisa mendeklarasikan ulang variabel tersebut, tapi dengan let akan muncul error

```
var job1 = engineer;
var job1 = ‘ui/ux designer’; //tidak terjadi error
let job2 = ‘marketing’;
let job2 = ‘engineer’; //error ‘Uncaught SyntaxError: Identifier 'job2' has already been declared’
```

## Const
di es2015 deklarasi variabel bisa menggunakan `const`.secara sederhana const digunakan untuk mendeklarasikan variabel yang readonly, tapi bukan berarti variabel tersebut immutable(tetap) hanya saja variabel tersebut tidak bisa dideklarasi ulang,baik menggunakan keyword var,let atau const itu sendiri atau menginisialisasi ulang nilainya.
Konten variabelnya sendiri masih bisa diubah, misalnya dalam kasus jika nilai variabel const nya adalah object,maka kontent objek tersebut bisa diubah. untuk lebih memahami penggunaan const.

```
const MY_NUMBER = 10;
MY_NUMBER  = 11; //error : ‘Uncaught TypeError: Assignment to constant variable.’
const MY_NUMBER = 12;
var MY_NUMBER = [1,2,3]; //error : Uncaught SyntaxError: Identifier 'MY_NUMBER' has already been declared
```


sama halnya dengan let, pada const juga berlaku block scope, artinya meskipun variabel a dideklarasikan dengan keyword const, tp ketika di dlm block/statement if kita membuat variabel dengan nama yang sama (a), maka itu dianggap sebagai variabel tersendiri/berbeda.

```
fx()
{
  const MY_NUMBER = 10;
}
console.log(MY_NUMBER) // error ‘Uncaught ReferenceError: MY_NUMBER is not defined’
```

konten variabelnya tidak immutable alias bisa diubah, seperti pada kondisi jika variabel itu adalah sebuah array atau object,maka konten dari variabel itu bisa diubah seperti contoh di atas. untuk object, jika kita ingin membuatnya immutable. maka bisa menggunakan Object.freeze.

```
const MY_OBJECT = Object.freeze({key: 'value'});
MY_OBJECT.otherKey = 'other value'; //menambahkan key baru ke dalam object
console.log(MY_OBJECT); // output : {"key":"value"}
```
