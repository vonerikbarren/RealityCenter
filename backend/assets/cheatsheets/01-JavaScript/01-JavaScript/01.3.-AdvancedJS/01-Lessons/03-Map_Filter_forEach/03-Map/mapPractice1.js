const paymentArray = [3.50, 4.25, 2.33, 4.28, 5.23, 10.23, 19.99, 20.99]

console.log("Original Array:");
console.log(paymentArray);
console.log(" ");

const doubledpaymentArray = paymentArray.map(data => data * 2);
console.log("Doubled Array: ");
console.log(doubledpaymentArray);
console.log(" ");

const tripledPaymentArray = paymentArray.map(data => data * 3);
console.log("Tripled Array: ");
console.log(tripledPaymentArray);
console.log(" ");


const oddOrEven = paymentArray.map(num => (num % 2 === 0 ? "even" : "odd"));
console.log("Odd or Even: ");
console.log(oddOrEven);
console.log(" ");



