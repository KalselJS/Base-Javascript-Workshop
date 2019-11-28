# String
Dalam JavaScript, data tekstual disimpan sebagai string. Tidak ada tipe terpisah untuk satu karakter.

Format internal untuk string selalu UTF-16, tidak terikat dengan pengkodean halaman.

String dapat dimasukkan dalam tanda kutip tunggal, kutip ganda, atau backticks

```
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;
```

Kutipan tunggal dan ganda pada dasarnya sama. Namun, Backticks memungkinkan untuk menanamkan ekspresi apa pun ke dalam string, dengan membungkusnya dalam `${...}`

```
function sapa(nama) {
  return "halo "+nama
}

console.log(`${sapa("ridho")}, salam kenal`); // halo ridho, salam kenal
```

Masih dimungkinkan untuk membuat string multiline dengan tanda kutip tunggal dan ganda dengan menggunakan apa yang disebut "karakter baris baru", ditulis sebagai \ n, yang menunjukkan jeda baris.


```
let str1 = "Hello\nWorld"; 

let str2 = `Hello
World`;

console.log(str1 == str2); // true
```