//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guests : string[]=["Shahrukh Khan","Song Jong Ki","Lee Min Ho"];

guests.forEach(guests => {
    console.log("Heyaa! "+guests+", So there's a slight change in plan ,I have ordered a bigger dinner dinning table so that all our friends could come and attend the dinner.I will update you soon when everything is finalised.Bye \n");
});

guests.unshift("Deepika Padukone");

guests.splice(2,0,"Kiara Advani");

guests.push("Han Seo Jun");
// console.log(guestlist);

guests.forEach(guests => {
    console.log("Dear "+guests+", I would like to invite you to my birthday dinner which is held on Saturday.It would be an honour if you could join us. \n Thankyou");
});

