/* Função com nome */
function olaNome() {
  console.log("Paulo Vitor");
}

olaNome();

const tabuada1 = (numb1) => {
  for (let i = 1; i <= 10; i++) {
    console.log(numb1 * 1);
  }
};
tabuada1(6);

/* Refazendo o primeiro com Arrow function */
const nomeOla = (nome) => {
  return nome;
};

console.log(nomeOla("Paulo Vitor"));

/* Refazendo tabuada com Arrow function */

const tabuada = (numero) => {
  for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);
  }
};

tabuada(6);



