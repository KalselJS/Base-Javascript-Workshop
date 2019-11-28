# Soal Pertama

1. Tuliskan sebuah fungsi yang bernama  `trurthy` yang memiliki parameter berupa array

2. Contoh parameter yang bisa diberikan `[true, false, true]`

3. Fungsi yang telah kita buat tadi hanya akan mengembalikan nilai `true` saja

4. Contoh Expektasinya adalah:
    * [true, false, true] => [true, true]
    * [false, false, true, true, true] => [true, true, true]


# Soal Kedua

1. Buat sebuah variable seperti ini 
    ```
        var mobil = [ 
            { tipe: truk, nama: 'A1' , jumlah: 21},
            { tipe: cityCar, nama: 'B3' , jumlah: 1},
            { tipe: offroad, nama: 'C5' , jumlah: 5},
            { tipe: cityCar, nama: 'D6' , jumlah: 7},
            { tipe: truk, nama: 'E1' , jumlah: 8}
        ]
    ```

2. Tuliskan sebuah fungsi yang bernama  `jumlahMobilTruk` yang memiliki parameter berupa array

3. Masukkan variable `mobil` ke dalam fungsi `jumlahMobilTruk`, lalu literate  masing jumlah di tambahkan 5,

4. Kemudian Filter hanya tipenya `truk` saja yang dikembalikan, contoh outputnya :

```
[ 
            { tipe: truk, nama: 'A1' , jumlah: 26},
            { tipe: truk, nama: 'E1' , jumlah: 13}
]
