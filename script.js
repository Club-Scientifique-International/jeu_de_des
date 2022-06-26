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
