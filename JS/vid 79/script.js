let a = prompt("Enter firsst number")

let b = prompt("enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not possible, please enter a appropriate one")
}
let sum = parseInt(a) + parseInt(b) //parseInt is used to give a integer value to some variable nahitoh it would consider the a,b as strings


try {
    console.log("The sum is ", sum*x)
    
} catch (error) {
    console.log("error agaya bhaiaya")
}

finally{
    console.log("The files are closed and db is also closing")
}



/*finally is used to display the final msg , it is neccessary cuz shown below
 function main(){
  let x = 1;
    try {
    console.log("The sum is ", sum*x)
    return true

} catch (error) {
    console.log("error agaya bhaiaya")
    return false
}

finally{
    console.log("The files are closed and db is also closing")
}
 here after return statement in (try and catch)niche ka code toh chalta nhi,it would end and hence the final msg wouldnt have be shown if no finally was there
 */
