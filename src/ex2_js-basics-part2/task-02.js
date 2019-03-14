function loopObject (arr) {
    var quantity = arr.length - 1;

    for (var i = 0; i <= quantity; i++) {
        console.log( arr[i] );
    }
    console.log( "Число элементов: " + arr.length);
} 
 
module.exports = loopObject;