function checkIfSimple (num) {     

    if ( num < 2 || num > 1000 || !num) { // !num - Condition true for Nan, null, underfined, empty string and zero.
        return "Данные неверны" ; 
    }

    for (i = 1; i < num ; i++) {

        if (num % i === 0 && i !== 1) {                 
            return "Число " + num + " - составное число";                                       
        }                       
    } 

    return "Число " + num + " - простое число";         
}

module.exports = checkIfSimple;