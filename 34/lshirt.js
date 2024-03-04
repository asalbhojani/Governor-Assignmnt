function makeshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A", size, "-sized shirt will be printed with the following message: ", message, ".");
}
// Create a large shirt with the default message
makeshirt();
// Create a medium shirt with the default message
makeshirt("medium");
// Create a shirt of any size with a different message
makeshirt("small", "Never Give Up!");
