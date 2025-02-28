//calculadora e funções:

let operacoes = ['Soma [1]','Subtração [2]', 'Multiplicação [3]', 'Divisão [4]', 'Sair [5]'];

let operacao = solicitarOperacao();

let primeiroNumero;
let segundoNumero;

while(operacao.toLowerCase() != '5'){

    switch(operacao.toLowerCase()){
        case '1':
            primeiroNumero = solicitarNumero();
            segundoNumero = solicitarNumero();
            alert('somando');
            alert(somar(primeiroNumero,segundoNumero));
            break;

        case '2':
            primeiroNumero = solicitarNumero();
            segundoNumero = solicitarNumero();
            alert('subtraindo');
            alert(subtrair(primeiroNumero,segundoNumero));
            break;

        case '3':
            primeiroNumero = solicitarNumero();
            segundoNumero = solicitarNumero();
            alert('multiplicando');
            alert(multiplicar(primeiroNumero,segundoNumero));
            break;

        case '4':
            primeiroNumero = solicitarNumero();
            segundoNumero = solicitarNumero();
            alert('dividindo');
            alert(dividir(primeiroNumero,segundoNumero));
            break;

        case '5':
            alert('Até a próxima!');
            break;
    }

    operacao = solicitarOperacao();
}

alert('Até a próxima!')



function solicitarNumero(){
    let numeroUsuario = prompt('Digite um número para calcular:');
    return numeroUsuario;
}

function solicitarOperacao(){
    let operacao = prompt(`Escolha a operação desejada: ${operacoes.join(", ")}`); 
    return operacao;
}

function somar(n1, n2){
    return parseInt(n1) + parseInt(n2);
}

function subtrair(n1,n2){
    return parseInt(n1) - parseInt(n2); 

}

function multiplicar(n1,n2){
    return parseInt(n1) * parseInt(n2); 
}

function dividir(n1,n2){
    return parseInt(n1) / parseInt(n2);    
}