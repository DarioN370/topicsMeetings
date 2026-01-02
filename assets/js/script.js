function adicionarPauta(){

    const inputPauta = document.getElementById("inputPauta"); //aqui eu coloco que o inpuTarefa vai pegar o valor do input
    let pauta = inputPauta.value.trim(); // o trim retira espaços em branco no inicio e fim do texto, aqui eu pego o que o user digitou no meu input e atribuo ele na variavel tarefa 
    
    const mensagem = document.getElementById("mensagem");
    
    // se o valor do input for vazio, então mostre uma mensagem de erro para o user 
    if (pauta == ""){// duas aspas é considerado vazio  -  Sinal de dois iguais é pra comparar igualdade
        let mensagemErro = "Digite uma pauta para adiciona-la !!!!!!";  // definindo a variavel mensagem com a mensagem que eu quero 
        mensagem.textContent = mensagemErro  //aqui eu estou exibindo que a pauta precisa ser adicionada
        mensagem.style.color = "#a34743"

        //Timer que limpa a mensagem de erro
        setTimeout(() => {
            mensagem.textContent = "";
        }, 2000);
    } else {
        let mensagemSucesso = "Pauta adicionada com sucesso.";  // definindo a variavel mensagem com a mensagem que eu quero 
        mensagem.textContent = mensagemSucesso; //aqui eu estou exibindo que a pauta foi adicionada
        mensagem.style.color = "#28a745";
        
        // Timer para limpar a mensagem de sucesso
        setTimeout(() => {
            mensagem.textContent = "";
        }, 2000);

        const listaPautas = document.getElementById("listaPautas"); //aqui ele pega o elemento com o id listaPautas e armazena na var listaPautas
        let novaPauta = document.createElement("li"); //vou criar o elemento que esta entre parenteses
        novaPauta.textContent = pauta; //aqui eu pego o novaPauta e peço pra ele escrever com o textContent a variavel pauta, assim ele vai listar certo
        listaPautas.appendChild(novaPauta); //aqui eu peço para que o elemento pai no caso a UL, crie elementos filhos, que são as LI, que no caso é um item na lista de pautas

        //CIRANDO O BOTAO DE REMOVER
        let botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Remover"
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.style.padding = "5px 10px"; // Um pouco menor que o principal
        botaoRemover.style.fontSize = "0.8em";

        // Adicionar a função de clique para remover o item pai (a li)
        botaoRemover.onclick = function() {
            listaPautas.removeChild(novaPauta);
            mensagem.textContent = "Pauta removida!";
            mensagem.style.color = "#331F19";
        };

        // Coloca o botão dentro da li e a li dentro da ul
        novaPauta.appendChild(botaoRemover);
        listaPautas.appendChild(novaPauta);

    }


    inputPauta.value = ""; //aqui eu peço para depois que o user digitar, e dps que o codigo rodar, eu mando ele esvaziar o campo de input
};