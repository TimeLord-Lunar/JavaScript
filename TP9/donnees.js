// URL du serveur fournissant les données
const url = 'https://digicode.cleverapps.io/json/pays/pollution';

// Fonction pour récupérer les données depuis le serveur
function recupererDonnees() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données');
            }
            return response.json();
        })
        .then(data => {
            // Modifier le contenu de la balise h1 et h2
            document.getElementById("titre").textContent = `${data.polluant} (${data.unite})`;
            document.getElementById("annee").textContent = `Année : ${data.annee}`;

            // Générer les lignes du tableau pour chaque pays
            let corpsTable = document.getElementById("corps");
            corpsTable.innerHTML = ""; // Réinitialisation du contenu

            data.pays.forEach(pays => {
                // Création de la ligne
                let ligne = corpsTable.insertRow();

                // Cellule pour le drapeau et le nom du pays
                let celluleNom = ligne.insertCell();
                celluleNom.innerHTML = `<img src="https://flagcdn.com/24x18/${pays.code}.png" alt="${pays.nom}"> ${pays.nom}`;

                // Cellule pour la valeur des émissions
                let celluleValeur = ligne.insertCell();
                celluleValeur.textContent = `${pays.valeur} ${data.unite}`;

                // Cellule pour le pourcentage
                let cellulePourcentage = ligne.insertCell();
                cellulePourcentage.textContent = `${pays.pourcentage}%`;
            });
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
}

// Appel de la fonction lors du chargement de la page
window.onload = recupererDonnees;
