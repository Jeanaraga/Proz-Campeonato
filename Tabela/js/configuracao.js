// Objeto com os nomes
let nomes = {
  nome1: null,
  nome2: null,
  nome3: null,
  nome4: null,
  nome5: null,
  nome6: null,
  nome7: null,
  nome8: null,
  nome9: null,
  nome10: null,
  nome11: null,
  nome12: null,
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
    document.querySelector('#p8').value,
    document.querySelector('#p9').value,
    document.querySelector('#p10').value,
    document.querySelector('#p11').value,
    document.querySelector('#p12').value,
  ];

  // Remover a div da outra seção se nome9/p9 está vazio
  const divOpcional = document.querySelector('.oitavas');
  if (valores[8] === '') {
    divOpcional.remove();
    document.querySelector('.dis').innerHTML = `<span class="item nome1" draggable="true">P1</span>`;
    document.querySelector('.dis4').innerHTML = `<span class="item nome2" draggable="true">P4</span>`;
    document.querySelectorAll('.item').forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
  });
  }
  const divOpcional2 = document.querySelector('.met2 .oitavas');
  if (valores[8] === '') {
    divOpcional2.remove();
    document.querySelector('.dis2').innerHTML = `<span class="item nome2" draggable="true">P2</span>`;
    document.querySelector('.dis3').innerHTML = `<span class="item nome3" draggable="true">P3</span>`;
    document.querySelectorAll('.item').forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
  });

  }

  // Verificar se o nome9/p9 está vazio
  if (valores[8] === '') {
    valores = valores.slice(0, 8); // Remover valores a partir do índice 8
  }

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