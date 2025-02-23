let prime = 0;
let num = 2;

for(let i=2;i<=num/2;i++){
    if(num  % i == 0 ){
        prime = 1;
        break;
    }
}

if(prime == 0){
    console.log(num," is a prime number.");
}
else{
    console.log(num," is not a prime number.")
}