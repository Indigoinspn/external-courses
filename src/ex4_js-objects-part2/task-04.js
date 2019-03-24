function capitalizeFirstChar(str) {
    var updatedStr = str.replace (str[0], str[0].toUpperCase())          
    return updatedStr;           
}

module.exports = capitalizeFirstChar;