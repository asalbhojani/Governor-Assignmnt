//27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

let Color :string= "red";

if (Color==='green'){
    console.log("Congratulations Player! You just earned 5 points for shooting the alien.");
}
else if (Color==='yellow'){
    console.log("Congratulations Player! You just earned 10 points for shooting the alien.");
}
else if (Color==='red'){
    console.log("Congratulations Player! You just earned 15 points for shooting the alien.");
}

Color = "yellow";

if (Color==='green'){
    console.log("Congratulations Player! You just earned 5 points for shooting the alien.");
}
else if (Color==='yellow'){
    console.log("Congratulations Player! You just earned 10 points for shooting the alien.");
}
else if (Color==='red'){
    console.log("Congratulations Player! You just earned 15 points for shooting the alien.");
}

Color = "green";

if (Color==='green'){
    console.log("Congratulations Player! You just earned 5 points for shooting the alien.");
}
else if (Color==='yellow'){
    console.log("Congratulations Player! You just earned 10 points for shooting the alien.");
}
else if (Color==='red'){
    console.log("Congratulations Player! You just earned 15 points for shooting the alien.");
}