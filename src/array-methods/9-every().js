// ~ Array Methods
// * .EVERY()

const array = [1, 2, 3, 4, 5, 6, 7]

//=> O .every() retorna apenas um booleano

document.body.innerText = 'every => São só números? \n'
const allNumbers = array.every(index => typeof index === 'number')

document.body.innerText += JSON.stringify(allNumbers)
Out: true

//=> Caso o .every() encontrar algum caso que não entre na condição, o output será false

const array1 = [1, 2, 3, 4, 5, 6, 7, 'teste']
document.body.innerText = 'every => São só números? \n'
const allNumbers1 = array1.every(index => typeof index === 'number')

document.body.innerText += JSON.stringify(allNumbers1)
Out: false
