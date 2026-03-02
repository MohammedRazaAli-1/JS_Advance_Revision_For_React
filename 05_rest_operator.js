// 🔥 5️⃣ Rest Operator
// 🟢 Problem:

// Create a function:

// calculateTotal(discount, ...prices)

// It should:

// Add all prices

// Apply discount percentage

// Return final price

// Example:

// calculateTotal(10, 100, 200, 300)


let calculateTotal =(discount , ...items) =>{
    let myitems = items;
    console.log(myitems);
    
    let sum = myitems.reduce((init  , curr) =>{ return (init +=curr)})
    console.log(sum);
    
    let mydiscount = sum * discount / 100 ;
    console.log(mydiscount);
    
    let final_value = sum - mydiscount
    console.log(final_value);
    

}

calculateTotal(10 , 100,200,300)