//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

let text1:string="Asal";
let text2:string="asal";

//Equality and Inequality
console.log(text1===text2);
console.log(text1!==text2);

//Lower Case Function
console.log(text1.toLowerCase()===text2);

//equality, inequality, greaterthan, lessthan
let num1:number=2;
let num2:number=6;

console.log(num1==num2);
console.log(num1!=num2);
console.log(num1>num2);
console.log(num1<num2);
console.log(num1<=num2);
console.log(num1>=num2);

//and and or operator
let a:number=1;
let b:number=2;
let c:number=3;

console.log(a<b && c>a);
console.log(a>b && c>a);
console.log(a<b && c<a);
console.log(a<b || c<a);
console.log(a>b || c<a);

//item is present in an Array
let favPlaces =[2,4,6,8];

console.log(favPlaces.includes(2));
console.log(favPlaces.includes(3));

//item is not present in an Array
console.log(!favPlaces.includes(4));
console.log(!favPlaces.includes(5));