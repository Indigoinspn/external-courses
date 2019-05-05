function everyEquiv(arr, fun) {

    if (Array.isArray(arr)) {

        for (var i = 0; i < arr.length; i++) {
            if (!(res = fun(arr[i], i, arr))) return false;             
        }
        
        return true;
    }
    return "wrong value";
}

module.exports = everyEquiv;