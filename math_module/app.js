const MathLibrary = require('./mathlib');
const math = new MathLibrary();

const num1 = 1;
const num2 = 35;

console.log('The sum of num1 and num2 is : ', math.add(num1, num2));
console.log('The multiple of number 1 and 2:', math.multiply(num1, num2));
console.log('The square nr :', math.square(num1, num2));
console.log(
    'The random number between num1 and num2 :',
    math.random(num1, num2)
);