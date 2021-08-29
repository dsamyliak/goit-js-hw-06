// ------------------------------------------------------------------------
// 01-vars

// const priceTop = 100;
// const description = "About product";
// let xyz = 'Text';

// console.log("Top price =", priceTop);
// console.log(description);
// console.log("xyz =",xyz);

// ------------------------------------------------------------------------
// 02-input

// ok - true / cancel - false

// const shouldRenew = confirm("Do you want to renew subscribing?");
// console.log(shouldRenew);


//ok - string = '', cancel - object = null
// let quantity = prompt('What quantity?');

// console.log(typeof (quantity));
// console.log(quantity);


// quantity = Number(quantity);
// // 
// console.log(quantity);
// console.log(typeof quantity);

// ------------------------------------------------------------------------
// 03-numbers

// let elementWidth = '50px';
// const resultWidth = Number.parseInt(elementWidth);

// console.log(resultWidth);

// let elementHeight = '200.74px';
// const resultHeight = Number.parseFloat(elementHeight);

// console.log(resultHeight);

// let salary = 75789.1345667;
// console.log('text salary -', salary.toFixed(2));

// salary = salary.toFixed(2);
// console.log('number salary -', Number(salary));

// salary = Number(salary.toFixed(2));
// console.log('number salary -', salary);

// let quantity = '30';
// let value = 'This string impossible to convert to number';

// true 1 / false 0
// console.log(Number(true));
// console.log(Number(false));


// NaN - not a number
// console.log(Number('asdsa'));


// // Object Math
// // 2to3 - two to the third power
// const base = 2;
// const power = 3;

// const result = Math.pow(2, 3);
// console.log(result);

// let resultVariables = Math.pow(base, power);
// console.log(resultVariables);


// // baseINpower = 2in5 = 32
// const baseTwo = 2;
// const powerTwo = 5;
// const resultMin = Math.pow(baseTwo, powerTwo);
// console.log(resultMin);

// // 2in5 = 32
// console.log(2 ** 5);
// console.log(baseTwo ** powerTwo);
 

// // Script to power some number to some power
// let base = prompt('Write a number');
// base = Number(base);
// console.log(base);

// let power = prompt('Write a power');
// power = Number(power);
// console.log(power);

// let result = base ** power;
// console.log(result);


// Math.random() Math.round()

// const max = 10;
// const min = 5;

// console.log(Math.random() * (max - min) + min);

// const randomNumber = Math.round((Math.random() * (max - min) + min));
// console.log(randomNumber);

// console.log(Math.round((Math.random() * (max - min) + min)));


// ------------------------------------------------------------------------
// 04-strings

// 123456789 - string.length = 9

const message1 = "123456789"
console.log(message1.length);

const message = "Hello"
console.log("Hello consist 5 symbols =", message.length);

// concatenation

const firstName = "Ivan";
const lastName = "Deerov";

const fullName = firstName + ' ' + lastName;
console.log(fullName);

const room = 716;
const typeRoom = "VIP";

const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + typeRoom + ' номер ' + room + '.';
console.log(welcomeMsg);

// ` ` ${variable}
console.log(`${firstName} ${lastName} is a american John Deer!`);

// Подивимось на різний порядок операндів.
console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

// Методи toLowerCase() і toUpperCase() і normalized


// const brand = 'Samsung';
// const inDb = 'samsung';
// const normalizedBrand = brand.toLowerCase();

// console.log(brand + ' ' + normalizedBrand);

let brand = 'samSuNg';
console.log(brand[0]);
console.log(brand[1]);
console.log(brand[2]);
console.log(brand[3]);
console.log(brand[4]);
console.log(brand[5]);
console.log(brand[6]);

console.log("");
console.log('');


console.log(brand.slice(3).toUpperCase());
console.log(brand.slice(3).toLowerCase());

brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
console.log('samSuNg convert to Samsung:', brand);