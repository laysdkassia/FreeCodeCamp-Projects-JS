// 31 - Adicionar variáveis para strings.
const someAdjective = "very nice";
let myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

// 32 - Encontrar o tamanho de uma string.(.length)
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

// 33 - Usar notação de colchetes para encontrar o primeiro caractere em uma string.
let firstLetterOfLastName = "";
const firstLetter = "Lovelace";
firstLetterOfLastName = firstLetter[0]; 
console.log(firstLetterOfLastName);

// 34 - Entender a imutabilidade das strings.
 /*
    Por exemplo, o código a seguir produzirá um erro porque 
    a letra B na cadeia de caracteres Bob não pode ser alterada para a letra J:

    let myStr = "Bob";
    myStr[0] = "J";
 */

let immutability = "Jello World";
immutability = "Hello World";
console.log(immutability);

// 35 - Usar notação de colchetes para encontrar o enésimo caractere em uma string.
const thirdLetter = "Lovelace";
const thirdLetterOfLastName = thirdLetter[2];
console.log(thirdLetterOfLastName);

// 36 - Usar notação de colchetes para encontrar o último caractere em uma string.
const lastLetter = "Lovelace";
const lastLetterOfLastName = lastLetter[lastLetter.length - 1];
console.log(lastLetterOfLastName);

// 37 - Usar notação de colchetes para descobrir o enésimo caractere antes do último em uma string.
const secondLastLetter = "Lovelace";
const secondLastLetterOfName = secondLastLetter[secondLastLetter.length - 2];
console.log(secondLastLetterOfName);

// 38 - Preencher espaços em branco.
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "My " + myNoun + " is so " + myAdjective + " and he " + myVerb + " very " + myAdverb + " this morning!";
console.log(wordBlanks);

// 39 - Armazenar múltiplos valores em uma variável usando arrays JavaScript.
const myArray = ["String and Number ", 1];
console.log(myArray);

// 40 - Aninhar um array em outro array.
const multiArray = [["String", 1], ["String", 2]];
console.log(multiArray);