// // // VARIABLES INITIALIZATION // // //

// Array Variables
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Display array elements
console.log("Éléments du tableau :");
for (let i = 0; i < array.length; i++) 
{
    console.log(array[i]);
}

// Display array elements in reverse order
console.log("\nÉléments du tableau dans l'ordre inverse :");
for (let i = array.length - 1; i >= 0; i--) 
{
    console.log(array[i]);
}

// Creating a copy array
let arrayCopy = [...array];

console.log("\nCopie du tableau array :");
console.log(arrayCopy);
