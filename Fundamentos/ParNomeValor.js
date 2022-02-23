// par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaa'// contexto léxico 2
    return saudacao
}

const saudacao = 'Opa'

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Alisson',
    idade: 28,
    peso: 65,
    endereco: {
        lagradouro: 'Rua J',
        numero: 69
    }
}