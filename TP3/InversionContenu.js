// // // VARIABLES INITIALIZATION // // //

// Array Variables
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Creating a array copy in reverse order
let arrayCopy = [];
for (let i = array.length - 1; i >= 0; i--) 
{
    arrayCopy.push(array[i]);
}

// Display original Array
console.log("Éléments du tableau array :");
for (let i = 0; i < array.length; i++) 
{
    console.log(array[i]);
}

// Display copy array (reverse order)
console.log("\nÉléments du tableau arrayCopy (ordre inverse) :");
for (let i = 0; i < arrayCopy.length; i++) 
{
    console.log(arrayCopy[i]);
}
