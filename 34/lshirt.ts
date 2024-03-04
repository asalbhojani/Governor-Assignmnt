//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeshirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log("A", size,"-sized shirt will be printed with the following message: ",message,".");
}

// Create a large shirt with the default message
makeshirt();

// Create a medium shirt with the default message
makeshirt("medium");

// Create a shirt of any size with a different message
makeshirt("small", "Never Give Up!");
