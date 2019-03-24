function toLimitTheString(str, num) {
    var limitedStr;

    if (typeof str !== "string" || typeof num !== "number" ||!str || !num) {
        return "wrong value";
    }
    else if (str.length > num) {
        limitedStr = str.slice(0, num-1);                       
        limitedStr = limitedStr.concat("…");        
        return limitedStr;
    }
    limitedStr = str;          

    return limitedStr;  
}

module.exports = toLimitTheString;