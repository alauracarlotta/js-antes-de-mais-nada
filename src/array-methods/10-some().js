// ~ Array Methods
// * .SOME()  
// ! != .sum() [que seria "somar", enquanto .some() seria "algum"] 

const array = [1, 2, 3, 4, 5, 6, 7, 'Teste']

//=> O .some() retorna apenas um booleano, contudo ele precisa de só uma
// evidencia para retornar 'true' (!= do .every(), onde a condição precisa ser
// única para todo o array)

document.body.innerText = 'some => Tem algum texto? \n'
const hasAnyText = array.some(index => typeof index === 'string')
// const hasAnyText =  array.some(index => typeof index !== 'number')

document.body.innerText += JSON.stringify(hasAnyText)
Out: true

//=> ...E 'false' retornará caso não encontre nenhum valor na condição 

const array1 = [1, 2, 3, 4, 5, 6, 7]
document.body.innerText = 'some => Tem algum texto? \n'
const hasAnyText1 = array1.some(index => typeof index === 'string')
// const hasAnyText =  array.some(index => typeof index !== 'number')

document.body.innerText += JSON.stringify(hasAnyText1)
Out: false
