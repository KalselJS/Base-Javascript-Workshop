// another way to do truthy
function truthy(array) {
    return array.filter(function (arg) {
        if (arg) {
            return true;
        } else return false;
    });
}
var param = [false, false, true];
console.log(truthy(param));


function jumlahMobilTruk() {

}