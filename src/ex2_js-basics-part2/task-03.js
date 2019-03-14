function oddEvenZeroNum (arr) {
    var index = arr.length - 1;
    var zero = 0;
    var even = 0;
    var odd = 0; 
    
    for (var i = 0; i <= index; i++) {

        if (arr[i] === 0) {             
            zero++;  
        } else if ( arr[i] % 2 === 0 && typeof(arr[i]) === "number" ) {                
            even++;           
        } else if ( arr[i] % 2 !== 0 && typeof(arr[i]) === "number") {                
            odd++;              
        } 
    }

    return ( [ even, odd, zero ] );   
}  

module.exports = oddEvenZeroNum;