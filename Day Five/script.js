let categorias = ['Frutas', 'Laticínios', 'Doces', 'Congelados'];
let categoriasString = categorias.join(", ")

let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

iniciarLista();


function iniciarLista(){
    let inicio = prompt('Deseja iniciar sua lista de compras? Sim ou Não:');

    if(inicio == 'Sim'){
        inserirAlimentoNaLista();

    }else{
        alert('Lista de compras não iniciada.')
    }
}

function escolherAlimento(){
    let alimentoEscolhido = prompt('Qual alimento deseja adicionar?');
    return alimentoEscolhido; 
}

function escolherCategoria(){
    let categoriaEscolhida = prompt(`Informe a categoria do alimento: ${categoriasString}.`);
    return categoriaEscolhida;

}

function validarCategoria(){

    let categoria = escolherCategoria();

    while(!categorias.includes(categoria)){
        alert('Categoria inválida');
        categoria = escolherCategoria();
    }

    return categoria;
}

function inserirAlimentoNaLista(){

    let alimento = escolherAlimento();
    let categoriaEscolhida = validarCategoria();
        
    if(categoriaEscolhida == 'Frutas'){
        frutas.push(alimento);

    }else if(categoriaEscolhida == 'Laticínios'){
        laticinios.push(alimento);

    }else if(categoriaEscolhida == 'Doces'){
        doces.push(alimento);

    }else if(categoriaEscolhida == 'Congelados'){
        congelados.push(alimento);
    }

    let continuar = prompt('Deseja continuar incluindo itens na lista? Sim ou Não:')

    if(continuar == 'Sim'){
        inserirAlimentoNaLista()
    } else{
        alert('Lista Finalizada.')

        let paragrafo = document.createElement('p');
        
        paragrafo.innerText = 
            `Frutas: ${frutas.join(", ")}\n` +
            `Laticínios: ${laticinios.join(", ")}\n` +
            `Doces: ${doces.join(", ")}\n` +
            `Congelados: ${congelados.join(", ")}`;

        document.body.appendChild(paragrafo);
        
    }
    
}



