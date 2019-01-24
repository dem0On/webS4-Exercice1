var masseIsTrue = false;
var tailleIsTrue = false;
function imc(){
    if(masseIsTrue && tailleIsTrue) {
        var a = document.getElementById("masse").value;
        var b = document.getElementById("Taille").value;
        var carre = b * b;
        var resultat = a / carre;
        valeur(resultat.toFixed(2));
        masseIsTrue = false;
        tailleIsTrue = false;
    }
}
function valeur(a) {
    if(document.getElementById("H").checked){
        if(a<20.7){
            document.getElementById("res").innerHTML = "Votre IMC est égale à "+a+"Vous êtes maigre";
        }else if(a>=20.7 && a<26.4){
            document.getElementById("res").innerHTML = "Votre IMC est égale à "+a+"Vous avez un poids normal";
        }else if(a>=26.4 && a<27.8){
            document.getElementById("res").innerHTML = "Votre IMC est égale à "+a+"Vous avez un surpoids";
        }else if(a>=27.8 && a<31.1){
            document.getElementById("res").innerHTML = "Votre IMC est égale à "+a+"Vous avez une obésité";
        }else if(a>=31.1){
            document.getElementById("res").innerHTML = "Votre IMC est égale à "+a+"Vous avez une obésité sévère";
        }
    }else if(document.getElementById("F").checked){
        if(a<19.1){
            document.getElementById("res").innerHTML = "Votre IMC est égale à "+a+"Vous êtes maigre";
        }else if(a>=19.1 && a<25.8){
            document.getElementById("res").innerHTML = "Votre IMC est égale à "+a+"Vous avez un poids normal";
        }else if(a>=25.8 && a<27.3){
            document.getElementById("res").innerHTML = "Votre IMC est égale à "+a+"Vous avez un surpoids";
        }else if(a>=27.3 && a<32.3){
            document.getElementById("res").innerHTML = "Votre IMC est égale à "+a+"Vous avez une obésité";
        }else if(a>=32.3){
            document.getElementById("res").innerHTML = "Votre IMC est égale à "+a+"Vous avez une obésité sévère";
        }
    }


}
function resetIMG() {
    document.getElementById("imgMasse").src="";
    document.getElementById("imgTaille").src="";
    document.getElementById("res").innerHTML = "";
}
function exitHover(){
    document.getElementById("avertissement").style.display = "none";
}
function hover(){
    document.getElementById("avertissement").style.display = "inline";
}

function verifChamp(){
    var warningMasse = document.getElementById("warningMasse");
    var warningTaille = document.getElementById("warningTaille");
    var imgMasse = document.getElementById("imgMasse");
    var imgTaille = document.getElementById("imgTaille");
    document.getElementById("imgMasse").style.display = "inline";
    document.getElementById("imgTaille").style.display = "inline";
    if(!document.getElementById("masse").value){
        warningMasse.innerHTML="Vous devez renseigner le champ";
        imgMasse.src ="croix.png"
    }else if(isNaN(document.getElementById("masse").value)){
        warningMasse.innerHTML = "Vous devez donner un nombre";
        imgMasse.src ="croix.png";
    }else if(document.getElementById("masse").value < 0){
        warningMasse.innerHTML = "Le nombre doit être positif";
        imgMasse.src="croix.png";
    }else{
        imgMasse.src="check.ico";
        warningMasse.innerHTML ="";
        masseIsTrue = true;
    }
    if(!document.getElementById("Taille").value){
        warningTaille.innerHTML = "Le champs doit être rempli";
        imgTaille.src="croix.png";
    }else if(isNaN(document.getElementById("Taille").value)){
        warningTaille.innerHTML = "Vous devez donner un nombre";
        imgTaille.src="croix.png";
    }else if(document.getElementById("Taille").value < 0){
        warningTaille.innerHTML = "Le nombre doit être positif";
        imgTaille.src="croix.png";
    }else{
        imgTaille.src="check.ico";
        warningTaille.innerHTML ="";
        tailleIsTrue = true;
    }
}

onkeypress = function key() {
    var isCtrl = false;
    document.onkeyup=function(e){ if(e.which == 17) isCtrl=false; }
    document.onkeydown=function(e){
        if(e.which == 17) isCtrl=true;
        if(e.which == 67 && isCtrl == true) {
            imc();}
    }
};