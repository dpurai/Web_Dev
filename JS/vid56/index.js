console.log("hello there im not mulla")

let age = 18;
let grace = 2;

console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)

if(age>18){
    console.log("You can drive")
}

else{
    console.log("You cannot drive")
}
let a =1;
let b = 3;

let c = (a<b)?(a - b):(b-a)

/* this translates to :

if(a<b){
    let c = a-b
}
else{
    let c = b - a
}
*/
console.log(c)