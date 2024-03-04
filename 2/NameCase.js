//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//To Lower Case
var name1 = "ASAL FATIMA";
var lowerCaseName = name1.toLowerCase();
console.log(lowerCaseName);
//To Upper Case
var name2 = "asal fatima";
var UpperCaseName = name1.toUpperCase();
console.log(UpperCaseName);
//To Title Case
var name3 = "asal fatima";
var titleCaseName = name3.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
console.log(titleCaseName);
