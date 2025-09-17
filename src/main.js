// Nullish Coalescing Operator
// Operador pra lidar com valores nulos

// const age = 31;
const age = 0;
// const age = null;


// => o valor 'null' não é um valor que o js entende como 'válido', assim como:
//  0, '', [], false, undefined, null => falsy

// => OPERADOR || ou
//   1ª instrução: lado esquerdo é válido?
//   2ª instrução: (não sendo) apresente o lado direito!

// ou seja: age sendo === 0, a resposta ainda será 'não informado com o operador ||

document.body.innerText = `sua idade é: ${(age || 'Não informado!')}`

// contudo com o nullish, o valor retornado é zero, pois para o js, nesse caso, o '0' é representativo.
document.body.innerText = `sua idade é: ${(age ?? 'Não informado!')}`
