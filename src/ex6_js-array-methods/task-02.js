function someEquiv(arr, fun) {

    if (Array.isArray(arr)) {

        for (var i = 0; i < arr.length; i++) {
            if (res = fun (arr[i], i, arr)) return true;           
        }

        return false;
    }
    return "wrong value";
}

module.exports = someEquiv;