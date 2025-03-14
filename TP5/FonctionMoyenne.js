// // // FUNCTIONS // // //

// Function that calculates the average of an array
function calculMoyenne(tab) 
{
    // Checking that the parameter is an array
    if (!Array.isArray(tab)) 
    {
        return "Erreur : Le paramètre n'est pas un tableau";
    }
    
    // If array Empty = 0
    if (tab.length === 0) 
    {
        return 0;
    }
  
    // Checking that all array elements are numbers, if not : error
    if (!tab.every(element => typeof element === 'number')) 
    {
        return "Erreur : Le tableau contient un élément non numérique";
    }
  
    // Calculation of the average
    const somme = tab.reduce((acc, val) => acc + val, 0);
    return somme / tab.length;
}
  
// // // TESTS // // //

// // Function Call with different types of parameters
console.log(calculMoyenne([10, 20, 30, 40]));  
console.log(calculMoyenne([]));               
console.log(calculMoyenne("Hello"));          
console.log(calculMoyenne([10, "20", 30]));   
