// # primitive data type

// 7 type : string, number, Boolean, null, undefined, symbol, BigInt


const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

// const bigNumber = 345678890587865n
// bigInt ko represent krne k liye "n" ka use krte hai



//  # Reference (Non primitive)

// Array, objects, Functions

const hero = ["shaktiman", "naagraj", "doga"];

let myObj = { 
    name: "rahwar",
    age: 22,
}


const myfunction = function(){
    console.log("Hello world");
    
}


console.log(typeof outsideTemp);




