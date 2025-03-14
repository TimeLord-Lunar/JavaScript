// // // FUNCTIONS // // //

// Function that capitalizes the first letter
function majusculePremiereLettre(chaine) 
{
    // Checking that the parameter is a character string
    if (typeof chaine !== 'string') 
    {
         return "Erreur : Le paramètre n'est pas une chaîne de caractères";
    }
  
    // If the string is empty, return an empty string
    if (chaine.length === 0) 
    {
        return "";
    }
  
    // Make the first letter uppercase and keep the rest
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// // // TESTS // // //

// Function Call examples
console.log(majusculePremiereLettre("bonjour"));
console.log(majusculePremiereLettre("marcel")); 
console.log(majusculePremiereLettre("aPPle")); 
console.log(majusculePremiereLettre("")); 
console.log(majusculePremiereLettre(123)); 
