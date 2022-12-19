let phrase = prompt("Saisissez une phrase :");
let motAChercher = prompt("Quel mot de la phrase voulez-vous remplacer ?");
let motRemplacement = prompt("Par quel mot voulez-vous remplacer ce mot ?");
let phraseModifiee = phrase.replace(motAChercher, motRemplacement);
alert("Voici la phrase modifiée : " + phraseModifiee);
