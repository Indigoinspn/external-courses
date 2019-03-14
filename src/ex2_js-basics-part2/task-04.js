function checkForRepeat (arr) {
    var index = arr.length-2;

    for (var i = 0; i <= index; i++) {

        if (arr[i] !== arr[i+1]) {                         
            return false;
        }             
    }    
    return true;      
}

module.exports = checkForRepeat;