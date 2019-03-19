function oddEvenZeroNum (arr) {
    var zero = 0, even = 0, odd = 0; 
        
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {             
            zero++;  
        } else if ( arr[i] % 2 === 0 && typeof arr[i] === "number" ) {                
            even++;           
        } else if ( arr[i] % 2 !== 0 && typeof arr[i] === "number") {                
            odd++;              
        } 
    }

    return ( [ even, odd, zero ] );   
} 
 
module.exports = oddEvenZeroNum;