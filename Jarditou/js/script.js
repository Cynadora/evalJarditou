// addEventListener() {

    var erreur;
    // récupération de tous les champs et un par un et les mettre dans une variable et récupérer nos champs avec document.getElementById
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var datedenaissance = document.getElementById("datedenaissance");
    var codepostal = document.getElementById("codepostal");
    var adresse = document.getElementById("adresse");
    var ville = document.getElementById("ville");
    var email = document.getElementById("email");
    var sujet = document.getElementById("sujet");
    var votrequestion = document.getElementById("votrequestion");
// si if différent de nom (on détecte ici la valeur avec document.getElementById)
    if(!nom.value) {
        erreur = "Veuillez renseigner un nom";
    }
    if(!prenom.value) {
        erreur = "Veuillez renseigner un prenom";
        
    }
    if(!datedenaissance.value) {
        erreur = "Veuillez renseigner un datedenaissance";
    }
    if(!codepostal.value) {
        erreur = "Veuillez renseigner un codepostal";
    }
    if(!adresse.value) {
        erreur = "Veuillez renseigner un adresse";
       
       
        if(!ville.value) {
            erreur = "Veuillez renseigner une ville";
        }
        if(!email.value) {
            erreur = "Veuillez renseigner un email";
        }
        if(!sujet.value) {
            erreur = "Veuillez renseigner un sujet";
        }
        if(!votrequestion.value) {
            erreur = "Veuillez renseigner votre question";
    }
        if(erreur) {
            document.getElementById("erreur").innerHTML = erreur;
        }






    alert("Formulaire envoyé !");
}