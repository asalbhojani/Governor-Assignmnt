//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician_Names: string[] = ["Harry Harvard", "David Copperfield", "Penn Jillette", "James"];

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}


function makegreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
        
    }
    showMagicians(magician_Names);
}

makegreat(magician_Names);


