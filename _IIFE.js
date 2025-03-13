// immediately Invoked Function Expression (IIFE)
// global scope k problem hote hai kaye baar-- global problem ko hatana k liye IIFE ka use krte hai
//  do IIFE k liye (;) ka use kiya jaata hai
(function chai()
{
    console.log(`DB CONNECTED`);
    
})();


( (name) => {
console.log(`DB CONNECTED TWO ${name}`);

})("Rahwar")

