//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let Names:string[]=["Ali","Mohammad","Ahad","Aamir","Fahad"];
// let message:string="Hey!"
// console.log(message,Names[4]);

Names.forEach(Names => {
    console.log("Hey "+Names+", Where have you been?");
});