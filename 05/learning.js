// 41 - Acessar array de dados com índices.
const myArray = [50, 60, 70];
const myData = myArray[0];
console.log(myArray[0]);

// 42 - Modificar dados de array com índices.
const changeArray = [18, 64, 99];
changeArray[0] = 45;
console.log(changeArray);

// 43 - Acessar arrays multidimensionais com índices.
const multiArray = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [[10, 11, 12], 13, 14],
 ];
const select8 = multiArray[2][1];
console.log(select8);

 // 44 - Manipular arrays com o método push.
const maniArray = [["John", 23], ["cat", 2]];
maniArray.push(["dog", 3]);
console.log(maniArray);

// 45 - Manipular arrays com o método pop. remove o ultimo
const methodPop = [["John", 23], ["cat", 2]];
const removedFromMethodPop = methodPop.pop();
console.log(removedFromMethodPop);

// 46 - Manipular arrays com o método shift. remove o primeiro
const methodoShift = [["John", 23], ["dog", 3]];
const removedFromMethodoShift = methodoShift.shift();
console.log(removedFromMethodoShift);

// 47 - Manipular arrays com o método unshift. adicionar no inicio 
const methodoUnshift = [["John", 23], ["dog", 3]];
methodoUnshift.shift();
methodoUnshift.unshift(["Paul", 35]);
console.log(methodoUnshift);

// 48 - Criar lista de compras.

