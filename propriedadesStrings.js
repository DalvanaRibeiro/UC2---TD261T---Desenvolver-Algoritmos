// A prorpiedade length nos diz qual é o tamanho de uma string, incluindo os espaços

const nome = " João NaoSei Cavaaaloo da Silva1 "
console.log(nome.length)

///////////////////////////////////////////////////
// Método: toLowerCase()
// Transforma todas as letras da string em minúscula
const frase = " O DIa Está LIndooooooo DeMaIs!"
const fraseMinuscula = frase.toLocaleLowerCase()
console.log(fraseMinuscula)
///////////////////////////////////////////////////
// Método: toUpperCase()
// transforma todas as letras da string em maiúscula

const frase2 = "O dia está Terminando!"
const fraseMaiuscula = frase2.toUpperCase()
console.log(fraseMaiuscula)
///////////////////////////////////////////////
// Método: trim()
// retira espaços que existem antes e depois de sua string (útil em formulários e logins)
const email = "        senaquinho@senacrs.com       "
console.log(email.trim())
/////////////////////////////////////////////////////
// Método: includes(caracteres): determina se um conjunto de caracteres pode ser encontrado dentro
// de uma outra string, retorna um valor booleando true ou false
const frase3 = "Hoje comi cenoura"
console.log(frase3.includes("cenoura"))
console.log(frase3.includes("batata"))
