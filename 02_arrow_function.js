// function Calculator() {
//   this.value = 0;

//   setInterval(function () {
//     this.value++;
//     console.log(this.value);
//   }, 1000);
// }

// new Calculator();

let Calc = () =>{
    value = 0;

    let interval = setInterval(() =>{
        value ++
        console.log(value);

        if(value == 3){
    clearInterval(interval)
    }
        
    },1000)
    
}
Calc()