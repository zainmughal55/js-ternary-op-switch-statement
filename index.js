// ternary/conditional op
// switch statements

var firstName = 'Zain';
var age = 26;

age >= 18 ? console.log(firstName + ' drink beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

// try this with if-else

// if (age >= 18) {
//   drink = 'beer';
// } else {
//   drink = 'juice';
// }

// switch statements
var job = 'driver';

switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.')
    break;
  default:
    console.log(firstName + ' does something else.');
} 


// change this if-else to switch

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//   // between 13 and 20
//   console.log(firstName + " is a teenager.");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a young man.");
// } else {
//   console.log(firstName + " is a man.");
// }

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
}













