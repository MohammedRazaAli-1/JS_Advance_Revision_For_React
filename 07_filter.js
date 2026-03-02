// 7️⃣ filter()

// 🟢 Problem:
const users = [
  { name: "Ali", active: true },
  { name: "Raza", active: false },
  { name: "Ahmed", active: true }
];

// Return:
// Only active users
// Then return just their names
// Chain methods properly

let active = users.filter((obj) => (obj.active ==true ))
active.map((e) =>{console.log(e.name)})
