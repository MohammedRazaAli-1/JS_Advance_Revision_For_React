
// ex1 ) 
// const state = {
//   name: "Raza",
//   address: {
//     city: "Pune",
//     pin: 411001
//   }
// };

// // Update only the city to "Mumbai"
// // WITHOUT mutating original object.

// // ⚠️ This tests shallow copy vs deep copy understanding.

// let newstate = {
//   ...state ,
//   address : {
//     ...state.address,
//     city :"mumbai",

//   }
// }

// console.log(newstate);

// ex2 ) 

let user1 = {
  name :"raza" , 
  age : 21,
  education : {
    ssc : "pimperkhede",
    hsc :"chalisgon",
    bca : "nashik",
    mca :"pune"
  } ,
  course_pursuing : "MCA"

}

let user2 = {
  ...user1 , 
  education : {
    ...user1.education , 
    ssc : "chalisgaon"
  
  },
  course_pursuing : "BCA"
};

console.log(user1);
console.log(user2);

