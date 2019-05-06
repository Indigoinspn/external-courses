function toCamelCaseString(anyString) {
    if (!anyString || typeof anyString !== "string") {
        return "wrong value";
    } 
    
    var str = anyString.trim(); 
    var camCaseStr ="";

    for (var i = 0; i < str.length; i++) {
        if ( i === 0 && str[i] !== " " && typeof str[i] !== "number") {
            camCaseStr += str[0].toLowerCase();            
        }
        else if (str[i] === " " && str[i+1] && i!== str.length - 1 ) {                    
            camCaseStr += str[i + 1].toUpperCase();            
            i++
        }
        else {
            camCaseStr += str[i].toLowerCase();            
        }    
    }

    return camCaseStr;
}

module.exports = toCamelCaseString;