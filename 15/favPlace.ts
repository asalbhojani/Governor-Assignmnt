let favPlace : string[]=["Venice","Switzerland","Singapore","Thailand","Paris"];

console.log("Original List");
console.log(favPlace);
var sorted=favPlace.slice(0).sort();
console.log("Alphabetical Order");
console.log(sorted,"\n");

console.log("Original List");
console.log(favPlace);
var sortedReversed=favPlace.slice(0).sort().reverse();
console.log("Reverse Alphabetical Order");
console.log(sortedReversed,"\n");

console.log("Original List");
console.log(favPlace);
var Reversed=favPlace.reverse();
console.log("Reverse List");
console.log(Reversed,"\n");

console.log("Original List");
console.log(favPlace);
console.log("Permanently converted to Alphabetical Order");
console.log(favPlace.sort(),"\n");

console.log("Alphabetical Order");
console.log(favPlace);
console.log("Reverse Alphabetical Order");
console.log(favPlace.reverse());