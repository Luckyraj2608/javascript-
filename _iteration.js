// for loops

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element);
      
}

// console.log(element);  bhar excess nhi hotan hai
for (let i = 0; i <= 20; i++) {
        // console.log(`outer loop value: ${i}`);
        
    for(let j = 1; j <= 10; j++){
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
        

    }
    
}


// MyArray

let MyArray = ["flash", "batman", "superman"]
// console.log(MyArray.length);

for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    // console.log(element);
    
    
}

// break and conti1ue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
        
//     }
//     console.log(`value of i is ${index}`);
// }
    
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
        
    }
    console.log(`value of i is ${index}`);
    
}