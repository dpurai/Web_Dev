let a = "Dipu"

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a.length)


let b = "Saya"
let c = "kuki"

console.log("my gf name is " +  b  + " and her nickname is " + c)

// alternate way

console.log(`My gf name is ${b} and her nickname is ${c}`)


let d = "Bhudhai"

console.log(d.toUpperCase())
console.log(d.toLowerCase())
console.log(d.slice(2,4)) //from index 2 to 4 , it prints
console.log(d.slice(2)) //from index 2 to end , it prints
console.log(d.replace("Bhu", "tit"))
console.log(d.concat(a)) //add together

// strings once created are immutable
//like is b is set to some strings then after many operation done on b still b will be the same


