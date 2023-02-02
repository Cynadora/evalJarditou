    // var erreur;
    // récupération de tous les champs et un par un et les mettre dans une variable et récupérer nos champs avec document.getElementById
    var valider = document.getElementById("envoyer");
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var datedenaissance = document.getElementById("datedenaissance");
    var code_postal = document.getElementById("code_postal");
    var adresse = document.getElementById("adresse");
    var ville = document.getElementById("ville");
    var email = document.getElementById("email");
    var sujet = document.getElementById("sujet");
    var textem=document.getElementById("textem");
    var prenomm=document.getElementById("prenomm");
    var codepostalm=document.getElementById("codepostalm");
    var adressem=document.getElementById("adressem");
    var villem=document.getElementById("villem");
    var emailm=document.getElementById("emailm");
    var datem=document.getElementById("datem");
    var masculin=document.getElementById("masculin");
    var feminin=document.getElementById("feminin");
    var sexe_manquant=document.getElementById('sexe_manquant');
    var accept_manquant=document.getElementById('accept_manquant');
    var accepte=document.getElementById('accepte');
    var question=document.getElementById('question');

    var question_manquante=document.getElementById('question_manquante');
    
    

    

   
    // Assigner à un événement plusieurs fonctions
    valider.addEventListener("click", f_valid);

    function f_valid(e){ 
        
        if (nom.value === "") {   
            e.preventDefault();
            textem.innerHTML= 'nom manquant';
            textem.style.color = "red";
        }
        


        if (prenom.value === "") {
            e.preventDefault();
            prenomm.innerHTML= 'prenom manquant';
            prenomm.style.color = "red";
        }
        if (code_postal.value === "") {
            e.preventDefault();
            codepostalm.innerHTML= 'code postal manquant';
            codepostalm.style.color = "red";
        }
        if (adresse.value === "") {
            e.preventDefault();
            adressem.innerHTML= 'Adresse manquante';
            adressem.style.color = "red";
        }
        if (ville.value === "") {
            e.preventDefault();
            villem.innerHTML= 'ville manquante';
            villem.style.color = "red";
        }
        if (email.value === "") {
            e.preventDefault();
            emailm.innerHTML= 'email manquant';
            emailm.style.color = "red";
        }
        if (date.value === "") {
            e.preventDefault();
            datem.innerHTML= 'date de naissance manquante';
            datem.style.color = "red";
        }                   
            if (masculin.checked || feminin.checked)  {
            sexe_manquant.style.display='none';
            }
            else{
                e.preventDefault();    
                sexe_manquant.innerHTML="sexe manquant";
                sexe_manquant.style.color = "red";
            }

            if (accepte.checked )  {
                accept_manquant.style.display='none';
                }
                else{
                    e.preventDefault();    
                    accept_manquant.innerHTML="Veuillez cochez cette case";
                    accept_manquant.style.color = "red";    
                }

                if (question.value === "") {   
                    e.preventDefault();
                    question_manquante.innerHTML= 'question manquante';
                    question_manquante.style.color = "red";
                }


    }
f_valid(e);