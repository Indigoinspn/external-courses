function ifObjContainName (name, obj) {

    if (typeof name !== "string" || typeof obj !== "object") {
        return "wrong value";
    }

    for (var key in obj) {
        if (key === name ) {            
            return true;
        }                
    }

    return false;
}

module.exports = ifObjContainName;