// // // VARIABLES INITIALIZATION // // //

// Array Variables
let array = [0, 1, 2, 3];

// Perform rotation to the right by deleting last element and putting it at the beginning
if (array.length > 0) 
{
    let lastElement = array.pop();  
    array.unshift(lastElement);  
}

// Display resulting array
console.log(array);
