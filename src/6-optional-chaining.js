// OPTIONAL CHAINING
// 'FORMA PARA TRATAR ERROS'

const user = {
	userName: 'Laura',
	idade: 31,
  	/* address: {
		street: 'Mário Lopes',
		number: 916
	} */
  	address: {
		street: 'Mário Lopes',
		number: 916,
	    zip: {
	      zipcode: '04754010',
	      city: 'São paulo',
	      state: 'SP'
	    },
		/* showFullAddress() {
			return `Eu moro na rua ${this.street}, nº ${this.number} - na cidade de ${this.zip.city}! <3`
		} */
		showFullAddress() {
			return `Eu moro na rua ${this.street}, nº ${this.number} - na cidade de ${this.zip.city}! <3`
		}
	},
}

document.body.innerText = JSON.stringify( user.address.street)
//=> Caso address não existisse, daria um erro no console... (value undefined)

document.body.innerText = user.address ? user.address.street : "Endereço não informado"
//=> Uma forma de tratar o erro

document.body.innerText = user.address.zip.zipcode
//=> Mas e se caso o 'address' não existisse??
//=> Poderíamos fazer um 'if' meio 'confuso', se liga:


document.body.innerText = user.address
	? user.address.zip
		? user.address.zip.zipcode
		:'Não informado'
	: 'Não informado'


// ------------------------------------------------------------------------

// ---------------------------
/* Com o OPITIONAL CHAINING */
// ---------------------------

document.body.innerText = user.address?.zip?.city ?? "Não informado"
//=> O QUE ISSO TUDO QUER DIZER???
//=> Com o opitional chaining, entendemos que: 
// 		* caso address não exista em user, o interpretador parará de procurar, ou seja, não acessará nem .zip e nem .city. 
// 		* Da mesma forma que: 
// 				* caso zip não exista dentro de address (que por sua vez, não existirá dentro de user), o interpretador parará de procurar, ou seja, não acessará .city. E assim seguiria para cada item aninhado nas chaves do objeto.


// = O que serve também, caso houvesse uma gunção para dentro do objeto
document.body.innerText = user.address?.showFullAddress?.() ?? "Não informado"


// ------------------------------------------------------------------------


//=> Podemos ter uma variável com a chave do que queremos buscar no objeto

const key = 'userName'
document.body.innerText = user[key]

const street = 'street'
document.body.innerText = user.address[street]
