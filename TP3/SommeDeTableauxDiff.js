// // // VARIABLES INITIALIZATION // // //

// Array Variables
let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];

// Initialization of the array that will contain the sum
let arraySum = [];

// We take the size of the smallest array to avoid index overflows
let maxLength = Math.max(array1.length, array2.length);

// Loop to add the elements of the two arrays, taking into account the size difference
for (let i = 0; i < maxLength; i++) 
{
    // We check if the index exists in each table
    let value1 = array1[i] !== undefined ? array1[i] : 0;
    let value2 = array2[i] !== undefined ? array2[i] : 0;
  
    // We do the sum and add it to arraySum
    arraySum.push(value1 + value2);
}

// Display result
console.log("Le tableau contenant la somme des deux tableaux est :", arraySum);
