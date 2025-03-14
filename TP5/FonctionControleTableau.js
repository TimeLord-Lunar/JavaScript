// // // FUNCTIONS // // //

// Function that checks the contents of an array
function controleTableau(tab) 
{
    // Checks if all array elements are numbers
    return tab.every(element => typeof element === 'number');
}
  
// // // TESTS // // //

// Function Call with different types of array
console.log(controleTableau([1, 2, 3, 4]));        
console.log(controleTableau([1, "2", 3, 4]));      
console.log(controleTableau([]));                  