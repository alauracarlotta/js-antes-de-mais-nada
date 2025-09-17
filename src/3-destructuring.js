// Destructuring
// refere ao formato de salvar vaáriaveis de um objeto

const user1 = {
	userName1: 'Laura',
	idade1: 31,
	address1: {
		street1: 'Mário Lopes',
		number1: 916
	}
}

const user2 = {
	userName2: 'Lucimar',
  nickname2: 'Maria do Bairro Soy',
	idade2: 54,
	address2: {
		street2: 'Geronimo Bardi',
		number2: 385
	}
}

const user3 = {
	userName3: 'Rubens pai',
  nickname3: 'Rubão ou Rubinho',
	idade3: 60,
	address3: {
		street3: 'Geronimo Bardi',
		number3: 385
	}
}

//=> Posso fazer dessa maneira, porém...
const endereco = user1.address1
document.body.innerText = JSON.stringify(endereco)
// Out: {
//        "street1":"Mário Lopes",
//        "number1":916
//      }


/* ====================== */
// com a DESESTRUTURAÇÃO
/* ====================== */

// const { address } = user
// document.body.innerText = JSON.stringify(address)

const { address1, userName1, idade1: age1, nickname1="Carlottinha" } = user1
document.body.innerText = JSON.stringify({ address1, age1, userName1, nickname1})
// Out: {
//        "address1":{
//            "street1":"Mário Lopes",
//            "number1":916
//        },
//        "age1":31,
//        "userName1":"Laura",
//        "nickname1":"Carlottinha"
//      }

//=> Posso renomear a chave de um objeto 
//    [idade1: age1]
//=> Assim como posso setar um valor 'default' para uma chave, caso ela não venha setada no meu objeto 
//    [nickname1="Carlottinha"]



const { address2, userName2, idade2: age2, nickname2="Carlottinha" } = user2
document.body.innerText = JSON.stringify({ address2, age2, userName2, nickname2})
// Out: {
//        "address2":{
//            "street2":"Geronimo Bardi",
//            "number2":385
//        },
//        "age2":54,
//        "userName2":"Lucimar",
//        "nickname2":"Maria do Bairro Soy"
//      }


// --------------------------------------------------------------------------
/* ============================================ */
// A DESESTRUTURAÇÃO também serve para funções: 
/* ============================================ */

function showAge({ idade3 }) {
  return idade3
}

document.body.innerText = JSON.stringify(showAge(user3))
