const user = {
  id: 101,
  personal: {
    name: "Raza",
    age: 21
  },
  skills: ["JS", "React", "Node"]
};
// Extract:
// name
// age
// second skill
// Using destructuring in one statement.
let {personal :  {name , age } ,  skills :[ , skill2] } = user
console.log(name);
console.log(age);
console.log(skill2);


