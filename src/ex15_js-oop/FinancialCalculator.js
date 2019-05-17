function FinancialCalculator() {
    Calculator.call(this);
}

FinancialCalculator.prototype = Object.create(EngineerCalculator.prototype);

FinancialCalculator.prototype.oppositeSign = function(num) {
    if (Number.isFinite(num)) {
        this.result = num *(-1);
    }
    return this;
}

// Формула расчета сложных процентов
// p - изначальная сумма вклада.
// i – депозитная годовая ставка. 
// k – число дней в периоде, через который начисляется доход.
// t – число дней в году. 
// n – число капитализаций дохода в течение всего срока депозита.
// результат - первоначальной суммы размещенных денежных средств, плюс начисленные проценты.

FinancialCalculator.prototype.compoundInterest = function(p, i, k, t, n) {  
    if (Number.isFinite(p && i && k && t && n)) {                              
        this.result = p * Math.pow( 1 + (i * k /(t * 100) ), n);            
    }                                                                          
    return this;                                                            
}                                                                              

//сколько составляет определенный процент от переданного числа
FinancialCalculator.prototype.perсentFromNum = function(perсent, num) {
    if (Number.isFinite(perсent && num)) {                               
        this.result = num * perсent /100;            
    }                                                                           
    return this;
}

//сколько процентов составляет первое число от второго 
FinancialCalculator.prototype.compareNum1toNum2InPercent = function(num1, num2) {
    if (Number.isFinite(num1 && num2)) {                               
        this.result = num1 * 100 /num2;            
    }                                                                           
    return this;
}

//от какой величины число составляет определенный процент 
FinancialCalculator.prototype.fromAmountNumIsEqualToPercent = function(num,perсent) {
    if (Number.isFinite(num && perсent)) {                               
        this.result = num / perсent * 100;            
    }                                                                           
    return this;
}

//на сколько процентов число первое число больше второго?
FinancialCalculator.prototype.num1GreaterThanNum2InPercent = function(num1, num2) {
    if (Number.isFinite(num1 && num2)) {                               
        this.result = (num1 - num2)/num2 * 100;            
    }                                                                           
    return this;
}