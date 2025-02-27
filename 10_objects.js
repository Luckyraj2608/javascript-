// singleton

// object literals

// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Lucky",
    [mySym]: "mykey1",
    age: 18,
    location: "Bihar",
    email: "coollucky2608@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
      
} 

const abc = JsUser.name
console.log(abc);

console.log(JsUser); 
console.log(JsUser.name);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "lucky2608@gmail.com"
Object.freeze(JsUser)
JsUser.email = "luckygoogle.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTWo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTWo());







