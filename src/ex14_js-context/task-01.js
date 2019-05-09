var Calculator = {
    result: 0,
    add: function add(num) {
        if (Number.isFinite(num)) {
            this.result += num;
        }
        return this;
    },
    subtract: function subtract(num) {
        if (Number.isFinite(num)) {
            this.result -= num;
        }
        return this;
    },
    divide: function divide(num) {
        if (Number.isFinite(num)) {
            this.result /= num;
        }
        return this;
    },
    multiply: function multiply(num) {
        if (Number.isFinite(num)) {
            this.result *= num;
        }
        return this;
    },
    getResult: function getResult() {
        return this.result
    },
    reset: function reset() {
        this.result = 0
        return this;
    },
    setState: function setState(num) {
        if (Number.isFinite(num)) {
            this.result = num;
        }
        return this;
    },
    fetchData: function fetchData(fun) {
        setTimeout(fun, 1000, 500);
        return this
    },
}

module.exports = Calculator;    