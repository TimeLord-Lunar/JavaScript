// URL du serveur fournissant les données sur tous les pays
const url = 'https://restcountries.com/v2/all';

// Fonction pour récupérer les données avec AJAX (fetch)
function recupererDonnees() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données');
            }
            return response.json();
        })
        .then(data => {
            // Sélection de la div où les données seront affichées
            const listePays = document.getElementById("listePays");
            listePays.innerHTML = ""; // Réinitialisation du contenu

            // Parcourir tous les pays et générer l'affichage
            data.forEach(pays => {
                // Création de l'élément contenant les informations du pays
                let divPays = document.createElement("div");
                divPays.classList.add("pays");

                divPays.innerHTML = `
                    <img src="${pays.flag}" alt="${pays.name}">
                    <div>
                        <h2>${pays.name}</h2>
                        <p><strong>Capitale :</strong> ${pays.capital ? pays.capital : 'N/A'}</p>
                        <p><strong>Population :</strong> ${pays.population.toLocaleString()} habitants</p>
                        <p><strong>Région :</strong> ${pays.region}</p>
                    </div>
                `;

                // Ajout de l'élément à la div principale
                listePays.appendChild(divPays);
            });
        })
        .catch(error => {
            console.error('Erreur :', error);
            document.getElementById("listePays").textContent = "Impossible de récupérer les données.";
        });
}
