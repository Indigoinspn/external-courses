function findMaxNum (arr) {
    var maxNum = 0;

    for (var i = 0; i <= arr.length-1; i++) {

        if ( maxNum < arr[i] ) {
            maxNum = arr[i];
        }             
    } 
      
    return maxNum;      
} 

module.exports = findMaxNum;