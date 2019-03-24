function toInsertSubstring(str, subStr, index) {
    var myArray= str.split(" ");
    myArray.splice(index +1, 0, subStr );
    var updStr = myArray.toString();

    for (i=0; i < updStr.length; i++ ) {        
        if (updStr[i]===","){
            updStr = updStr.replace (","," ");           
        }            
    }

    return updStr;
}

module.exports = toInsertSubstring;