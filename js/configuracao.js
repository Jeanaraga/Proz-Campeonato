
// Objeto com os nomes
let nomes = {
  nome1: null,
  nome2: null,
  nome3: null,
  nome4: null,
  nome5: null,
  nome6: null,
  nome7: null,
  nome8: null
}

// Função para capitalizar a primeira letra de uma string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Função para embaralhar os nomes de forma aleatória
function shuffleNames() {
  // Array com os valores dos inputs
  let valores = [
    document.querySelector('#p1').value,
    document.querySelector('#p2').value,
    document.querySelector('#p3').value,
    document.querySelector('#p4').value,
    document.querySelector('#p5').value,
    document.querySelector('#p6').value,
    document.querySelector('#p7').value,
    document.querySelector('#p8').value
  ];

  // Embaralhar o array de valores
  for (let i = valores.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [valores[i], valores[j]] = [valores[j], valores[i]];
  }

  // Atribuir os valores embaralhados aos nomes
  Object.keys(nomes).forEach((nome, index) => {
    nomes[nome] = valores[index];
  });

  // Atualizar os elementos HTML com os nomes embaralhados
  const nomeElements = document.querySelectorAll('.item');
  Object.values(nomes).forEach((nome, index) => {
    nomeElements[index].textContent = capitalizeFirstLetter(nome);
  });
}

// Event listener para o botão de guardar os nomes
document.querySelector('button').addEventListener('click', guardarNome);

// Função para guardar os nomes digitados
function guardarNome(e) {
  e.preventDefault();
  shuffleNames();
}


  