function unique(array1, array2) {
    var a = array1.concat(array2);
    var array = [];
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
        counter = 0;
        for (var j = 0; j < a.length; j++) {
            if (a[i] === a[j]) {
                counter++;
            }
        }
        if (counter < 2) {
            array.push(a[i]);
        }

    }
    return array;
}

var test2 = [1, 5, 6, 8, 3, 7];
var test3 = [1, 6, 3, 5, 7];

console.log(unique(test2, test3));