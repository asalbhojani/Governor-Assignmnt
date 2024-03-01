var guestList = [
    'Deepika Padukone',
    'Shahrukh Khan',
    'Kiara Advani',
    'Song Jong Ki',
    'Lee Min Ho',
    'Han Seo Jun'
];
console.log("Sorry , the dinner table has not arrived so I can invite only two people for birthday dinner.");
while (guestList.length > 2) {
    var remove = guestList.pop();
    console.log("Sorry", remove, ", You are not invited in dinner.");
}
guestList.forEach(function (guestList) {
    console.log("\nDear " + guestList + ", I would like to invite you to my birthday dinner which is held on Saturday.It would be an honour if you could join us. \n Thankyou");
});
guestList.pop();
guestList.pop();
console.log(guestList);
