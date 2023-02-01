// EVALUATION JAVASCRIPT - Exercice 3 - Recherche d'un prénom
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let prenom = window.prompt("Choisissez un prénom Audrey, Aurélien, Flavien, Jérémy, Laurent, Melik, Nouara, Salem, Samuel, Stéphane");
if (tab.includes(prenom)){
tab.splice(tab.indexOf(prenom),1);
tab.push("");
document.write(tab);
}
else {
    alert("Il y a une erreur");
}