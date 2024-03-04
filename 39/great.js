var magician_Names = ["Harry Harvard", "David Copperfield", "Penn Jillette", "James"];
function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function makegreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    showMagicians(magician_Names);
}
makegreat(magician_Names);
