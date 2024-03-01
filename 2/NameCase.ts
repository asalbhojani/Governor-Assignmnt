//To Lower Case
let name1:string = "ASAL FATIMA";
let lowerCaseName =name1.toLowerCase();
console.log(lowerCaseName);

//To Upper Case
let name2:string = "asal fatima";
let UpperCaseName =name1.toUpperCase();
console.log(UpperCaseName);

//To Title Case
let name3:string = "asal fatima"
let titleCaseName = name3.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log(titleCaseName)