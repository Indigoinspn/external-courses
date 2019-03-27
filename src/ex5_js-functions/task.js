var сalculator = {
    result: 0,
    add: function add(num) {
        сalculator.result += num;
        return add;
    },
    subtract: function subtract(num) {
        сalculator.result -= num;
        return subtract;
    },
    divide: function divide(num) {
        сalculator.result /= num;
        return divide;
    },
    multiply: function multiply(num) {
        сalculator.result *= num;
        return multiply;
    },
    getResult: function getResult() {

        return сalculator.result
    },
    reset: function reset() {
        сalculator.result = 0
        return reset;
    },
}

module.exports = calculator;