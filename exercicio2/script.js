/*Soma  */
const soma = (num1, num2) => {
  return num1 + num2;
};
console.log(soma(41, 52));

/* Maior ou igual */

const maiorIgual = (numero1, numero2) => {
  if (numero1 >= numero2) {
    return true;
  } else {
    return false;
  }
};
console.log(maiorIgual(49, 35));

/* Impar ou par */
const imparouPar = (num) => {
  if (num % 2 === 0) {
    return "Par";
  } else {
    return "impar";
  }
};
console.log(imparouPar(8));

/* Recebendo somente string */
const tamanhoString = (string) => {
  console.log(
    ` tamanho da string  \" ${string.toUpperCase()}\" é ${
      string.length
    } caracteres. `
  );
};

const string1 = prompt(`Digíte uma frase: `);

tamanhoString(string1);
/* const string = (texto) => {
  let quantidadeLetras = texto.length
  

  return quantidadeLetras
};
console.log(string("Paulo"));
 */
