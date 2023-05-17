
// DADOS
let areas = {
    aa: null,
    bb: null,
    cc: null,
    dd: null,
    ee: null,
    ff: null,
    gg: null,
    hh: null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    aE: null,
    bE: null,
    cE: null,
    aD: null,
    bD: null,
    cD: null,
    CC: null
};

// Variável global para armazenar o item arrastado
let draggedItem = null;

// EVENTOS

// Adiciona event listeners para os itens arrastáveis
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

// Adiciona event listeners para as áreas de destino
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

// Adiciona event listeners para a área neutra
document.querySelector('.areaNeutra').addEventListener('dragover', dragOverNeutral);
document.querySelector('.areaNeutra').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.areaNeutra').addEventListener('drop', dropNeutral);

// FUNÇÕES DO ITEM

// Função chamada quando um item começa a ser arrastado
function dragStart(e) {
    draggedItem = e.currentTarget;
    draggedItem.classList.add('dragging');
}

// Função chamada quando um item termina de ser arrastado
function dragEnd(e) {
    draggedItem.classList.remove('dragging');
    draggedItem = null;
}

// FUNÇÕES AREA

// Função chamada quando um item está sendo arrastado sobre uma área
function dragOver(e) {
    if (e.currentTarget.querySelectorAll('.item').length === 0) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}

// Função chamada quando um item deixa uma área
function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

// Função chamada quando um item é solto em uma área
function drop(e) {
    e.currentTarget.classList.remove('hover');
    if (draggedItem) {
        // Remove o elemento arrastado de qualquer área em que esteja antes de adicioná-lo à nova área
        document.querySelectorAll('.area').forEach(area => {
            if (area.contains(draggedItem)) {
                area.removeChild(draggedItem);
            }
        });

        e.currentTarget.appendChild(draggedItem);
        updateAreas();
    }
}

// Função chamada quando um item é arrastado sobre a área neutra
function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

// Função chamada quando um item deixa a área neutra
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover');
}

// Função chamada quando um item é solto na área neutra
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover');
    if (draggedItem) {
        // Remove o elemento arrastado de qualquer área em que esteja antes de adicioná-lo à área neutra
        document.querySelectorAll('.area').forEach(area => {
            if (area.contains(draggedItem)) {
                area.removeChild(draggedItem);
            }
        });

        e.currentTarget.appendChild(draggedItem);
        updateAreas();
    }
}

// Lógica de atualização das áreas

// Função que atualiza o objeto 'areas' com o estado atual das áreas
function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');

        if (area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }

        if(areas.CC !== null) {
            document.querySelector('#block-win').style.border = '4px solid #ff8000'
        } else {
            document.querySelector('#block-win').style.border = '4px solid #623097'
        }
    });
}
