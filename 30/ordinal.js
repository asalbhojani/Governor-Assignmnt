var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach(function (num) {
    if (num === 1) {
        console.log(num, "st\n");
    }
    else if (num === 2) {
        console.log(num, "nd\n");
    }
    else if (num === 3) {
        console.log(num, "rd\n");
    }
    else {
        console.log(num, "th\n");
    }
});
