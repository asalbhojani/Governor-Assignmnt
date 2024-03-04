//35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals: string[] = ["Dolphin", "Sea Turtle", "Jellyfish"];

console.log("Animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.log("\nStatements about each animal:");
for (let animal of animals) {
    switch (animal) {
        case "Dolphin":
            console.log("A",animal ," is known for its intelligence and playful behavior.");
            break;
        case "Sea Turtle":
            console.log("A",animal ,"is a fascinating marine reptile that travels long distances.");
            break;
        case "Jellyfish":
            console.log("A",animal ," has a unique and delicate appearance.");
            break;
        default:
            console.log("Unknown sea animal.");
    }
}

console.log("\nCommon Characteristics");
console.log("\nAny of these sea animals would be amazing to encounter in the ocean!");
