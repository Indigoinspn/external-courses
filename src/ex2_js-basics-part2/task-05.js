function findMaxNum (arr) {
    var index = arr.length-1;
    var maxNum = 0;

    for (var i = 0; i <= index; i++) {

        if ( maxNum < arr[i] ) {
            maxNum = arr[i];
        }             
    } 
      
    return maxNum;      
} 
module.exports = findMaxNum;