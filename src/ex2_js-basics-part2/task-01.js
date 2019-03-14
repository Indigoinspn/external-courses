function processType(input) {
    var outputType;
    
    if (typeof (input) === "string") {
        outputType = "string";               
    } else if (typeof (input) === "number") {
        outputType = "number";                
    } 
    
    return outputType;            
}
module.exports = processType;