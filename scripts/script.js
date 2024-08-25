const textInput = document.querySelector(".text_input");
const textOutput = document.querySelector(".text_output");

function btnCriptografar(){
    const textoCriptografado = criptografar(textInput.value);
    textOutput.value = textoCriptografado;
    textInput.value = "";

    // Ocultar elementos
    const imagem = document.querySelector(".imagem-menino");
    const mensagemAdvertencia = document.querySelector(".mensagem-advertencia");
    const mensagemInfo = document.querySelector(".mensagem-info");
    imagem.classList.add("hidden");
    mensagemAdvertencia.classList.add("hidden");
    mensagemInfo.classList.add("hidden");

    // Exibir resultado e botão
    textOutput.classList.remove("hidden");
    const botaoCopiar = document.querySelector(".btn_copiar");
    botaoCopiar.classList.remove("hidden");
}

function criptografar(stringCriptografada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }

    return stringCriptografada;
}


function btnDescriptografar(){
    const textoDescriptografado = descriptografar(textInput.value);
    textOutput.value = textoDescriptografado;
    textInput.value = "";
}

function descriptografar(stringDescriptografada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }

    return stringDescriptografada;
}

function copiar() {
    const mensagemCopiada = document.querySelector('.btn_copiar');

    mensagemCopiada.addEventListener('click', () => {
    // Seleciona o texto da área de saída
    textOutput.select();

    // Copia o texto selecionado para a área de transferência
    navigator.clipboard.writeText(textOutput.value)
        .then(() => {
        alert('Texto copiado com sucesso!');
        })
        .catch(err => {
        console.error('Falha ao copiar:', err);
        alert('Erro ao copiar o texto. Tente novamente.');
        });
    });
}