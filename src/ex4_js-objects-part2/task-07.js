function toLimitTheString(str, num) {    

    if (typeof str !== "string" || typeof num !== "number" ||!str || !num) {
        return "wrong value";
    }
    else if (str.length > num) {
        return str.slice(0, num-1).concat("…");
    }            

    return str;   
}

module.exports = toLimitTheString;