function toTitleString(str) {            
    if (!str) return "wrong value"; 
    var titledStr = str;                   

    for(var i=0; i < titledStr.length ; i++) {
        if (titledStr[i]=== " " && i!== titledStr.length -1) {
            titledStr = titledStr.replace (titledStr[i+1], titledStr[i+1].toUpperCase());            
        }                    
    }
                
    return titledStr; 
} 

module.exports = toTitleString;