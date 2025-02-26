let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

let categorias = ['frutas', 'laticínios', 'doces', 'congelados'];
let categoria;

let alimento;

let categoriasString = categorias.join(", ")

let lista = document.createElement('p');

let adicao = prompt('Quer adicionar itens à lista de compras? Sim ou Não:');

if(adicao.toLowerCase() == 'sim'){

    let adicionarMais ='sim';

    while(adicionarMais.toLowerCase() =='sim'){

        alimento = prompt('Qual item deseja adicionar?');

        categoria = prompt(`Qual a categoria do item? ${categoriasString}`);

        if(categoria.toLowerCase() == 'frutas'){
            frutas.push(alimento);
        
        }else if(categoria.toLowerCase() == 'laticínios'){
            laticinios.push(alimento);

        }else if(categoria.toLowerCase() == 'doces'){
            doces.push(alimento);

        }else if(categoria.toLowerCase() == 'congelados'){
            congelados.push(alimento);    

        }else{

            while(!categorias.includes(categoria)){
                categoria = prompt('Categoria inválida. Escolha novamente: ')
            }

            if(categoria.toLowerCase() == 'frutas'){
                frutas.push(alimento);
            }else if(categoria.toLowerCase() == 'laticínios'){
                laticinios.push(alimento);
    
            }else if(categoria.toLowerCase() == 'doces'){
                doces.push(alimento);
    
            }else if(categoria.toLowerCase() == 'congelados'){
                congelados.push(alimento);    
    
            }
    
        }   

        alert(`Frutas: ${frutas.join(", ")}\n` + `laticínios: ${laticinios.join(", ")}\n`+ `Doces: ${doces.join(", ")}\n`+`Congelados: ${congelados.join(", ")}`)

        excluir = prompt('Deseja excluir algum item da lista? Sim ou Não:');

        if(excluir.toLowerCase() == 'sim'){
            alimento = prompt('Qual alimento deseja excluir?');
            categoria = prompt('Qual é a categoria do alimento que será excluído?')

            if(categoria.toLowerCase() == 'frutas'){
                let indexAlimento = frutas.indexOf(alimento);
                frutas.splice(indexAlimento,1);

            }else if (categoria.toLowerCase() == 'laticínios'){
                let indexAlimento = laticinios.indexOf(alimento);
                laticinios.splice(indexAlimento,1);

            }else if (categoria.toLowerCase() == 'doces'){
                let indexAlimento = laticinios.indexOf(alimento);
                doces.splice(indexAlimento,1);

            }else if (categoria.toLowerCase() == 'congelados'){
                let indexAlimento = laticinios.indexOf(alimento);
                congelados.splice(indexAlimento,1);
            } else{
                alert('exclusão inválida');
            }
        
        }

        adicionarMais = prompt('Adicionar mais itens? Sim ou Não:');
    }   
    
}else{
    alert('lista encerrada.')

}



lista.innerText = 
    `Frutas: ${frutas.join(", ")}\n`+
    `Laticínios: ${laticinios.join(", ")}\n`+
    `Doces: ${doces.join(", ")}\n`+
    `Congelados: ${congelados.join(", ")}`;

document.body.appendChild(lista);





