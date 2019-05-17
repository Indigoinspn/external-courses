function Calculator() {
    this.result = 0;
}

Calculator.prototype = Object.create(Object.prototype);

Calculator.prototype.add = function(num) {
    if (Number.isFinite(num)) {
        this.result += num;
    }
    return this;
}

Calculator.prototype.subtract = function(num) {
    if (Number.isFinite(num)) {
        this.result -= num;
    }
    return this;
}

Calculator.prototype.divide = function(num) {
    if (Number.isFinite(num)) {
        this.result /= num;
    }
    return this;
}

Calculator.prototype.multiply = function(num) {
    if (Number.isFinite(num)) {
        this.result *= num;
    }
    return this;
}

Calculator.prototype.getResult = function() {
    return this.result
}

Calculator.prototype.reset = function() {
    this.result = 0
    return this;
}

Calculator.prototype.setState = function(num) {
    if (Number.isFinite(num)) {
        this.result = num;
    }
    return this;
}

