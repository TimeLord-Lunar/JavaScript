// URL du serveur fournissant les données sur tous les pays
const url = 'https://restcountries.com/v2/all';
let data = [];   // Stockage global des données
let ordreTri = 0;  // 0 = non trié, 1 = ascendant, -1 = descendant

// Fonction pour récupérer les données avec XMLHttpRequest
function recupererDonnees() {
    let req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            data = JSON.parse(req.responseText);
            afficherTableau();
        }
    };

    // Gestion des erreurs
    req.onerror = function () {
        console.error('Erreur de connexion au serveur.');
        document.getElementById("tableBody").textContent = "Impossible de récupérer les données.";
    };

    req.send();
}

// Fonction pour afficher le tableau
function afficherTableau() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    data.forEach(pays => {
        let nomPays = pays.name;
        let capitale = pays.capital ? pays.capital : "N/A";
        let population = pays.population.toLocaleString();
        let region = pays.region;
        let drapeau = pays.flags.png;

        // Création de la ligne du tableau
        let ligne = `
            <tr>
                <td><img src="${drapeau}" class="drapeau"> ${nomPays}</td>
                <td>${capitale}</td>
                <td>${region}</td>
                <td>${population}</td>
            </tr>
        `;

        tbody.innerHTML += ligne;
    });
}

// Fonction pour trier par population
function trierPopulation() {
    if (ordreTri === 0 || ordreTri === -1) {
        // Tri ascendant
        data.sort((a, b) => a.population - b.population);
        ordreTri = 1;
        document.getElementById("icone-tri").className = "fas fa-sort-up";  // Tri ascendant
    } else {
        // Tri descendant
        data.sort((a, b) => b.population - a.population);
        ordreTri = -1;
        document.getElementById("icone-tri").className = "fas fa-sort-down";  // Tri descendant
    }

    afficherTableau();
}
