const numbers = [10, 5, 8, 20, 3];

const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);

console.log("Maximum value:", max);
