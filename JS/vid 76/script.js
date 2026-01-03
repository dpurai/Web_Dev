// async function getdata(){

//     //to simultae getting data from the server
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);

//     })
// }
/* settle means resolve or reject
    resolve means promise has been successfully settle
    reject means promise has not been succesfully settle
    */
async function getdata(){

let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    return 455

}
async function main(){
console.log("loading modules")


console.log("Do something else")

console.log("load data")

let data  = await getdata()

console.log(data)

console.log("process data")

console.log("task 2")
}

main()