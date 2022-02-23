const escola = "Cod3r"

// Pegar determinado caractere em uma string
console.log(escola.charAt(4));
console.log(escola.charAt(5));

// Pegar o codigo do caractere
console.log(escola.charCodeAt(3));

// Pegar o indice daquele caractere
console.log(escola.indexOf('3'));
// execuçao de duas chamadas de substring passando o inicial e o final
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

// Uma string concatenando com uma variavel e outra string
console.log("Escola " .concat(escola).concat("!"))
// outro modelo de concatenaçao 
console.log("Escola " + escola + "!")

console.log('3' + 2)
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))