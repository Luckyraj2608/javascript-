const name = "Lucky"
const repoCount = 10

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my name repo count is ${repoCount}`);

const gameName = new String("rahwar-rizwi-new")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4) // yaha pe negative value nhin de skte hai
console.log((newString));

const anotherString = gameName.slice(-8, 4) // yaha pe negative value de skte hai

const newStringOne = "   rahwar rizwi "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rahwar.com/rahwar%20rizwi"

console.log(url.replace('%20', '-'))

console.log(url.includes("rahwar"))
console.log(gameName.split('-'));











