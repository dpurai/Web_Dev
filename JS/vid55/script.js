console.log('hello world what is up')

var a = 5;
var b = 5;

var c = "hello";

// var 34a = "hello"; not allowed

console.log(a + b + 9)
console.log(typeof a , typeof b , typeof c)

// const a = 12;
// a = a + 1;  not allowed


// using 'let' is more better in modern days cuz it makes the variable for blocked scoped
// also 'let' is valid till bracket level
// 'var' is globally scoped
{
let a = 67;

console.log(a)
}

console.log(a)

// object in js is mix of "key": "value"

let o ={
    name: "harry",
    "id code": "6980"
}

console.log(o)
o.salary = "10 crores";
console.log(o)
o.place = "guwahati"
console.log(o)