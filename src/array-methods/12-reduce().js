// ~ Array Methods
// * .REDUCE()
// Muito utilizado quando queremos a partir de um determinado array, criar
// "algo" totalmente novo!
// - Sem muitas regrasa, ou seja, é possivel fazer quase tudo o que quisermos.

// ! Parâmetros recebidos um pouco !=
// ! 	param1 = function
// ! 	param2 = qual é o valor inicial da nova estrutura de dados que queremos, podendo ser um [], {}, etc
// ! 	param(1) = function => accumulator(acumulador)
// ! 	param(1) = function => item (para percorrer cada item do array)
// ! 		result => o reducer espera que retornemos o acc a cada iteração

const array = [1, , 3, -4, 5, 6, 7, 'Teste', 0.27]

const sumNumbers = array.reduce((acc, item) => {
	document.body.innerText += JSON.stringify(`${acc} ---->  ${item}`) + '\n'
	return acc + item
}, [{}, 'priscila'])

// * RETORNOS:
// * VALOR INICIAL: []
// Out:
//		----> 1
//		1 ----> 3
//		13 ----> -4
//		13-4 ----> 5
//		13-45 ----> 6
//		13-456 ----> 7
//		13-4567 ----> Teste
//		13-4567Teste ----> 0.27

// * RETORNOS:
// * VALOR INICIAL: array.length
// Out:
//		9 ----> 1
//		10 ----> 3
//		13 ----> -4
//		9 ----> 5
//		14 ----> 6
//		20 ----> 7
//		27 ----> Teste
//		27Teste ----> 0.27

// * RETORNOS:
// * VALOR INICIAL: 'string'
// Out:
//		string ----> 1
//		string1 ----> 3
//		string13 ----> -4
//		string13-4 ----> 5
//		string13-45 ----> 6
//		string13-456 ----> 7
//		string13-4567 ----> Teste
//		string13-4567Teste ----> 0.27

// * RETORNOS:
// * VALOR INICIAL: {}
// Out:
//		"[object Object] ----> 1"
//		"[object Object]1 ----> 3"
//		"[object Object]13 ----> -4"
//		"[object Object]13-4 ----> 5"
//		"[object Object]13-45 ----> 6"
//		"[object Object]13-456 ----> 7"
//		"[object Object]13-4567 ----> Teste"
//		"[object Object]13-4567Teste ----> 0.27"

// * RETORNOS:
// * VALOR INICIAL: [{}, 'priscila']
// Out:
//		"[object Object],priscila ----> 1"
//		"[object Object],priscila1 ----> 3"
//		"[object Object],priscila13 ----> -4"
//		"[object Object],priscila13-4 ----> 5"
//		"[object Object],priscila13-45 ----> 6"
//		"[object Object],priscila13-456 ----> 7"
//		"[object Object],priscila13-4567 ----> Teste"
//		"[object Object],priscila13-4567Teste ----> 0.27"


document.body.innerText = sumNumbers
// Out: 27Teste0.27
