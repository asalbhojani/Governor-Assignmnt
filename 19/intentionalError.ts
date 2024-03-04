//22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let product: {  name: string ,price: number ,category:string}[] = [
    {  "name": "Kurkure" ,"price":50,"category":"Chips" },
    {  "name": "Candi" ,"price":40,"category":"Biscuit"},
    {  "name": "Cheetos" ,"price":50,"category":"Chips" },
    {  "name": "Cola Next" ,"price":100,"category":"Beverage"},
    {  "name": "Chocolato" ,"price":20,"category":"Biscuit"},
    {  "name": "Fizz Up" ,"price":110,"category":"Beverage"},
];

console.log(product[7]);

product.forEach(product => {
    
        console.log("Name: ",product.name,"\n Price:",product.price,"\nCategory: ",product.category,"\n ____________________");
    
});