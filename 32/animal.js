var animals = ["Dolphin", "Sea Turtle", "Jellyfish"];
console.log("Animals:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log("\nStatements about each animal:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    switch (animal) {
        case "Dolphin":
            console.log("A", animal, " is known for its intelligence and playful behavior.");
            break;
        case "Sea Turtle":
            console.log("A", animal, "is a fascinating marine reptile that travels long distances.");
            break;
        case "Jellyfish":
            console.log("A", animal, " has a unique and delicate appearance.");
            break;
        default:
            console.log("Unknown sea animal.");
    }
}
console.log("\nCommon Characteristics");
console.log("\nAny of these sea animals would be amazing to encounter in the ocean!");
