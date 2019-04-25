function toReverseStr(str) {
    var myArray = [], updStr = "" ;         

    for (i=0; i < str.length; i++ ) {        
        myArray[i] = str[i]; 
    }

    myArray.reverse();    
    updStr = myArray.join(""); 

    return updStr;
}

module.exports = toReverseStr;