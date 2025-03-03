//  ...--REst k wajah se sbb array me aa gya hai
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "handleObject",
    price: 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
    
}

// handleObject(user)
handleObject({
    username : "sam",
    price: 399,
})


const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 400, 500, 1000]));
