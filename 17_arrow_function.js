const user = {
    username: "Rahwar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Rahwar"
//     console.log(this.username);
    
// }
// chai()


// const chai = function () {
//     let username = "Rahwar"
//     console.log(this.username);
    
// }

const chai =  () => {
    let username = "Rahwar"
    console.log(this);
    
}


// chai()

//  Arrow function syntax -- () => {}

// 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// Implicit arrow function me {} use nhi krna hota hai
// curly braces {} likhe to return hee parega

// const addTwo = (num1, num2) => num1 + num2 
// const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => ({username: "Rahwar"}) 



console.log(addTwo(3, 4));


const myArray = [2, 5, 3, 7, 8]

myArray.forEach(() => {})




