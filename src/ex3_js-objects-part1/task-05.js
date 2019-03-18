function createCopyFor (obj) {
    var newObj = {};  
    
    for (var key in obj) { 
        if (obj.hasOwnProperty(key)) { 
            newObj[key] = obj[key];
        }    
    }      
    return newObj;
}

module.exports = createCopyFor;