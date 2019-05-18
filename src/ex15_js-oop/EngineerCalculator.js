function EngineerCalculator() {
    Calculator.call(this);
}

EngineerCalculator.prototype = Object.create(Calculator.prototype);
EngineerCalculator.prototype.constuctor = EngineerCalculator;

EngineerCalculator.prototype.pow = function(num, exponent) {
    if (checkArgument(arguments)) {
        this.result = Math.pow(num, exponent);
    }
    return this;
}

EngineerCalculator.prototype.sqrt = function(num) {
    if (Number.isFinite(num)) {
        this.result = Math.sqrt(num);
    }
    return this;
}

EngineerCalculator.prototype.cbrt = function(num) {
    if (Number.isFinite(num)) {
        this.result = Math.cbrt(num);
    }
    return this;
}

EngineerCalculator.prototype.abs = function(num) {
    if (Number.isFinite(num)) {
        this.result = Math.abs(num);
    }
    return this;
}