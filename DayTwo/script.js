// second day on challenge - recebendo dados de entrada do usuário:

alert('Olá, seja bem vindo(a)!')

let nome = prompt('Qual é o seu nome?');
let idade = prompt(`Prazer em conhecer você, ${nome}, quantos anos você tem?`);
let linguagemPreferida = prompt('Qual é a sua linguagem de programação preferida?');

alert(`Parabéns, ${nome}, só tem ${idade} anos e já está aprendendo ${linguagemPreferida} ヾ(≧▽≦*)o `);

let escolhaUsuario = prompt('Você gosta de Javascript? Digite 1 para "SIM" ou 2 para "NÃO":');

if(escolhaUsuario == '1'){
    alert('Muito bom, continue estudando e você terá muito sucesso! (❁´◡`❁)');
}else{
    alert(`Poxa, que pena. Você deve gostar mesmo de ${linguagemPreferida} né. Mas pesquise um pouco mais sobre JS. Você vai gostar (^///^)`);
}

