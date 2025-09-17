// ...REST OPERATOR(Destructuring)

const user = {
	userName: 'Laura',
	idade: 31,
	address: {
		street: 'Mário Lopes',
		number: 916
	}
}


/* ====================== */
// com a DESESTRUTURAÇÃO
/* ====================== */

// const { userName } = user
// document.body.innerText = JSON.stringify(userName)
// Out: 
//      "Laura"


/* ====================== */
// com ...REST OPERATOR
/* ====================== */

const { userName, ...rest } = user
document.body.innerText = JSON.stringify( userName )
document.body.innerText = JSON.stringify({ userName, rest })
document.body.innerText = JSON.stringify( rest )
// Out: {
//          "idade":31,
//          "address":{
//              "street":"Mário Lopes",
//              "number":916
//          }           
//      }

//=> A PRIMEIRA CHAVE RETORNA O VALOR SOLICITADO
//=> JÁ A SEGUNDA CHAVE, RETORNA O RESTANTE DE TODO O OBJETO. 


// ------------------------------------------------------------------------

/* ====================== */
// DESESTRUTURAÇÃO c/ []
/* ====================== */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const first = array[0]
document.body.innerText = JSON.stringify( first )

const [fir, sec, , fou, ...restum] = array
document.body.innerText = JSON.stringify( fir )
document.body.innerText = JSON.stringify( sec )
document.body.innerText = JSON.stringify({ fir, sec, fou })
document.body.innerText = JSON.stringify( restum )
