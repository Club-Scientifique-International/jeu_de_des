/*
Id = # class = .
 Utilisation de Math.random pour faire un chiffre alléatoire entre 0 et 1, ce chiffre est à virgule
 Utilisation de Math.floor pour supprimer une virgule et utilisation de *6+1.
 document.querySelector permet
 */

function rollTheDice() {
    let nombre_des = document.getElementsByClassName("newdes").length;
    let total = 0;

    for (var compteur1 = 0; compteur1 <= nombre_des; compteur1++) {
        
        let nombre = Math.floor(Math.random() * 6) +1;
        /*alert(nombre)*/
        const elements = document.querySelector("img#des" + compteur1).setAttribute("src", "./imagedes/dice" + nombre + ".png");
        // On calcule le total : 
        total = total + nombre;

    }
    document.querySelector("#plusp1").textContent = "Le total des des est de : " + total;
    /*document.querySelector("img") représente la balise dans cours1.html
      .setAttribute("src", représente le src dans la balise img
      "./imagedes/dice" représente le chemin pour l'image
      + nombre représente la variable de courte portée ou est stocké un nombre de 1 à 6
      + ".png" représente le format de l'image 
      */

}

function newdes() {
    // let nombre_des = document.getElementsByClassName("newdes").length; sert à savoir le nombre de classe new des présent dans le code HTML.
    let nombre_des = document.getElementsByClassName("newdes").length;
    let clone = document.querySelector(".newdes").cloneNode(true);
    document.querySelector(".dices").appendChild(clone).setAttribute("id","des" + nombre_des);

    
   // alert("Le nombre de dès est de " + nombre_des);
}




function suite() {
    // On initialise les cinq variables
    let N1 = 0;
    let N2 = 1;
    let N3 = 0;
    // Utilisation sert à savoir le nombre de fois que la boucle doit se répéter
    let utilisation = 10;
    // Le compteur sert à savoir quand la boucle doit s'arrêter
    let compteur = 2;
    // Tant que le compteur est inférieur à utilisation la boucle continue
    while (compteur <= utilisation) {
        // On dis que N3 est égal à N1 + N2.
        N3 = N1 + N2;
        N1 = N2;
        N2 = N3;

        // On ajoute 1 à la variable compteur à chaque fois qu'ellle est éxécuter.
        compteur++;
        
    }
 // On affiche le résultat de la première opération.
 alert("Le résultat est de" + N3);
}


function suite1() {
      // On initialise les cinq variables
      let N1 = 0;
      let N2 = 1;
      let N3 = 0;
      // Utilisation sert à savoir le nombre de fois que la boucle doit se répéter
      let utilisation = 10;
      // Le compteur sert à savoir quand la boucle doit s'arrêter
      let compteur = 2;
      // Tant que le compteur est inférieur à utilisation la boucle continue
      while (compteur <= utilisation) {
          // On dis que N3 est égal à N1 + N2.
          N3 = N1 + N2;
          N1 = N2;
          N2 = N3;
  
          // On ajoute 1 à la variable compteur à chaque fois qu'ellle est éxécuter.
          compteur++;
          
      }
   // On affiche le résultat de la première opération dans un paragraphe.
   document.querySelector("#suite1").textContent = "Le résultat est de " + N3;

}


// Boucle for
function suitefor() {
    
    let N1 = 0;
    let N2 = 1;
    let N3 = 0;
    let valueinput = document.querySelector("input#input").value;
// On utilise document.querySelector("input#input").value; pour demander à l'utilisateur la valueur utilisation.
    for (let compteur = 2; compteur <= document.querySelector("input#input").value; compteur++) {
        N3 = N1 + N2;
        N1 = N2;
        N2 = N3;
    }
    // On affiche dans un paragraphe le résultat.
    document.querySelector("#suitefor").textContent = "Le résultat de " + valueinput + " est de " + N3;
}


function texteplus() {
    // On récupère ce qui l'y a dans le p
    let texte = document.querySelector("#plusp").textContent
 
    // On récupère le contenu de l'input, ce que l'on a marqué.
    let valueinputplus = document.querySelector("input#inputplus").value;
 
    // On affiche la variable text + valueinputplus
    // document.querySelector("#plusp").textContent=texte+"\n"+valueinputplus;
 
    // on séléctionne l'élément qui reçoit les données
    const output = document.querySelector("#plusp");
     
    // on ajoute un saut de ligne (innerHTML)
    output.innerHTML += "<br />";
     
    // puis on ajoute le texte récupérer dans le input
    output.textContent += valueinputplus;
     
}

function goformulaire() {
    // On récupèrent les valeurs
    let pseudo = document.querySelector("input#pseudo").value;
    let tel = document.querySelector("input#tel").value;
    let email = document.querySelector("input#email").value;
    let age = document.querySelector("input#age").value;
    let datetime = document.querySelector("input#datetime").value;
    // On récupèrent le nombre d'éléments qui sont dans une class avec .length
    let domaines = document.getElementsByClassName("travail").length;
    // On récupèrent les éléments qui sont dans la class travail.
    let hkb = document.getElementsByClassName("travail");
    // On défini la class reponse chek 
    let reponsechk;

    // On commence une boucle for avec comme condition d'arrêt que compteur soit inférieur à domaine (qui est la variable permettant de savoir le nombre d'éléments qui sont dans la class travail).
    for (let compteur = 0; compteur <= domaines; compteur++) {
        if (hkb[compteur].checked) {
            reponsechk = reponsechk + hkb[compteur].value;
        }
        
    }
    alert(reponsechk);

    // On affiche les variables
    document.querySelector("#pseudop").textContent = "Le pseudo est :" + pseudo + " le tel est :" + tel + " l'email est : " + email + "l'âge est de : " + age + "la date de la réunion est le : " + datetime;
}

