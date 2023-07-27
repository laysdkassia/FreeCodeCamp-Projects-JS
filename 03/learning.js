// 21 - Atribuir de modo composto com adição aumentada.
let myVar = 1;
myVar += 5;
console.log(myVar);
// 6 seria exibido no console.

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

console.log(a,b,c);

// 22 - Atribuir de modo composto com subtração aumentada.

/*
    Como o operador +=, -= subtrai um número de uma variável.
    myVar = myVar - 5;

    vai subtrair 5 de myVar. Essa expressão pode ser reescrita assim:
    myVar -= 5;
*/

let d = 11;
let e = 9;
let f = 3;

d -= 6;
e -= 15;
f -= 1;
console.log(d,e,f);

// 23 - Atribuir de modo composto com multiplicação aumentada.

let g = 5;
let h = 12;
let i = 4.6;

g *= 5;
h *= 3;
i *= 10;
console.log(g,h,i);

// 24 - Atribuir de modo composto com divisão aumentada.
let j = 48;
let k = 108;
let l = 33;

j /= 12;
k /= 4;
l /= 11;
console.log(j,k,l);

// 25 - Escapar aspas literais em strings.
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
console.log(myStr);

// 26 - Cercar uma string com aspas simples.
const yourStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(yourStr);

// 27 - Escapar sequências em strings.
/*
Código	Saída
\'	aspas simples
\"	aspas duplas
\\	barra invertida
\n	nova linha
\t	tab
\r	retorno de carro
\b	retroceder
\f	quebra de página
*/

const escapeStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(escapeStr);

// 28 - Concatenar strings com o operador mais.
const concatenarStr = "This is the start." + " This is the end.";
console.log(concatenarStr);

// 29 - Concatenar strings com o operador mais igual.
let concMaStr = "This is the first sentence.";
concMaStr += " This is the second sentence.";
console.log(concMaStr);

// 30 - Criar strings com variáveis.
const myName = "Lays Ramos";
const togStr = "My name is " + myName + " and I am well!";
console.log(togStr);