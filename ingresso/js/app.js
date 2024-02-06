function comprar() {
    //receber o tipo de ingresso
    //receber a quantidade de ingressos 
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    console.log(`quqantidade: ${quantidade}`);
    console.log(`Tipo de ingresso escolhido: ${tipoIngresso}`);

    let valorIngressoEscolhido = document.getElementById(`qtd-${tipoIngresso}`).textContent;
    let ingressoEscolhido = document.getElementById(`qtd-${tipoIngresso}`);
    console.log(`Quantidade disponivel do ingresso escolhido: ${valorIngressoEscolhido}`);

    //verificar se a qunatidade é valida 
    if (quantidade <= 0) {
        alert('Insira uma quantidade valida.')
    }else if (quantidade > parseInt(valorIngressoEscolhido)){
        alert(`Não há ingressos o suficiente para ${tipoIngresso} :(`)
    }else{
        //realizar calculo dos ingressos disponiveis
        valorIngressoEscolhido = valorIngressoEscolhido - quantidade
        alert('Compra realizada com sucesso!')
    }
     
    console.log(`Restante dos ingressos disponiveis: ${valorIngressoEscolhido}`);
   
    //adicionar os valores na lista 
    ingressoEscolhido.textContent = valorIngressoEscolhido;
    
    document.getElementById('qtd').value = '';
}
