//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let products: {  name: string ,price: number ,category:string}[] = [
    {  "name": "Kurkure" ,"price":50,"category":"Chips" },
    {  "name": "Candi" ,"price":40,"category":"Biscuit"},
    {  "name": "Cheetos" ,"price":50,"category":"Chips" },
    {  "name": "Cola Next" ,"price":100,"category":"Beverage"},
    {  "name": "Chocolato" ,"price":20,"category":"Biscuit"},
    {  "name": "Fizz Up" ,"price":110,"category":"Beverage"},
];

// for(let p in products){
//    let n= {p.name};
//    console.log({p.name})
// }
console.log("Chips\n");
products.forEach(products => {
    
    if(products.category=="Chips"){
        console.log("Name: ",products.name,"\n Price:",products.price,"\nCategory: ",products.category,"\n ____________________");
    }

});


console.log("\nBiscuit\n");
products.forEach(products => {

    if(products.category=="Biscuit"){
        console.log("Name: ",products.name,"\n Price:",products.price,"\nCategory: ",products.category,"\n ____________________");
    }

});


console.log("\n Beverage\n");
products.forEach(products => {

    if(products.category=="Beverage"){
        console.log("Name: ",products.name,"\n Price:",products.price,"\nCategory: ",products.category,"\n ____________________");
    }
});