// // // FUNCTIONS // // //

// Function that creates a task manager
function creerGestionnaire() 
{
  return {   // can't move the "{" next line
    // Array to store tasks
    taches: [],
  
    // Method to add a task
    ajouterTache(description) 
    {
      this.taches.push(
      { 
        description: description, 
        terminee: false 
      });
    },
  
    // Method to complete a task
    terminerTache(index) 
    {
      if (index >= 0 && index < this.taches.length) 
      {
        this.taches[index].terminee = true;
      } 
      else 
      {
        console.log("Erreur : Index invalide");
      }
    },
  
      // Method to display all tasks
      afficherTaches() 
    {
        console.log("Liste des tâches :");
        this.taches.forEach((tache, index) => 
      {
          const statut = tache.terminee ? "Terminée" : "En cours";
          console.log(`${index + 1}. ${tache.description} - ${statut}`);
      });
    }
  };
}
  
// // // TESTS // // //

// Creating the task manager
const gestionnaire = creerGestionnaire();
  
// Test: Adding tasks
gestionnaire.ajouterTache("Acheter du pain");
gestionnaire.ajouterTache("Faire du sport");
gestionnaire.ajouterTache("Lire un livre");
  
// Task display
gestionnaire.afficherTaches();
  
// Test: Mark a task as completed
gestionnaire.terminerTache(1);
  
// Displaying tasks after modification
gestionnaire.afficherTaches();