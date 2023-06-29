const math = require('mathjs');


console.log(Math.log(8) / Math.log(2));

mylogTest = () => {
  console.log(math.log(10000, 10));
}

myFirstExpression = () => {
  console.log(math.evaluate('12 / (2.3 + 0.7)'));
}

_LoanPaymentCalculator = (Cost, DownPayment, TradeInValue, SalesTax, Interest, Term) => {

  const loanAmount = Cost * SalesTax * Interest * Term - DownPayment - TradeInValue;

  console.log(loanAmount);
}

_LoanPaymentCalculator(25000, 3000, 0, 1, 4.61, 48);

mylogTest();
myFirstExpression();



