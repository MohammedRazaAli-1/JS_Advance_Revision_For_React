function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Raza", age: 21 });
        }, 2000);
    });
}

async function main() {
    try {
        let user = await getUserData();
        console.log(`User name is ${user.name} and age is ${user.age}`);
    } catch (error) {
        console.log(error);
    }
}

// main();


function getuser(){
let obj = { name : "razaali" , age : 22}
return new Promise((resolve , reject) =>{
setTimeout( ()=>{
    resolve(obj)
},2000)
})
}


async function main2(){
let a =  await getuser()
console.log(`user name :  ${a.name} and age is ${a.age}`);


}

// main2()

// ex3 

function checkage (age){
    return new Promise( (resolve , reject )=>{
        if(age >18){
            resolve("you are eligible ");
            
        }else{
            reject("you are not eligible ")
        }
    })

}

async function mymain() {
    
    try{
        let check =  await checkage(27)
        console.log(check);
        
    }catch (error) {
        console.log(error);
    }   
}
// mymain()



/*
Problem: Order System Simulation
You need to simulate a food ordering system.
Requirements:
Create a function:
placeOrder(item)
It should return a Promise.
After 2 seconds:
If item is "pizza" → resolve "Pizza is ready 🍕"
Otherwise → reject "Item not available ❌"
Create an async function:
orderFood()
Use await to call placeOrder
Use try/catch
Print the result properly

*/

function placeOrder(order){
    return new Promise((resolve , reject ) =>{
        setTimeout(() => {
            
        if(order =="pizza"){
            resolve(  order +  " is ready...")
        }
        else{
            reject("Item not available")
        }

        }, 2000);
        
    })
}

async function orderFood (order1){
    try{ 
    let myorder = await placeOrder(order1)
    console.log(myorder);
    
    }catch (error) {
        console.log(error);
        
    }
}
// orderFood("pizza")

/*

🧠 Problem: Multi-Step Order Process
You must simulate 3 steps:
selectItem() → takes 1 second → returns "Pizza selected"
makePayment() → takes 2 seconds → returns "Payment successful"
prepareFood() → takes 2 seconds → returns "Food prepare
Requirements:
Each function returns a Promise
Use async/await
Execute them in correct order
Print all steps in order
🎯 Expected Output (with delays)
Pizza selected
Payment successful
Food prepared
Order completed successfully 🎉
🚨 Important
Must use await for each step
Must use try/catch
Do NOT use .then()
*/

function selectItem (item){
    return new Promise((resolve ,reject )=>{
        setTimeout( ()=>{
        if(item ==="pizza"){
            resolve(item + "selected ..")
        }else{
            reject( item + " Not availale")
        }
        }, 1000)
        
    })
}

function makePayment (money){
    return new Promise((resolve ,reject )=>{
        setTimeout( () =>{
        if(money >= 100){
            resolve("payment suceessfull of rupees " + money);

        }else {
            reject("payment failed enter atleast 100 rupees ... ")
        }
    },2000)
    })
}

function prepareFood(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("food prepared ")
        }, 2000);

    })
}


async function foodOrderSystem(item , money) {
    try {
    let selectitem = await selectItem(item)
    console.log(selectitem);
    
    let makepayment = await makePayment(money)
    console.log(makepayment);

    let preparefood = await prepareFood()
    console.log(preparefood);
    
     
    }catch (error){
        console.log(error);
        
    }
    
}

foodOrderSystem("pizza" , 190)




// function orderprocess() {
//     return new Promise((resolve ,reject ) =>{
//         function  selectItem(item) { new Promise ( (resolve ,reject )=>{
//             setTimeout(() => {
//                 if(item == "pizza"){
//                     resolve(item + "selected ... ")

                    
//                 }else{
//                     reject("not available ")
//                 }
                
//             }, 1000);
        
//         })}

//         function makePayment (money){
//                         new Promise ((resolve ,reject ) =>{
//                             setTimeout(() => {
//                                 if(money >=100){
//                                     resolve("Payment sucessfully credited or rupees :  " + money)
//                                 }else{
//                                     reject("enter atleast 100 rupees ")
//                                 }
                                
//                             }, 1000);
//                         })
//                     }
//     })
// }

