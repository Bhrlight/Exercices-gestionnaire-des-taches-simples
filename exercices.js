// afficher un message de bienvenue

console.log("Hello World");

// Créer une variable de nombre entier et l'afficher

let nbTache = 5;
return nbTache;

// Condition : Vérifier si le nombre de tâches est zéro

if(nbTache === 0){
    console.log('Aucune tâche à faire.')
}

// Ajouter une tâche à une liste (Tableau)

const taches = [];
taches.push("Faire les courses");

// Afficher toutes les tâches

for(i = 0; i < taches.length; i++ ) {
console.log(taches[i])
}
return taches;

// Ajouter plusieurs tâches

function ajouterTache(newTask){

    newTask = 'acheter voiture' ;
    taches.push(newTask)
    return taches;
 }

//Supprimer la dernière tâche

function supprimerDerniereTache(){
    return taches.pop();
}

//Modifier une tâche spécifique

function modifierTaches(){
    taches[0] = "recuperer les enfants"
}

//Condition : Vérifier si une tâche existe

function verifierTaches(tache){
    for(let i = 0; i < taches.length ;i++ ){
        if(taches[i] === tache){
            return "Tâche trouvé";
        }
    }
    return "tâche non trouvé";
}

//Boucle : Afficher les tâches avec un indice

function afficherTache(){
    for(let i = 0; i < taches.length ;i++ ){
        
            console.log("Tâche "+ [i+1]+": "+taches[i]);
            
    } 
}
return afficherTache();

//Utiliser Math pour générer un nombre aléatoire

function randomNumber(){
    return Math.random();
    }
    console.log(randomNumber());

//Condition : Vérifier si une tâche est terminée

function endTask(tacheTerminee){
    if(tacheTerminee = true){
        return "Tâche terminée";
    }
    else {
        return "Tâche non terminée";
    }
}

//Date : Afficher la date actuelle

let dateActuelle = new Date();
console.log(dateActuelle.toDateString());

//Calculer le nombre de jours restants avant une échéance

function jourRestant(jours, formatJours){

    let dateEcheance = new Date("2025-01-23");
    let currentDate = new Date();
    jours = dateEcheance - currentDate ;
    formatJours = jours /(1000 * 60 * 60 * 24);
    if(formatJours <= 1){
        return Math.floor(formatJours + 1) + " Jour" ;
    }
    return Math.floor(formatJours + 1) + " Jours" ;
}

console.log(jourRestant());

// 