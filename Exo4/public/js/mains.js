let phrase = prompt("Saisissez une phrase :");
let motAChercher = prompt("Quel mot de la phrase voulez-vous remplacer ?");
let motRemplacement = prompt("Par quel mot voulez-vous remplacer ce mot ?");

//remplace le mot a chercher par le mot de remplacement//
let phraseModifiee = phrase.replace(motAChercher, motRemplacement);
alert("Voici la phrase modifiée : " + phraseModifiee);
