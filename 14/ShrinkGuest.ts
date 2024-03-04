//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList : string[]=[
    'Deepika Padukone',
    'Shahrukh Khan',
    'Kiara Advani',
    'Song Jong Ki',
    'Lee Min Ho',
    'Han Seo Jun'
  ];

  console.log("Sorry , the dinner table has not arrived so I can invite only two people for birthday dinner.");

  while(guestList.length>2){
    var remove=guestList.pop();
    console.log("Sorry",remove,", You are not invited in dinner.");
  }

  guestList.forEach(guestList => {
    console.log("\nDear "+guestList+", I would like to invite you to my birthday dinner which is held on Saturday.It would be an honour if you could join us. \n Thankyou");
});

guestList.pop();
guestList.pop();

console.log(guestList);