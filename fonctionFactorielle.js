var nombreIsTrue = false;

function resetIMG() {
    document.getElementById("imgNombre").src="";
    document.getElementById("resFactorielle").innerHTML = "";
}

function exitHover(){
    document.getElementById("avertissement").style.display = "none";
}
function hover(){
    document.getElementById("avertissement").style.display = "inline";
}


function calculFibonnaci() {
    var a = 0;
    var b = 1;
    var somme = 0;
    var retour = "0";
    var saisie = document.getElementById("nombre").value;
    if(nombreIsTrue){
        for(i=1;i<=saisie-1;i++){
            somme = a+b;
            a = b;
            b = somme;
            retour = retour + " | " +somme;
        }
        document.getElementById("resFactorielle").innerHTML = retour;
        nombreIsTrue = false;

    }
        }

function calcul(){
    if(nombreIsTrue){
        var saisie = document.getElementById("nombre").value;
        var res = 1;
        for (i = 1;i<=saisie;i++){
            res = res * i;
        }
        document.getElementById("resFactorielle").innerHTML = res;
        nombreIsTrue = false;
    }
}

function verifChamp(){
    var warningNombre = document.getElementById("warningN");
    var imgNombre = document.getElementById("imgNombre");
    document.getElementById("imgNombre").style.display = "inline";
    if(!document.getElementById("nombre").value){
        warningNombre.innerHTML="Vous devez renseigner le champ";
        imgNombre.src ="croix.png"
    }else if(isNaN(document.getElementById("nombre").value)){
        warningNombre.innerHTML = "Vous devez donner un nombre";
        imgNombre.src ="croix.png";
    }else if(document.getElementById("nombre").value < 0){
        warningNombre.innerHTML = "Le nombre doit être positif";
        imgNombre.src="croix.png";
    }else{
        imgNombre.src="check.ico";
        warningNombre.innerHTML ="";
        nombreIsTrue = true;
    }
}