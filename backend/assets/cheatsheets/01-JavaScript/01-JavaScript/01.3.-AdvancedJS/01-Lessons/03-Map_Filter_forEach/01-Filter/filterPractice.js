// morning activity -
// Build a card reader machine that loops over a sequence of numbers and looks for a match for access. 

const idCards = [
  { name: "Bill", cardNumber: 012345 },
  { name: "Sue", cardNumber: 013345 },
  { name: "Frank", cardNumber: 014345 },
  { name: "Joe", cardNumber: 012545 },
  { name: "Marc", cardNumber: 012645 },
  { name: "Leesa", cardNumber: 012745 },
  { name: "Diana", cardNumber: 012845},
  { name: "Randee", cardNumber: 012945}

]

idCards.forEach(employee => console.log(employee.cardNumber));

const levelOneClearancePerson1 = idCards.filter(function (employee) {
  var admin1 = 012945;
  return employee.cardNumber === admin1;
});

const levelOneClearancePerson2 = idCards.filter(function (employee) {
  var admin2 = 012845;
  return employee.cardNumber === admin2;
});

const levelOneClearancePerson3 = idCards.filter(function (employee) {
  var admin3 = 014345;
  return employee.cardNumber === admin3;
});

const levelOneClearancePerson4 = idCards.filter(function (employee) {
  var admin4 = 012345;
  return employee.cardNumber === admin4;
});

console.log(levelOneClearancePerson1);
console.log(levelOneClearancePerson2);
console.log(levelOneClearancePerson3);
console.log(levelOneClearancePerson4);

