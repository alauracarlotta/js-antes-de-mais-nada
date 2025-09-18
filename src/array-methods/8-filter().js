// ~ Array Methods
// * .FILTER()

const array = [1, 2, 3, 4, 5, 6, 7]

//=> Já o metodo .filter() não altera dados. Somente "filtra" com base em alguma condição.

document.body.innerText = 'filter (números ímpares) \n'
const newArrayFilter = array.filter(index => index % 2 !== 0)

document.body.innerText += JSON.stringify(newArrayFilter)

//=> Podemos ainda unir metodos

document.body.innerText = 'filter (números ímpares + 1000x) \n'
const newArrayFilterWithMap = array
	.filter(index => index % 2 !== 0)
	.map(index => index * 1000)

document.body.innerText += JSON.stringify(newArrayFilterWithMap)
