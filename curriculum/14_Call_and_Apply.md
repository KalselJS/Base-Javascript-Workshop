Dalam JavaScipt, function memiliki property dan method layaknya object. Kali ini kita akan membahas method Call, Apply dan Bind. Ketiga method ini dipakai saat sebuah function dipanggil (Invocation), dimana pada artikel sebelumnya kita sudah belajar cara memanggil function. Pada dasarnya ketiga method ini memiliki fungsi yang sama, yakni untuk mengirimkan argument saat function dipanggil, perbedaannya terletak pada cara memasukan argument tersebut.

## Call

Method Call, memiliki paramater seperti berikut.

Function.call(Object, Args1, Args2, dts.)

Paramater pertama adalah Object yang akan diikat oleh function, dimana properti-properti dalam object tersebut dapat dipanggil dalam function menggunakan this, paramater ke 2, 3 dst adalah argument ke 1, 2 dst.

```
function myFunc(x, y){
    return this.greeting + ' ' + x + ' ' + y
}

var callFn = myFunc.call(
    { greeting: 'Hello' },
    'John',
    'Doe'
)
```

## Apply

Method Apply, Sama seperti Call, namun argumentnya berada dalam sebuah array.

Function.apply(Object, [args1, args2, dst])

```
function myFunc(x, y){
    return this.greeting + ' ' + x + ' ' + y
}

var callFn = myFunc.call(
    { greeting: 'Hello' },
    ['John','Doe']
)
```