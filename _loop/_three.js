// for of

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello world"
for (const greet of greeting) {
    // console.log(`Each character is ${greet}`);
    
}

// Maps  value unique rhta hai

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('Fr', "France")
map.set('IN', "INDIA")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
    
}