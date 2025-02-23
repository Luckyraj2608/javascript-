let num = 125546734;
let temp = num;
let rem = 0;
let rev = 0;

while(temp!=0){
    rem = temp % 10;

    rev = rev * 10 + rem;
    
    temp = Math.floor(temp / 10);
}


console.log("Reverse of ",num," is ",rev)