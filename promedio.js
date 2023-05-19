let Par = (numPares) => {
    const parImpar = ((numPares.length % 2) == 0) ? true : false;
    return parImpar
};

let calcularNumPares = (numPares) => {
    for(let i=0; i < numPares.length; i++){
        if(numPares[i] % 2 == 0){
            console.log("el numero " + numPares[i] + " es par");
        }else{
            console.log("el numero " + numPares[i] + " No es par");
        }
    }
}

let ParOImpar = (lista) => {
    if((lista.length % 2) == 0){
        return true;
    }else{
        return false;
    }
}

function esPar(lista){
    return !(lista.length % 2);
}
function esImpar(lista){
    return lista.length % 2;
}

function calcularMediana(lista){
    lista.sort((a,b) => a- b);
    console.log(lista);
    const listaEsPar = esPar(lista);

    if(listaEsPar){
        const IndexMitadNum1 = (lista.length/2);
        const IndexMitadNum2 = IndexMitadNum1 - 1;
        const medianaListaPar = ((lista[IndexMitadNum1] + lista[IndexMitadNum2]) / 2 )

        return medianaListaPar;
    
    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar]

        return medianaListaImpar;

    }
}
function calcularPromedio(lista){
    
    const sumWithReduce = (valorAcumalado,nuevoValor) => {
        return valorAcumalado + nuevoValor;
    }
    
    const sumLista = lista.reduce(sumWithReduce);
    const promedio = sumLista / lista.length
    console.log(sumLista);
    return promedio;
}


// console.log(Par(numPares))
// console.log(calcularNumPares(numPares))
// console.log(ParOImpar(numPares))