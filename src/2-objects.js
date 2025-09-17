// Objects
// Conjuntos de chave e valor

const user = {
	name: 'Laura',
	age: 31,
	address: {
		street: 'Mário Lopes',
		number: 916
	}
}

// para printar algum objeto na tela, use 'JSON.stringfy()'
document.body.innerText = JSON.stringify(user)
// Out: {
//        name: 'Laura',
//        age: 31,
//        address: { street: 'Mário Lopes', number: 916 }
//      }

// ------------------------------------------------------------------------

/* =================== */
// OPERADOR 'in'
/* =================== */

document.body.innerText = 'name' in user
// Out: true

document.body.innerText = 'nickname' in user
// Out: false


// ------------------------------------------------------------------------


/* =================== */
// MÉTODOS: //
/* =================== */

document.body.innerText = JSON.stringify(Object.keys(user))
// Out: [
//        name,
//        age,
//        address
//      ]

//=> retorna um vetor com todas as chaves


document.body.innerText = JSON.stringify(Object.values(user))
// Out: [ 
//        'Laura',
//         31, 
//        { 
//            street: 'Mário Lopes',
//            number: 916
//        }
//      ]

//=> retorna um vetor com todos os valores de cada chave

document.body.innerText = JSON.stringify(Object.entries(user))
// Out: [
//        [
//          "name","Laura"
//        ],
//        [
//          "age",31
//        ],
//        [
//          "address", 
//          {
//              "street":"Mário Lopes",
//              "number":916
//          }
//        ]
//      ] 

//=> retorna um vetor com da índice sendo chave/valor 
