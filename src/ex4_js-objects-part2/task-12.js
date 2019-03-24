function toSumAndRound (num1, num2) {
    if ( !Number.isFinite(num1) || !Number.isFinite(num2) ) {        
        return "wrong value";
    }         
    var sum = Math.round((num1 + num2 )*1000)/1000; 
   
    return sum;
}

module.exports = toSumAndRound;