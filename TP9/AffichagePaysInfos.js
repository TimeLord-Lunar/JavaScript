// URL du serveur fournissant les données sur tous les pays
const url = 'https://restcountries.com/v2/all';

// Fonction pour récupérer les données avec XMLHttpRequest
function recupererDonnees() {
    let req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onreadystatechange = function () {
        // Vérification de l'état de la requête et du statut HTTP
        if (req.readyState === 4 && req.status === 200) {
            // Transformation de la réponse en JSON
            let data = JSON.parse(req.responseText);

            // Sélection de la div où les données seront affichées
            const listePays = document.getElementById("listePays");
            listePays.innerHTML = ""; // Réinitialisation du contenu

            // Parcourir tous les pays pour générer l'affichage
            for (let i = 0; i < data.length; i++) {
                let nomPays = data[i].name;
                let capitale = data[i].capital ? data[i].capital : "N/A";
                let population = data[i].population.toLocaleString();
                let region = data[i].region;

                // Création de l'élément contenant les informations du pays
                let divPays = document.createElement("div");
                divPays.classList.add("pays");

                divPays.innerHTML = `
                    <h2>${nomPays}</h2>
                    <p><strong>Capitale :</strong> ${capitale}</p>
                    <p><strong>Population :</strong> ${population} habitants</p>
                    <p><strong>Région :</strong> ${region}</p>
                `;

                // Ajout de l'élément à la div principale
                listePays.appendChild(divPays);
            }
        }
    };

    // Gestion des erreurs
    req.onerror = function () {
        console.error('Erreur de connexion au serveur.');
        document.getElementById("listePays").textContent = "Impossible de récupérer les données.";
    };

    // Envoi de la requête
    req.send();
}
