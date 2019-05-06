function mapEquiv(arr, fun) {
    var newArr = [];

    if (Array.isArray(arr)) {

        for (var i = 0; i < arr.length; i++) {
            res = fun(arr[i], i, arr)
            newArr.push(res);            
        }

        return newArr;
    }
    return "wrong value";
}

module.exports = mapEquiv;