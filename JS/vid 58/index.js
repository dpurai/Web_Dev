function nice(name) {
    console.log("hey " + name  + " you are very nicee")
    console.log("hey " + name  + " you are very sweet")
    console.log("hey " + name  + " you are handsome")
    console.log("hey " + name  + " your armpits smells")
}

nice("Dipu")

function sum(a,b) {
    console.log(a + b)
    
}

sum(3,10)


function sum1(c,d){
    return (c + d) // return is used to put value in a variable
}
result  = sum1(3,7)
console.log("The sum of the 2 numbers is : ", result) 


// default parameter can also be used
// for eg

function aloo(a,b, c = 2){ //here c is default parameter
    return(a + b + c)
}

result1 = aloo(3,5) //if c is passed smt here then passed one will be considered

console.log("the sum of aloo is " , result1)


const func1 = (x) =>{
    console.log("This is a arrow function",x) //having this can help in passing a function in another function
}
func1(34)
func1("45ehruehf")

