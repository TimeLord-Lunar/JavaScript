// // // FUNCTIONS // // //

// Function that takes an integer n and returns a function
function multiplierPar(n) 
{
    return function(nb) 
    {
        return nb * n;
    };
}
  
// // // TESTS // // //

// Function Call with 2 differents values
const multiplierPar2 = multiplierPar(2);
const multiplierPar5 = multiplierPar(5);
  
// The variables multiplyBy2 and multiplyBy5 are now functions
// Function Call with 2 differents values
console.log(multiplierPar2(10));
console.log(multiplierPar2(3)); 
console.log(multiplierPar5(10)); 
console.log(multiplierPar5(3));  