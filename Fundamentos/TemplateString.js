const nome = "Rebeca";
const concatenaçao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!`
console.log(concatenaçao, template);

// expressoes
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);

