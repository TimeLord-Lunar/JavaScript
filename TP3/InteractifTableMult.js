// // // VARIABLES INITIALIZATION // // //

// Const Variables for User Input
const readline = require('readline');

// Create a readline interface to get user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to enter a number between 1 and 10
rl.question('Entrez un nombre entre 1 et 10 pour afficher sa table de multiplication: ', (nombre) => {
    nombre = parseInt(nombre);

    // Check if the number is in the valid range
    if (nombre >= 1 && nombre <= 10) 
    {
        console.log(`Table de multiplication de ${nombre} :`);
        
        for (let i = 1; i <= 10; i++) 
        {
            console.log(`${nombre} x ${i} = ${nombre * i}`);
        }
    } else 
    {
        console.log("Le nombre doit être entre 1 et 10.");
    }

    rl.close(); 
});
