const userEmail = []
// blank me kuch bhi show nhi krta hai
// const userEmail = ""


if (userEmail) {
    console.log("Got user email");
    
}
else {
    console.log("Don't have user emai");
    }

// falsy value
// false, 0, -0, BigInt (0n), "", null, undefined, NaN(not a number)

// truthy values
// "0", "false", " ", [], {}, function(){}, 



// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// nullish coaleshing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 




console.log(val1);


// Ternary operatror 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");








