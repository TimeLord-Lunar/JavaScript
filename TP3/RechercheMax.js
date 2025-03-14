// // // VARIABLES INITIALIZATION // // //

// Array Variables
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Initialize the max variable with the first element of the array
let max = array[0];

// Loop to iterate through the array
for (let i = 1; i < array.length; i++) 
{
    if (array[i] > max) 
    {
        max = array[i];
    }
}

// Display result
console.log("Le plus grand élément du tableau est :", max);
