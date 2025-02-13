// third day on challenge - criar um fluxo de rpg e gerir escolhas do usuário:

saudarUsuario();
definirCarreira(trilharCarreira());
listarInteresses();

function saudarUsuario(){
    alert('Bem vindo(a)!');
    const apelido = prompt('Como gostaria de ser chamado?');
    alert(`Fique à vontade, ${apelido}!`);
}

function trilharCarreira(){
    alert('Você possui interesse em qual área?');

    const areaEscolhida = prompt('Escolha: [1] para Front-End ou [2] para Back-End:');

    if(areaEscolhida=='1'){
        alert('Front-End, ótima escolha para quem gosta de visuais interativos e ituitivo.');
        alert('Você tem interesse em aprender qual Framework?');
        const framework = prompt('React ou Vue.js?');

        return framework;

    }else if(areaEscolhida=='2'){
        alert('Back-End, ótima escolha para quem gosta de quebra-cabeças e resolução de problemas.');
        alert('Você tem interesse em aprender qual linguagem de programação?');
        const linguagem = prompt('C# ou Java?');    
        return linguagem;

    } else{
        alert('Valor inválido.')
    }   
}

function definirCarreira(){
    const carreira = prompt('[1]Alcancar nível Full-Stack ou [2]Seguir Especialização?')

    if(carreira =='1'){
        alert(`Ótima escolha. Com ${framework} `)
    }
}

function listarInteresses(){
    let tecnologia;
    let paragrafoLista = document.createElement('p');
    listaTecnologias=[];
    alert('Você possui interesse em outras tecnologias?');

    while(tecnologia !== null){
        tecnologia = prompt('Qual?');
        if(tecnologia !== null){
            alert(`${tecnologia} é realmente uma ótima opção.`);
            listaTecnologias.push(tecnologia);
        }
    }
    
    paragrafoLista.innerHTML = listaTecnologias;
    document.body.appendChild(paragrafoLista);

}
