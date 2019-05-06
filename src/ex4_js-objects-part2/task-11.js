function toCountCharRepeat(str) {
    var myObj = {}, result = "";

    for (var i = 0; i < str.length; i++) {
        var start = 0, index = 0, count = 0;

        index = str.indexOf(str[i], start);

        while (index !== -1) {
            index = str.indexOf(str[i], start)
            if (index !== -1) count++;
            start = index + 1;
        }
        myObj[str[i]] = count;
    }

    for (var key in myObj) {
        if (myObj.hasOwnProperty(key)) {
            result += "Number of " + key + " is  " + myObj[key] + "; \n"
            console.log("Number of " + key + " is  " + myObj[key] + "; \n");
        }
    }

    return result;
}

module.exports = toCountCharRepeat;