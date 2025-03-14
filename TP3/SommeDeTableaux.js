// // // VARIABLES INITIALIZATION // // //

// Array Variables
let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

// Initialization of the array that will contain the sum
let arraySum = [];

// Loop to add the elements of the two arrays
for (let i = 0; i < array1.length; i++) 
{
    arraySum.push(array1[i] + array2[i]);
}

// Display result
console.log("Le tableau contenant la somme des deux tableaux est :", arraySum);

