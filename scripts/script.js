const textInput = document.querySelector(".text_input");
const textOutput = document.querySelector(".text_output");

function btnCriptografar(){
    const textoCriptografado = criptografar(textInput.value);
    textOutput.value = textoCriptografado;
    textInput.value = "";
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