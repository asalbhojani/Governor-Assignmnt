var text1 = "Asal";
var text2 = "asal";
//Equality and Inequality
console.log(text1 === text2);
console.log(text1 !== text2);
//Lower Case Function
console.log(text1.toLowerCase() === text2);
//equality, inequality, greaterthan, lessthan
var num1 = 2;
var num2 = 6;
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
//and and or operator
var a = 1;
var b = 2;
var c = 3;
console.log(a < b && c > a);
console.log(a > b && c > a);
console.log(a < b && c < a);
console.log(a < b || c < a);
console.log(a > b || c < a);
//item is present in an Array
var favPlaces = [2, 4, 6, 8];
console.log(favPlaces.includes(2));
console.log(favPlaces.includes(3));
//item is not present in an Array
console.log(!favPlaces.includes(4));
console.log(!favPlaces.includes(5));
