// // // VARIABLES INITIALIZATION // // //

// Array Variables
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Initialize the min variable with the first element of the array
let min = array[0];

// Loop to iterate through the array
for (let i = 1; i < array.length; i++) 
{
    if (array[i] < min) 
    {
        min = array[i];
    }
}

// Display result
console.log("Le plus petit élément du tableau est :", min);
