// 6️⃣ map()
// 🟢 Problem:
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
   { id: 3, name: "Laop", price: 500001 },
  { id: 4, name: "Pone", price: 200002 },
   { id: 5, name: "Lptop", price: 5000 },
  { id: 6, name: "Phoe", price: 200030 }
];

// Return a new array where:

// Add 18% GST to each price

// Add new property: inStock: true

// Do NOT mutate original array.
products.map((e) => 
    {
        console.log({id :e.id ,name : e.name , price : e.price , discountamt :e.price - e.price*18/100 , inStock: true })
    }

)