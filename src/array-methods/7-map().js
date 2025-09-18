// ~ Array Methods
// * .MAP()

const array = [1, 2, 3, 4, 5, 6, 7]

document.body.innerText = 'iNDEX C/ FOR NORMAL'
for (const index of array){
	document.body.innerText += `${index} => ` 
}


document.body.innerText = 'iNDEX C/ FOREACH \n'
array.forEach(indexDoForeach => {
	document.body.innerText += `${indexDoForeach} *** ` 
})


//=> Já com o .map(), há um retorno de um outro vetor modificado, porém com o mesmo tamanho que o array origional.
document.body.innerText = 'iNDEX C/ .map() \n'
const newArrayMap = array.map(indexDoMap => {
	if (indexDoMap % 2 === 0) {
		return indexDoMap * 10
	}
	return indexDoMap
})

document.body.innerText = JSON.stringify(newArrayMap)
