var users = ["Asal", "Ali", "Fahad", "Admin"];
users.forEach(function (users) {
    if (users.indexOf("Admin") !== -1) {
        console.log("Hello Admin, would you like to review status report?");
    }
    if (users.indexOf("Admin") == -1) {
        console.log("Hello", users);
    }
});
