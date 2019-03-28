function sliceEquiv(arr, val1 = 0, val2 = arr.length) {
    var newArr = [], start = val1, end = val2; 

    if (Array.isArray(arr) && Number.isFinite(start) && Number.isFinite(end)) {
        if (start < 0) {
            start = arr.length + start;            
            if (end < 0) {
                end = arr.length + end;                
            }
        }

        for (var i = start; i < end; i++) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

module.exports = sliceEquiv;