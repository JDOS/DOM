const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';

    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;//qual botao foi clicado

    const tarefaCompleta = botaoConclui.parentElement;//pai do botao

    tarefaCompleta.classList.toggle('done');//efeito riscado class css e toggle verdadeiro ou falso
}

export default BotaoConclui