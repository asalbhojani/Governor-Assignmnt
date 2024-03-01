var guests = ["Shahrukh Khan", "Song Jong Ki", "Lee Min Ho"];
guests.forEach(function (guests) {
    console.log("Heyaa! " + guests + ", So there's a slight change in plan ,I have ordered a bigger dinner dinning table so that all our friends could come and attend the dinner.I will update you soon when everything is finalised.Bye \n");
});
guests.unshift("Deepika Padukone");
guests.splice(2, 0, "Kiara Advani");
guests.push("Han Seo Jun");
// console.log(guestlist);
guests.forEach(function (guests) {
    console.log("Dear " + guests + ", I would like to invite you to my birthday dinner which is held on Saturday.It would be an honour if you could join us. \n Thankyou");
});
