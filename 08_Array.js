// ARRAY

const myArray = [0, 1, 2, 3, 4, 5]
const muHeors = ["IronMan", "Thor"]

const myArray2 = new Array(1, 2, 3, 4)
console.log(myArray[1]);

// Array Methods

myArray.push(6)
myArray.push(7)
myArray.pop()  // array ka last value delete kar dete hai

myArray.unshift(9)
myArray.shift()

console.log(myArray.includes(5));
console.log(myArray.indexOf());

const newArr = myArray.join()
console.log(newArr);
console.log(typeof newArr);

// SLICE AND SPLICE
// SLICE-- last element add nhi hota hai
// SPLICE -- Last element add hota hai

console.log("A", myArray);
const myn1 = myArray.slice(1, 3)


console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3)
console.log("c", myArray);

console.log(myn2);







// console.log(myArray);


