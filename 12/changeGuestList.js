var guestlist = ["Albert Einstein", "Song Jong Ki", "Lee Min Ho"];
var gwc = guestlist[0];
console.log(gwc + " Cannot attend the birthday Dinner.");
var newGuest = "Shahrukh Khan";
guestlist[0] = newGuest;
console.log("Our New guest is " + newGuest);
guestlist.forEach(function (guestlist) {
    console.log("\nDear " + guestlist + ", I would like to invite you to my birthday dinner which is held on Saturday.It would be an honour if you could join us. \n Thankyou");
});
