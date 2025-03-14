// URL du serveur fournissant les données
const url = 'https://digicode.cleverapps.io/json/pays/pollution';
let donneesRecuperees = []; // Pour stocker les données récupérées

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
            // Stocker les données récupérées
            donneesRecuperees = data.pays;

            // Modifier le contenu de la balise h1 et h2
            document.getElementById("titre").textContent = `${data.polluant} (${data.unite})`;
            document.getElementById("annee").textContent = `Année : ${data.annee}`;

            // Afficher le tableau complet par défaut
            afficherTableau(donneesRecuperees, data.unite);
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
}

// Fonction pour afficher le tableau
function afficherTableau(donnees, unite) {
    let corpsTable = document.getElementById("corps");
    corpsTable.innerHTML = ""; // Réinitialisation du contenu

    donnees.forEach(pays => {
        // Création de la ligne
        let ligne = corpsTable.insertRow();

        // Cellule pour le drapeau et le nom du pays
        let celluleNom = ligne.insertCell();
        celluleNom.innerHTML = `<img src="https://flagcdn.com/24x18/${pays.code}.png" alt="${pays.nom}"> ${pays.nom}`;

        // Cellule pour la valeur des émissions
        let celluleValeur = ligne.insertCell();
        celluleValeur.textContent = `${pays.valeur} ${unite}`;

        // Cellule pour le pourcentage
        let cellulePourcentage = ligne.insertCell();
        cellulePourcentage.textContent = `${pays.pourcentage}%`;
    });
}

// Fonction pour filtrer les données
function filtrerDonnees() {
    // Récupération des valeurs MIN et MAX
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;

    // Conversion en nombres
    min = min === "" ? 0 : parseFloat(min);
    max = max === "" ? Number.MAX_VALUE : parseFloat(max);

    // Vérifications des règles de gestion
    if (min < 0 || max < 0) {
        alert("Veuillez saisir des valeurs positives.");
        return;
    }
    if (min > max) {
        alert("Le MIN ne peut pas être supérieur au MAX.");
        return;
    }

    // Filtrage des pays en fonction de la plage de pourcentage
    let donneesFiltrees = donneesRecuperees.filter(pays => pays.pourcentage >= min && pays.pourcentage <= max);


    // Rafraîchir l'affichage du tableau
    afficherTableau(donneesFiltrees, document.getElementById("titre").textContent.split('(')[1].split(')')[0]);
}

// Appel de la fonction lors du chargement de la page
window.onload = recupererDonnees;
