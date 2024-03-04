var alienColor = "red";
//Here else block will execute
if (alienColor === 'green') {
    console.log("Congratulations Player! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations Player! You just earned 10 points.");
}
alienColor = "green";
//Here if block will execute
if (alienColor === 'green') {
    console.log("Congratulations Player! You just earned 5 points.");
}
else {
    console.log("Congratulations Player! You just earned 10 points.");
}
