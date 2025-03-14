// // // FUNCTIONS // // //

// Function that capitalizes the first letter
function majusculePremiereLettre(chaine) 
{
    if (typeof chaine !== 'string') 
    {
         return "Erreur : Le paramètre n'est pas une chaîne de caractères";
    }
  
    if (chaine.length === 0) 
    {
         return "";
    }
  
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}
  
// Function that capitalizes the first letter of each word
function phraseMaj(phrase)
{
    // Checking that the parameter is a character string
    if (typeof phrase !== 'string') 
    {
        return "Erreur : Le paramètre n'est pas une chaîne de caractères";
    }
  
    // Separate the sentence into words, capitalize the first letter of each word and join the words
    return phrase
    .split(' ')
    .map(mot => majusculePremiereLettre(mot))
    .join(' ');
}
  
// // // TESTS // // //

// Function Call with examples
console.log(phraseMaj("bonjour tout le monde"));
console.log(phraseMaj("je suis content"));   
console.log(phraseMaj("apple banana cherry"));  
console.log(phraseMaj(""));  
console.log(phraseMaj(123)); 