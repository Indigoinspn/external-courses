function returnWholeNum(min, max) {                   
    var num = Math.round(Math.random() * (max-min)+ min);                        
    
    return num;
}

module.exports = returnWholeNum;