// 1- COMMENTS.

// This is an in-line comment.

/* This is a
multi-line comment */

// 2 - Declarar variáveis JavaScript.

var myName;

// 3 - Armazenar valores com o operador de atribuição.

var a;
a = 7;
console.log(a);

// 4 - Atribuir o valor de uma variável para outra.

var a;
a = 7;
var b;
b = a;
console.log(b);

// 5 - Inicializar variáveis com o operador de atribuição.

var myVar = 0;
var a = 9;

// 6 - Declarar variáveis de string.

var myFirstName = "Lays"
var myLastName = " Ramos"
console.log(myFirstName + myLastName);

// 7 - Entender variáveis não inicializadas.

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a,b,c);

// 8 - caracteres maiúsculos e minúsculos em variáveis.

/* 
    Melhores práticas
Escreva nomes de variáveis em JavaScript em camelCase. 
Em camelCase, nomes de variáveis com mais de uma palavra possuem
a primeira palavra toda em minúscula e a primeira letra de cada 
palavra subsequente capitalizada.

*/
// exemplo
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
console.log(studlyCapVar,properCamelCase,titleCaseOver);

// 9 - var e let
/*
    Var, você pode sobrescrever facilmente declarações de variável.
    exemplo abaixo:
*/

var camper = "James";
var camper = "David";
console.log(camper); // David sera exibido.

/* 
    Let, pode ser declarada uma única vez.
    exemplo abaixo:
*/

let camperOne = "James";
let campertwo = " David";
console.log(camperOne + campertwo); //impossivel colocar a mesma varivel 

// 10 - const

/* 
    const possui todos os recursos maravilhosos que let tem,
    com o bônus adicional que variáveis declaradas usando 
    const são somente de leitura. 
    Elas têm um valor constante, o que significa que a variável 
    atribuída com const não pode ser atribuída novamente.
*/

const FCC = "freeCodeCamp";
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 