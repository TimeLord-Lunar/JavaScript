// // // VARIABLES INITIALIZATION // // //

// Const Variables for User Input
const readline = require('readline');

// Create a readline interface to get user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the Fibonacci value at a given rank
function fibonacci(rang) 
{
    if (rang === 0) 
    {
        return 0;  
    } else if (rang === 1) 
    {
        return 1; 
    } else 
    {
        let a = 0, b = 1, c;
        for (let i = 2; i <= rang; i++) 
        {
            c = a + b;  
            a = b;      
            b = c;     
        }
        return c;
    }
}

// Ask the user to enter a number between 1 and 10
rl.question('Entrez un nombre : ', (nombre) => {
    nombre = parseInt(nombre); 


    // Calculate and display the Fibonacci value of rank n
    console.log(`La valeur de Fibonacci au rang ${nombre} est : ${fibonacci(nombre)}`);

    rl.close();
});
