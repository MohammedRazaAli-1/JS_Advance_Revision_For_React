// 1️⃣2️⃣ Promise
// 🟢 Problem:

// Create a promise that:

// Resolves if number > 10

// Rejects if number <= 10

// Then handle both cases properly.

// let number = 6;

// const promise = new Promise((resolve, reject) => {
//     if(number < 10 ){
//         resolve ("number accepted successfully ")

//     }
//     else{
//         reject("Error : number must be greater than 10 ")
//     }
// });
// console.log(promise);



// only for resolve ( success )
// const promise = new Promise((resolve, reject) => {
// resolve("Success ")

// });

// promise.then(data => console.log(data));


// // only for reject ( failed  )
// const promise2 = new Promise((resolve, reject) => {
// reject("failed ")

// });

// promise2.catch(data => console.log(data));

// // for both resolve and reject 

// let promise3 = new Promise( (resolve , reject ) => {
// let a = 9;
// if(a < 10 ){ 
//      resolve("a accepted successfully ...");
   
// }else {
// reject("A not accepted ")
// }

// })

// promise3.then((data) =>{console.log(data)})
// .catch((data) =>{console.log((data));
// })

// // promises using settimeout 

// let promise4 = new Promise ((resolve , reject ) =>{
//     setTimeout(() => {
//         resolve("executed after 1 sec ... ")
//     }, 1000);
// })

// promise4.then(data => console.log(data)
// ) 

// // data passing to next .then ( chaining ... )

// let prmoise5 = new Promise((resolve , reject ) =>{
//     let a = 5;
//     resolve(a)
// })
// prmoise5.then((data) => {return(data *3 )})
// .then((data) =>{return(data * 4)})
// .then((data) =>{return ( (data + 30) / 2)})
// .then(data =>console.log(data)
// )

// // loging system mini program 

// function login(password) {
//     let authenticate = new Promise((resolve , reject )=>{
//         if(password == "1234"){
//             resolve("Login successfully ...")
//         }
//         else{
//             reject("Login failed... | enter correct password ")
//         }
//     })

//     authenticate.then(data => console.log(data))
//     authenticate.catch( data =>console.log(data))
// }
// login("1234");


// // problem 2 

// function checkMarks(marks){
//     return checkmark = new Promise((resolve , reject ) =>{
//         if(marks > 40){
//             resolve("passed ...")
//         }else{
//             reject("failed ...")
//         }
//        })
       
// }

// let a = checkMarks(30)
// a.then(data => console.log(data))
//        .catch(data => console.log(data))


// ex4 : 
function aijaz(args){
    return new Promise((resolve , reject) =>{
        if(args <12){
            console.log("NO .. ");
            
        }else if(args >= 12){
            console.log("YES ...");
            
        }
    })

}
let b = aijaz("12")
b.then(data => console.log(data)
)