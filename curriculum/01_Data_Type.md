# Tipe Data
Variabel adalah sebuah nama yang mewakili sebuah nilai. Variabel bisa diisi dengan berbagai macam nilai seperti string (teks), number (angka), objek, array, dan sebagainya.

## Primitive
Keenam jenis ini dianggap primitif. Primitif bukan objek dan tidak memiliki metode sendiri. Semua primitif adalah *immutable*.

1. String 
   sebuah array gabungan dari chars, contoh "kata"

   ```
   var nama = "ridho"
   ```

2. Number
   adalah integers, floats, dll

   ```
   var jumlahBotol = 15000
   var hargaAqua = 4.5
   ```

    
3. Boolean
   true or false

   ```
   var sudahMakan = true
   var sudahMinum = false
   ```
   

4. Undefined 
   sebuah variable yang di deklarasikan tapi tidak memiliki isi

   ```
   var nama

   console.log(mantan) //Undefined value!
   ```

5. Null
  Null adalah kata kunci (keyword) khusus yang berarti ‘tidak memiliki nilai’. Kita bisa memberikan nilai null kepada variabel, elemen dari array, property object
  ```
  function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;
    }
    return m.length;
  }
    console.log(getVowels('sky'));
    // expected output: 0
    ```

6. Symbol
   a unique value that's not equal to any other value

   ```
   Symbol('a')
   ```

Hahay... selain itu semua di javascript adalah object

1. Object
```
var orang = {
    nama: "Ridho",
    kelas: 3
}
```

2. Array
```
var buah = ["Jeruk", "Nanas", ...]
```

## Resources
1. https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b

