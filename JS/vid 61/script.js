let random = Math.random()
console.log(random)
let a = prompt("ENter the first number")
let b = prompt("select operation")
let c = prompt("ENter the third number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random>0.1){
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
    
}
else{
    //perform wrong operation
    b = obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)

    
}