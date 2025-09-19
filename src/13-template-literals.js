// TEMPLATE LITERALS
// simples

const userName = null
document.body.innerText = 'Bem vindo(a), ' + userName + '!'
document.body.innerText = `Bem vindo(a), ${userName ?? 'Visitante'}!`

// ==> TODO: 
	// Estudar 'tagged template'
