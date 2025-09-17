// SHORT SYNTAX

const userName = 'Laura'
const age = 31

const user = {
	userName: userName,
  age: age
}

document.body.innerText = JSON.stringify( user )

//=> Porém, com a short syntax, não é necessário repetir os nomes das chave já que elas são iguais.

const user1 = {
  userName,
  age
}

document.body.innerText = JSON.stringify( user1 )
