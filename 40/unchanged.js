var magician_names = ["Harry Harvard", "David Copperfield", "Penn Jillette", "James"];
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great " + magician; });
}
function showmagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var originalMagicians = magician_names.slice();
var greatMagicians = make_great(magician_names);
console.log("Original Magicians:");
showmagicians(originalMagicians);
console.log("\nGreat Magicians:");
showmagicians(greatMagicians);
