// // Create a function:
// // createBankAccount(initialBalance)
// // It should return:
// // deposit(amount)
// // withdraw(amount)
// // getBalance()
// // Balance must NOT be directly accessible.
// // This tests closure concept deeply.

// function createBankAccount(balance) {
//   return {
//     deposit(amount) {
//       balance += amount;
//     },
//     withdraw(amount) {
//       balance -= amount;
//     },
//     getBalance() {
//       return balance;
//     }
//   };
// }

// const account = createBankAccount(1000);

// account.deposit(500);
// console.log(account.getBalance()); // 1500

// function add5 (num) {
//     return {
//          plus5 () {
//             num += 5
//         },
//         minus5(){ 
//         num -= 5 
//                 }
                
//         ,
//         viewnum(){
//             return(num)
//         }
//     }
// }

// let plusminus = add5(19);
// plusminus.minus5()
// plusminus.minus5()
// plusminus.plus5()
// console.log(plusminus.viewnum());


let ex3 = () =>{
    let myname = "raza"
    console.log(`muzhe ${myname} pata hai ...`);
    function child(){
        console.log(`muzhe bhi ${myname} pata hai `);

        
    }
    child()
    
}
ex3()
