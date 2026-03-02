// problem:

// Find frequency of each word:

//const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Expected output:

// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }

//   let count =  {apple: 0,
//      banana : 0,
//      orange : 0
//   }
// words.reduce((curr, prev ) =>{
  
//     if(prev == "apple"){
//     count.apple +=1;
//     }else if(prev == "banana"){
//         count.banana +=1;
//     } else count.orange +=1
    
// })
// console.log(count);


// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let count = fruits.reduce((acc, curr) => {
//     if (acc[curr]) {
//         acc[curr] +=1
//     } else {
//         acc[curr] = 1;
//     }
//     return acc;
// }, {});

// console.log(count);



let numbers = [1, 2, 2, 3, 3, 3];
let calc = numbers.reduce((prev , curr) =>{
 if(prev[curr]){ prev[curr] +=1}
 else{prev[curr] = 1 }
return prev
},{})

// console.log(calc);


// let numbers2 = [5, 10, 15, 20];
// let double = numbers2.reduce((acc , curr) =>{
// acc.push(curr + curr);
// return acc

// } , [])

// console.log(double);


// let numbers3 = [1, 2, 3, 4, 5, 6];
// let even = numbers3.reduce((acc , curr) =>{
//     if(curr % 2 == 0){
//         acc.push(curr)
//     }
//     return acc 
// },[])
// console.log(even);

// let numbers4 = [10, 5, 20, 8, 15];
// let max = numbers4.reduce((acc , curr)=>{
//     if(curr > acc){
//         acc = curr
//     }
//     return acc 
// },0)
// console.log(max);

let cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Shoes", price: 2000, quantity: 1 },
  { name: "Cap", price: 300, quantity: 3 }
];

// let calc_price = cart.reduce((acc , curr)=>{
//     acc += (curr.price * curr.quantity)
//     return acc 

// } , 0)
// console.log(calc_price);

//***************************************************************************************************** */


let users = [
  { name: "Raza", role: "admin" },
  { name: "Ali", role: "user" },
  { name: "Ahmed", role: "admin" },
  { name: "Zaid", role: "user" },
  { name: "Omar", role: "moderator" }
];

let useraccess = users.reduce((acc , curr) =>{
    let role = curr.role
    if(!acc[role]){
        acc[role] = []
    }
    acc[role].push(curr.name)
    return acc 
}, {})

console.log(useraccess);


// 🎯 Task:

// Using reduce, convert it into this format:

// {
//   admin: ["Raza", "Ahmed"],
//   user: ["Ali", "Zaid"],
//   moderator: ["Omar"]
// }