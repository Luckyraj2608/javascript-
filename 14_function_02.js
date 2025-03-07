// ... - is a rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Rahwar",
    price: 199,
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleobject(user)
handleobject({
    username: "sam",
    price: 399,
})

const mynewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(mynewArray));
console.log(returnSecondvalue([200, 400, 500, 1000]));

// this is a function in JS
