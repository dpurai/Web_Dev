console.log("helloo loppy loops")

let a =1

for(let i = 0 ; i<100;i++){
    console.log(a + i) 
}

// basic syntax of object:
// let smt = {
//     "key" = "value"
// }


let obj = { 
    name: "Dipu",
    job: "student",
    salary: "none"
}

for (const key in obj) { //used to get only the keys from the object
    console.log(key)
}

for (const a of "Dipu") { //used for iterable DS like string,array etc
     console.log(a)
}

// while loop
let i =0

while(i<6){
    console.log(i)
    i++
}
// do-while loop
let j = 10

do{
    console.log(j)
    j++
}while(j<6)