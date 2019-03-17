function processType(input) {

    if (!input && input!== 0 && input!== "" ) { //  Condition true for Nan, null, underfined, except zero and empty string.    
        return undefined;
    }
    
    switch (typeof input) {
        case "string":
            return "string";
        case "number":
            return "number";
        default:
        return undefined;
    } 
}

module.exports = processType;