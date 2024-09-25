
// --------- ATIVIDADE 1 ----------
document.getElementById("btnEnviar").addEventListener("click", validarDados);

function validarDados() {
    // Ocultando a mensagem de erro inicialmente
    let mensagemErro = document.getElementById("mensagem-erro");
    mensagemErro.style.display = "none";
    mensagemErro.innerHTML = ""; // Limpa a mensagem anterior

    // Obtendo os dados do formulário
    let nomeCliente = document.frmRegistro.inCli.value.trim();
    let telefone = document.frmRegistro.inFone.value.trim();
    let email = document.frmRegistro.inMail.value.trim();
    let nomeProduto = document.frmRegistro.inProd.value.trim();
    let quantidade = document.frmRegistro.inQtd.value;
    let valorUnitario = document.frmRegistro.inVal.value;

    // Validação dos campos
    if (nomeCliente.length < 5) {
        mensagemErro.innerHTML += "O campo 'Nome do cliente' deve ter pelo menos 5 caracteres!<br>";
    }
    if (telefone.length === 0) {
        mensagemErro.innerHTML += "O campo 'Telefone' não pode estar vazio!<br>";
    }
    if (email.length === 0) {
        mensagemErro.innerHTML += "O campo 'E-mail' não pode estar vazio!<br>";
    }
    if (nomeProduto.length < 5) {
        mensagemErro.innerHTML += "O campo 'Nome do produto' deve ter pelo menos 5 caracteres!<br>";
    }
    if (quantidade <= 0) {
        mensagemErro.innerHTML += "O campo 'Quantidade' deve ser positivo!<br>";
    }
    if (valorUnitario <= 0) {
        mensagemErro.innerHTML += "O campo 'Valor unitário' deve ser positivo!<br>";
    }

    // Se houver mensagens de erro, exibe a div
    if (mensagemErro.innerHTML !== "") {
        mensagemErro.style.display = "block";
    } else {
        // Exibe mensagem de sucesso na div
        mensagemErro.style.display = "block";
        mensagemErro.innerHTML = "Dados enviados com sucesso!";
        mensagemErro.style.color = "green"; // Adiciona cor verde para sucesso
    }
}

// --------- ATIVIDADE 2 ----------








// --------- ATIVIDADE 3 ----------

function alterarLampada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    let btnEnviar = document.getElementById("btnEnviar");

    // Fazendo a troca da imagem
    if (arquivo === 'acesa.jpg') {
        imagem.src = 'img/apagada.jpg';
        btnEnviar.textContent = 'Acender'; // Muda o texto do botão
    } else {
        imagem.src = 'img/acesa.jpg';
        btnEnviar.textContent = 'Apagar'; // Muda o texto do botão
    }
}

// --------- ATIVIDADE 4 ----------

document.getElementById('btnEnviar').addEventListener('click', calcularDesconto);

function calcularDesconto() {
    const valorPedido = parseFloat(document.getElementById('inValorPedido').value);
    let percentualDesc = 0;

    if (valorPedido >= 2000) {
        percentualDesc = 1.5;
    } else if (valorPedido >= 1500) {
        percentualDesc = 1.0;
    } else if (valorPedido >= 1000) {
        percentualDesc = 0.8;
    } else if (valorPedido >= 500) {
        percentualDesc = 0.5;
    }

    const valorDesconto = (valorPedido * percentualDesc) / 100;
    const valorFinal = valorPedido - valorDesconto;

    document.getElementById('inPercDesc').value = percentualDesc.toFixed(2);
    document.getElementById('inValDesc').value = valorDesconto.toFixed(2);
    document.getElementById('inValFinal').value = valorFinal.toFixed(2);
}