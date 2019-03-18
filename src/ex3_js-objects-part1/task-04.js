function addNameIfDoesNotContain(name, obj) {
    var updatedObj = obj;

    if (typeof name !== "string" || typeof obj !== "object") {
        return "wrong value";
    } else if (obj.hasOwnProperty(name)) {        
        return obj;
    }

    updatedObj[name] = "new";        
    return updatedObj;
} 

module.exports = addNameIfDoesNotContain;