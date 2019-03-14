function checkIfSimple (num) { 
    var message;

    if (num < 2 || num > 1000) {
        message = "Данные неверны" ; 
    } else if (num === 2) {
        message = "Число " + num + " - простое число"; 
    } else {
        
        for (i = 2; i < num ; i++) {

            if (num % i === 0) {
                message = "Число " + num + " - составное число"; 
                break;                       
            } 
            else {

                if ( ++i === num) {                    
                    message ="Число " + num + " - простое число";
                }                
                continue;
            }             
        }                
    } 
    return message      
}
module.exports = checkIfSimple;