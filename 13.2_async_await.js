// Problem: Parallel vs Sequential
// Create 3 functions
// task1() → 2 seconds → returns "Task 1 done"
// task2() → 2 seconds → returns "Task 2 done"
// task3() → 2 seconds → returns "Task 3 done"
// Part A — Sequential
// Use async/await normally:
// await task1();
// await task2();
// await task3();
// 👉 Total time should be ~6 seconds.
// Part B — Parallel (IMPORTANT)
// Now use:
// Promise.all()
// So all 3 tasks run together.
// 👉 Total time should be ~2 seconds.
// 🎯 Goal
// Understand difference between sequential and parallel async execution
// This concept is VERY important for React API optimization.


function task3(){ return new Promise ((resolve ) => {setTimeout( ()=>{resolve("task 3 done ...")},2000)})}
function task2(){ return new Promise ((resolve , reject ) => {setTimeout( ()=>{reject("task 2 failed ...")},2000)})}
function task1(){ return new Promise ((resolve ) => {setTimeout( ()=>{resolve("task 1 done ...")},2000)})}

async function call(){
    try{
    // let a =  await task1()
    // console.log(a);
    
    // let b = await task3()
    // console.log(b);
    
    // let c = await task2()
    // console.log(c);
    let allpromises = await Promise.all ( [ task1() , task3() , task2()])
    console.log(allpromises);
    
    
    
}catch (error){
    console.log(error);
    
}

}
call()