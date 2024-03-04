var currentUsers = ["Asal", "Ali", "Fahad", "Nida", "Mohammad"];
var newUsers = ["Ahmed", "ASAL", "Rimsha", "fahad", "Anas"];
newUsers.forEach(function (newUser) {
    var isExisting = currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); });
    if (isExisting) {
        console.log(newUser, "already exists!");
    }
    else {
        console.log(newUser, "is available");
    }
});
// let currentUsers:string[]=["Asal","Ali","Fahad","Nida","Mohammad"];
// let newUsers    :string[]=["Ahmed","ASAL","Rimsha","fahad","Anas"];
// newUsers.forEach(newUsers => {
//     currentUsers.forEach(currentUsers => {
//         if(newUsers.toLowerCase() ==currentUsers.toLowerCase())
//         {  
//             console.log(newUsers,"already exists!");  
//         } 
//         else{
//             console.log(newUsers,"is available")
//         }
//     });
// });
// for(var i=0; i<newUsers.length; i++)  
// {  
//     let n = newUsers[i];  
//     console.log(n);
//     for(var i=0; i<currentUsers.length; i++)  {
//      let b=currentUsers[i];
//      if(n === b){  
//         console.log(n,"already exists !");  
//       } 
//       else{
//         console.log(n,"is available")
//       }
//     }
// }
