// EVALUATION JAVASCRIPT - Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux.
let jeune = 0;
let adulte = 0;
let vieux = 0;

while (true) {
    let gens = window.prompt("Entrez l'âge que vous avez ?");
    if (gens <= 20) {
        jeune++
        console.log(jeune);
    }
    else if (gens > 20 && gens <40) {
        adulte++
        console.log(adulte);
    }
    else if (gens >= 40 & gens <= 99) {
        vieux++
        console.log(vieux);
    }
    if (gens >= 100) {
        console.log("jeune" +jeune+ "adulte" +adulte+ "vieux" +vieux);
        break;
    }
    
}
window.alert("jeune" + jeune + "\nadulte" + adulte + "\nvieux" + vieux );