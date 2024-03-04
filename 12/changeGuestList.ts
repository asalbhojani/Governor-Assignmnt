//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.

let guestlist:string[]=["Albert Einstein","Song Jong Ki","Lee Min Ho"];

let gwc:string= guestlist[0];
console.log(gwc+" Cannot attend the birthday Dinner.");

let newGuest:string = "Shahrukh Khan";
guestlist[0]=newGuest;

console.log("Our New guest is "+newGuest);

guestlist.forEach(guestlist => {
    console.log("\nDear "+guestlist+", I would like to invite you to my birthday dinner which is held on Saturday.It would be an honour if you could join us. \n Thankyou");
});

