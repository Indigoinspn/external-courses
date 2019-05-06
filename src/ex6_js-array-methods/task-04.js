function filterEquiv(arr, fun) {
    var newArr = [];

    if (Array.isArray(arr)) {

        for (var i = 0; i < arr.length; i++) {
            if (fun(arr[i], i, arr)) {
                newArr.push(arr[i])               
            }
        }

        return newArr;
    }
    return "wrong value";
}

module.exports = filterEquiv;