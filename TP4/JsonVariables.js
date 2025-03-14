// // // VARIABLES INITIALIZATION // // //

// Declaration of the variable containing the company information
const societe = {
    nom: "Google",
    siegeSocial: "Googleplex, Mountain View, California, United States",
    fondateurs: [
        {
            nom: "Larry Page",
            dateNaissance: "26/03/1973",
            lieuNaissance: "East Lansing, Michigan"
        },
        {
            nom: "Sergey Brin",
            dateNaissance: "21/08/1973",
            lieuNaissance: "Moscou, Union Soviétique"
        }
    ],
    chiffreAffaires: {
        "2008": 16.49,
        "2012": 37.97,
        "2016": 89.46,
        "2018": 136.2
    }
};

// Loop to display the founders
console.log("Fondateurs de la société " + societe.nom + " :");

societe.fondateurs.forEach(fondateur => {
    console.log(`- ${fondateur.nom}, né le ${fondateur.dateNaissance} à ${fondateur.lieuNaissance}`);
});

// Loop to display the sales figures
console.log("\nChiffre d'affaires en milliards de $ :");

for (const annee in societe.chiffreAffaires) 
{
    console.log(`- ${annee} : ${societe.chiffreAffaires[annee]} milliards de $`);
}
