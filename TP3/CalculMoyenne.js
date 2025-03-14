// // // VARIABLES INITIALIZATION // // //

// Array Variables
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Calculating the sum of the elements of the array
let sum = 0;
for (let i = 0; i < array.length; i++) 
{
    sum += array[i];
}

// Calculation of the average
let average = sum / array.length;

// Display result
console.log("La moyenne des éléments du tableau est :", average);
