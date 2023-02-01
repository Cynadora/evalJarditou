// EVALUATION JAVASCRIPT - Exercice 4 - Total d'une commande
var PU = window.prompt("Saisir le prix unitaire du produit");
var QTECOM = window.prompt("Saisir la quantité");
var TOT = (PU * QTECOM);
var PORT= 0;
if(TOT>=100 && TOT<=200) {
    REM = (TOT * 0.05);
}
else if(TOT>200){
    REM = (TOT * 0.1);
}
else {
    REM = 0;
}
TOT = TOT - REM;
if(TOT>500){
    PORT = (0)
}
else {
    PORT = TOT * 0.02;
    if (PORT < 6){
        PORT = 6;
    }
}
var PAP = (TOT + PORT);

document.write("Prix à payer: " +PAP+ "\n");
document.write("Remise :" +REM + "\n");
document.write("Frais de port: " +PORT + " Total à payer: " + PAP);
