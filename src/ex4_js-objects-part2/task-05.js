function ifStringIncludeString(str1, str2) {

    if (!str1) return false;
    var result = str1.includes(str2);                     
    return result;           
}

module.exports = ifStringIncludeString;