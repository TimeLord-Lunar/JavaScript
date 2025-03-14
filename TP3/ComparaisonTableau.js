// // // VARIABLES INITIALIZATION // // //

// Array Variables
let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];

// Initialization of the variable that will count the elements in common
let commonCount = 0;

// Loop to iterate through the first array
for (let i = 0; i < array1.length; i++) 
{
    // If the element of array1 is found in array2, we increment commonCount
    if (array2.includes(array1[i])) 
    {
        commonCount++;
    }
}

// Displaying the number of elements in common
console.log("Le nombre d'éléments en commun entre les deux tableaux est :", commonCount);
