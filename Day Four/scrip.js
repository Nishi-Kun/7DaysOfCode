let numeroSecreto = parseInt(Math.random() * 10) + 1;
let chuteUsuario = '';
let acertou = false;

for(tentativas = 0;tentativas<3;tentativas++){
    chuteUsuario = prompt('Escolha um numero entre 1 e 10:')
    if(chuteUsuario == numeroSecreto){
        alert('Você acertou!');
        acertou = true;
        break;
    }else{
        alert(`Errou.`)
    }

}   if(!acertou){
    alert(`O número era ${numeroSecreto}`);
}
