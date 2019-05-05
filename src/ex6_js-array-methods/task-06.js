function reduceEquiv(arr, fun, initVal) {
    var res, i = 0;

    if (Array.isArray(arr)) {
        if (Number.isFinite(initVal)) {
            res = initVal;
        } else {
            res = arr[0];
            i = 1;
        }

        for (i; i < arr.length; i++) {
            res = fun(res, arr[i], i, arr)
        }

        return res;
    }

    return "wrong value";
}

module.exports = reduceEquiv;