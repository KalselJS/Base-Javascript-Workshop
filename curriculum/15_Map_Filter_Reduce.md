Pada tahun 2011, Javascript memperkenalkan beberapa fitur yang di ambil dari functional programming yaitu map, reduce dan filter sebagai alternatif dalam merubah elemen di dalam array, mencari akumulasi nilai, atau membuat array baru berdasarkan kondisi yang sudah ditetapkan. Metode ini cukup membantu software developer menulis kode yang lebih simple dan juga membuat kode lebih mudah dibaca.

## Perulangan Tradisional
Berikut adalah contoh kode dimana kita menggunakan perulangan (looping) for untuk membuang angka ganjil di dalam suatu array

Kita bisa melihat kode ini melintasi array dan memasukan elemen (angka) yang habis dibagi 2 (angka genap) ke array yang baru. Untuk memahami kode ini, kita harus melihat 5 hal.

    ```
    for(var i = 0; i < array.length; i++) {
        if( array[i] % 2 ) === 0 ) {
            arrayBaru.push(array[i]);
        }
    }
    ```
1. var i = 0 (mulai dari sisi kiri array atau dari index 0)
2. i < array.length (berhenti di sisi kanan array atau index terakhir)
3. i++ (maju 1 index untuk tiap perulangan)
4. array[i] % 2 === 0 (melakukan pengecekan jika nilai dari elemen habis dibagi 2 atau      bilangan genap)
5. arrayBaru.push (array[i]) (memasukan elemen kedalam array baru, kita harus memastikan arrayBaru ini sudah ada atau menginisiasikan array ini terlebih dahulu)
Kita harus mengecek 5 baris kode untuk memahami apa dilakukan oleh kode ini dalam 1 perulangan for

Pendekatan Functional
Dengan menggunakan fitur bawaan Javascript filter() , kita bisa menulis kode dengan fungsi serupa tapi dengan baris kode yang lebih sedikit.

    ```
    var arrayBaru = array.filter(function(element, i, array) {
        return (element % 2 === 0); 
    });
    ```

## Lebih simpel dan mudah dimengerti
mari kita bandingkan dengan kode sebelumnya.

1. langkah #1 , #2, #3 tidak diperlukan karena filter() sudah melakukannya secara otomatis
2. langkah #4 tetap diperlukan tapi tanpa tambahan if(…)
3. langkah #5 , kita tidak perlu lagi memastikan bahwa arrayBaru ini sudah ada karena filter() akan mengembalikan array baru tanpa merubah nilai array yang sudah ada sebelumnya (side-effects)

Jadi bisa disimpulkan bahwa map, reduce dan filter membuat kode lebih simpel, tanpa side-effects dan lebih mudah dipahami.
mari kita lihat satu-persatu contoh dari map, reduce, dan filter.

## map()
Biasa digunakan untuk : merubah semua elemen di dalam suatu array menjadi elemen dengan nilai yang baru.

Contoh : merubah semua bilangan desimal menjadi bilangan biner (basis 10 ke basis 2).

```
var bilanganDesimal = [1,2,3,4,5];

var bilanganBiner = bilanganDesimal.map( (element) => {
 	return element.toString(2);   
})

console.log(bilanganBiner); // ["1", "10", "11", "100", "101"]
```

Apa yang dilakukan : Melintasi array dari kiri ke kanan dan memanggil fungsi callback ke setiap elemen. Setelah semua elemen berhasil dilintasi, fungsi map() mengembalikan array baru dengan elemen-elemen yang baru.


```
array.map( function(element, index, array) {
    ...
   }, thisArgument);
```


Parameter :
1. element (nilai dari elemen)
2. index (index dari tiap lintasan, dari kiri ke kanan ( 0 ke N ) )
3. array (array semula yang memanggil fungsi ini)
thisArgument ( Opsional, object yang akan di arahkan sebagai this di dalam fungsi callback )

## reduce()
Biasa digunakan untuk : Mengakumulasikan atau mengurangi nilai berdasarkan elemen di dalam array.

Contoh : Menjumlahkan penduduk Kalimantan selatan dari tiap kabupaten/kota pada tahun 2014

```
const kalsel = [
	{ regency:'Banjarbaru', population:114863 },
	{ regency:'Martapura', population:209308 },
	{ regency:'Banjarmasin', population:277536 },
	{ regency:'Pelaihari', population:208443 },
	{ regency:'Batulici', population:79233 },
	{ regency:'Kotabaru', population:106166 },
	{ regency:'Gambut', population:193787 },
	{ regency:'Marabahan', population:294418 },
	{ regency:'Kintab', population:403292 }
];

const sum = kalsel.reduce(function(val, element) {
	return val + element.population;
}, 0);

console.log(sum) // 1887046
```

Apa yang dilakukan : Mirip seperti map() , fungsi ini melintasi array dari kiri ke kanan dan memanggil fungsi callback ke setiap elemen. Nilai yang di kembalikan adalah berupa akumulasi nilai melalui tiap callback. Setelah semua elemen dilintasi, reduce() akan mengembalikan nilai akumulasi.

```
array.reduce(function(value, element, index, array) {
 …
 }, initialValue);
```

Parameter :
1. value (nilai yang di akumulasikan pada tiap callback)
element (nilai dari element)
2. index (index dari tiap lintasan, dari kiri ke kanan ( 0 ke N ) )
array (array semula yang memanggil fungsi ini)
3. initialValue ( Opsional, nilai yang digunakan sebagai nilai awal di callback yang pertama (index 0) )

## filter()
Biasa digunakan untuk : Membuang elemen dalam array berdasarkan kondisi yang ditetapkan.

Contoh : membuang elemen yang berupa angka ganjil

```
var arrayBaru = array.filter(function(element, i, array) {
	return (element % 2 === 0); 
});
```

Apa yang dilakukan : Mirip seperti map() , fungsi ini melintasi array dari kiri ke kanan dan memanggil fungsi callback ke setiap elemen. Nilai yang dikembalikan harus dalam bentuk boolean untuk menentukan apakah elemen tersebut akan di disimpan atau dibuang. Setelah semua elemen dilintasi, filter() akan mengembalikan array baru dengan semua elemen yang mengembalikan nilai true.

Parameter :

Paramater sama dengan fungsi map()

## Kekurangan
map, reduce, dan filter bukanlah silver bullet dalam melakukan perulangan, beberapa kekurangan nya adalah sebagai berikut.

### Performance
Dari sisi performance , map, reduce, dan filter masih dibawah perulangan for. Disarankan untuk menggunakan for ketika kira harus memproses array dengan elemen yang cukup banyak (contoh : lebih dari 1000 elemen)

### Perulangan kompleks
Masih lebih cocok menggunakan for dalam perulangan yang kompleks, misalkan harus menghentikan ( break ) proses perulangan ketika suatu kondisi tercapai.
Penutup.
