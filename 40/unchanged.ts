//43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician_names: string[] =  ["Harry Harvard", "David Copperfield", "Penn Jillette", "James"];

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => "the Great " + magician);
}

function showmagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

let originalMagicians: string[] = magician_names.slice();

let greatMagicians: string[] = make_great(magician_names);

console.log("Original Magicians:");
showmagicians(originalMagicians);

console.log("\nGreat Magicians:");
showmagicians(greatMagicians);
