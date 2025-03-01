// console.log("R");
// console.log("A");
// console.log("H");
// console.log("W");
// console.log("A");
// console.log("A");
// console.log("R");

// // function sayMyName(){
// //     console.log("R");
// //     console.log("A");
// //     console.log("H");
// //     console.log("W");
// //     console.log("A");
// //     console.log("A");
// //     console.log("R");

// // }
// sayMyName()

function addTWoNumber(number1, number2){

    let result = number1 + number2
    // return result  // result likne k baad kuch bhi print nhi hota hai
    return number1 + number2
    
}

addTWoNumber(3 , 4)
addTWoNumber(3, "4") // 4 ko string le skta hai
addTWoNumber(3, "a")
const result = addTWoNumber(3, 5)

// console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
        

    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rahwar"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())


