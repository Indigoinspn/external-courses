var protoObj = { category: "fruit", type: "citrus" },
    originObj = Object.create(protoObj);

function isPropInPrototype(name, anyObject) {
    if (typeof anyObject !== "object") {
        return "wrong value";
    }

    for (var key in anyObject) {
        if (key === name && !anyObject.hasOwnProperty(key)) {
            return 1;
        }
    }

    return undefined;
}

module.exports = isPropInPrototype;