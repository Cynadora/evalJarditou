// EVALUATION JAVASCRIPT - Exercice 2 - Table de multiplication
// Proposer à l'utilisateur de taper un chiffre pour la table de multiplication 
// Transformer la chaîne de caractère en entier avec parseInt
var tabmult = parseInt(window.prompt("Quelle table de multiplication voulez-vous ?"));
function aléatoire(){
// Boucle for pour réaliser une action N fois
for (var i = 1; i<=10; i++) {
// Affichage pour réaliser le calcul
var résultat = tabmult * i;
// Exécuter pour avoir le résultat attendu
document.write(tabmult + "*" +i+ "=" + résultat+ "<br>"); 
}
}
aléatoire();