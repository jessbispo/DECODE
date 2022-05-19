//criando variaveis uteis para as function seguintes
let botao = document.querySelector(".botaoEscolha") //selecionando o botão da pagina de criptografia para poder transforma-lo, com outros nomes ao clicar.
let codificar = document.querySelector("#codificar") //ativada para alterar o item botao. Quando clicado nesse input, o botao final se transformará em "codificar"
let decodificar = document.querySelector("#decodificar") //ativada para alterar o item botao. Quando clicado nesse input, o botao final se transformará em "decodificar"
let selecione = document.querySelector("select") //seleciona se o usuario deseja utilizar a codificação de cifra de césar ou base64
let recebeTexto = document.querySelector("#recebeTexto") //caixa que recebe o texto do user
let resultado = document.querySelector("#retornaTexto"); //caixa que devolve o texto do user
let incremento = document.querySelector('#incremento')
let botaoInicial = document.querySelector('.botaoInicial') // botao da pagina inicial

//adicionando funçao click ao botao inicial, para que seja redirecionado para pagina de criptografia

if (botaoInicial != null) { //
    botaoInicial.addEventListener('click', function() {
    location.assign('./decodifique.html')
}) 
}


// sumindo com o incremento ao clicar em base64
selecione.addEventListener("change", function (e) {

    if (e.target.value == "base64") {
        incremento.style.display = "none"
        botao.setAttribute("onclick", "base64()") 
    }
    else {
        incremento.style.display = "block";
        botao.setAttribute("onclick", "cesar()") // 
    }
})

//alterando apresentação do botão de acordo com a escolha do usuario, de "codificar" ou "decodificar"

codificar.addEventListener("click", function(){ //addEventListener adiciona um evento ao usuario, nesse caso, ao clicar("click") em algo, é realizada uma função, que aqui é adicionar um text (innerText) ao botao.
    botao.innerText = ("Codificar o seu texto")
})
decodificar.addEventListener("click", function(){
    botao.innerText = ("Decodificar o seu texto")
})


// base64

function base64() {
    let entrada = recebeTexto.value
    let validacaoEscolha = codificar.checked
    resultado.value = bbase64(entrada, validacaoEscolha);
}

function bbase64(entrada, validacaoEscolha){
    return (validacaoEscolha)? btoa(entrada) : atob(entrada); // ?: = operador condicional ternário, apresenta uma condição antes do ? e posteriormente dois "possiveis acontecimentos" separados pelo :
}
//cesar

function cesar() {
    if (codificar.checked) {
        return cesarCodificando()
    }
    else if (decodificar.checked){
       return cesarDecodificando()
    }

}

let cesarCodificando = function (str, numeroIncremento) {
    str = recebeTexto.value  
    numeroIncremento = parseInt(incremento.value);

    if (numeroIncremento < 0) {
      return cesar(str, numeroIncremento + 26);
    }
  
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
  
        if (c.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
    
        if (code >= 65 && code <= 90) {
            c = String.fromCharCode(((code - 65 + numeroIncremento) % 26) + 65);
        }
    
        else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + numeroIncremento) % 26) + 97);
        }
    }    
    res += c;
}
    return resultado.value = res;
};

let cesarDecodificando = function (str, numeroIncremento) {
    str = recebeTexto.value  
    numeroIncremento = parseInt(incremento.value);

    if (numeroIncremento < 0) {
      return cesar(str, numeroIncremento + 26);
    }
  
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
  
        if (c.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
    
        if (code >= 65 && code <= 90) {
            console.log(code)
            c = (code - 65 - numeroIncremento < 0)? String.fromCharCode(((code - 65 - numeroIncremento + 26)%26)+65):String.fromCharCode(((code - 65 - numeroIncremento)%26)+65)
            //c = String.fromCharCode(((code - 65 - numeroIncremento) % 26) + 65);
        
        }
    
        else if (code >= 97 && code <= 122) {
            console.log(code)
            c = String.fromCharCode(((code - 97 - numeroIncremento + 26) % 26) + 97)
            //c = String.fromCharCode(((code - 97 - numeroIncremento) % 26) + 97);
        }
    }    
    res += c;
}
    return resultado.value = res;
};


