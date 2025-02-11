// first day on challenge - Comparar variáveis e seus tipos:

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';


if(numeroUm == stringUm){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.');
    console.log(typeof(numeroUm), typeof(stringUm));
}else{
    console.log('As variáveis não tem o mesmo valor.');
    console.log(typeof(numeroTrinta), typeof(stringTrinta));
}

if(numeroTrinta === stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e o mesmo tipo.');
    console.log(typeof(numeroTrinta), typeof(stringTrinta));
}else{
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.');
    console.log(typeof(numeroTrinta), typeof(stringTrinta));
}

if(numeroDez == stringDez){
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.');
    console.log(typeof(numeroDez), typeof(stringDez));
}else{
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor.');
    console.log(typeof(numeroTrinta), typeof(stringTrinta));
}

