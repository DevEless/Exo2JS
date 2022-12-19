let chiffre1 = prompt("Saisissez un premier chiffre :");
let chiffre2 = prompt("Saisissez un deuxième chiffre :");

let addition = "+";
let soustraction = "-";
let division = "/";
let multiplication = "*";

let resultatAddition = Number(chiffre1) + Number(chiffre2);
let resultatSoustraction = Number(chiffre1) - Number(chiffre2);
let resultatDivision = Number(chiffre1) / Number(chiffre2);
let resultatMultiplication = Number(chiffre1) * Number(chiffre2);
//peut etre fais avec des $?//

alert(chiffre1 + " " + addition + " " + chiffre2 + " = " + resultatAddition + "\n" +
    chiffre1 + " " + soustraction + " " + chiffre2 + " = " + resultatSoustraction + "\n" +
    chiffre1 + " " + division + " " + chiffre2 + " = " + resultatDivision + "\n" +
    chiffre1 + " " + multiplication + " " + chiffre2 + " = " + resultatMultiplication);
    // oui : exemple //
// let message = `${chiffre1} ${addition} ${chiffre2} = ${resultatAddition}
//${chiffre1} ${soustraction} ${chiffre2} = ${resultatSoustraction}
//${chiffre1} ${division} ${chiffre2} = ${resultatDivision}
//${chiffre1} ${multiplication} ${chiffre2} = ${resultatMultiplication}`;

//alert(message);**  **//