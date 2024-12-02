let listaDeNuSorteados = [];
let numeroLimite = 10;
let tentativas = 1
let numeroSecreto = gerarNumeroAleatorio();

exibirMnesagemInicial();
function verficarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou wee!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Tu descobriu o nmero com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero e menor');
        }else{
            exibirTextoNaTela('p', 'O numero e maior');
        }tentativas++;
        limparCampo();
    }
}
function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMnesagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
    let quantidadeDeNumerosNaLista = listaDeNuSorteados.length;

    if(quantidadeDeNumerosNaLista == numeroLimite){
        listaDeNuSorteados = [];
    }
    if (listaDeNuSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio(); 
    }else{
        listaDeNuSorteados.push(numeroEscolhido);
        return numeroEscolhido;
        console.log(listaDeNuSorteados);
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMnesagemInicial();
    document.getElementById('reinicar').setAttribute('disable' , true);
}
