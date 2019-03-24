function createEmptyObjectWithNullProto() {
    var emptyObj = Object.create(null);   
    return emptyObj;           
}

module.exports = createEmptyObjectWithNullProto;