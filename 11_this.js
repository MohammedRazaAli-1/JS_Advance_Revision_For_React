// const user = {
//   name: "Raza",
//   greet: function () {
//     setTimeout(function () {
//       console.log("Hello " + user.name);
      
//     },1000);
//   }
// };
// let a = user
// a.greet()

const user1 ={
    name : "razaali",
    greet : function (){
        setTimeout( () => {
            console.log("hello " +  this.name);
            
        } , 1000)
    }
}

let a = user1
a.greet()
// Why does it print undefined?
// Fix it properly.