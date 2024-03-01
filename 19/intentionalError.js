var product = [
    { "name": "Kurkure", "price": 50, "category": "Chips" },
    { "name": "Candi", "price": 40, "category": "Biscuit" },
    { "name": "Cheetos", "price": 50, "category": "Chips" },
    { "name": "Cola Next", "price": 100, "category": "Beverage" },
    { "name": "Chocolato", "price": 20, "category": "Biscuit" },
    { "name": "Fizz Up", "price": 110, "category": "Beverage" },
];
console.log(product[7]);
product.forEach(function (product) {
    console.log("Name: ", product.name, "\n Price:", product.price, "\nCategory: ", product.category, "\n ____________________");
});
