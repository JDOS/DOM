
const criarTarefa = (evento) =>{
    evento.preventDefault();//previne o reload da pagina gerada pelo formulário

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor);
    
    const tarefa = document.createElement('li');// cria um objeto DOM
    tarefa.classList.add('task'); //adiciona uma class css

    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo;

    lista.appendChild(tarefa);

    // insertBefore(pai, filho): Coloca um nó antes do outro.

    // replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.

    // removeChild(elemento): Remove um nó da árvore.


    input.value = "";
}

const novaTarefa = document.querySelector('[data-form-button]')


novaTarefa.addEventListener('click', criarTarefa);




