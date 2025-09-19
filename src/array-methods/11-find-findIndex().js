// ~ Array Methods
// * .FIND()   

const array = [1, , 3, 4, 5, 6, 7, 'Teste']

const evenNumbers = array.find(item => item % 2 === 0)
document.body.innerText = 'find => Números pares \n'
// document.body.innerText = JSON.stringify(evenNumbers)
document.body.innerText = evenNumbers
// Out: 4

//=> o .find() retorna o valor do primeiro item que satisfassa a condição
//=> Não encontrando valor algum, o retorno é 'undefined'
const arrayOddNumbers = [1, 11 , 3, 17, 5, .25, 7, 'Teste']
const oddNumbers = arrayOddNumbers.find(item => item % 2 === 0)
document.body.innerText = oddNumbers
// Out: undefined


//=============================================================================

// ~ Array Methods
// * .FINDINDEX()

//=> Já o .findIndex() retorna o ÍNDICE do primeiro item que satisfassa a condição
const evenNumbersIndex = array.findIndex(item => item % 2 === 0)
document.body.innerText = 'findIndex => Números pares \n'
document.body.innerText = evenNumbersIndex
// Out: 3
	// 		^ [ 1 ,   , 3 , 4 , 5 , 6 , 7 , 'Teste' ]
	//		!   ⁰   ¹   ²   ³   ⁴   ⁵	⁶      ⁷

//=> Não encontrando valor algum, o retorno é 'undefined'
const arrayOddNumbersIndex = [1, 11 , 3, 17, 5, .25, 7, 'Teste']
const oddNumbersIndex = arrayOddNumbersIndex.find(item => item % 2 === 0)
document.body.innerText = oddNumbersIndex
// Out: undefined
