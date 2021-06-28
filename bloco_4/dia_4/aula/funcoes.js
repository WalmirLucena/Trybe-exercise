function imprimeResultado(textoParaImprimir){
    console.log(textoParaImprimir);
}

imprimeResultado("O Bilbo esta melhor");
imprimeResultado("Como diria o gus isso é muito legal");

function maiorNumero(numero1, numero2){
    if(numero1>numero2){
        return numero1;
    } else {
        return numero2;

    }
}
console.log(maiorNumero(7,10));

function numeroAleatorio(limite){
    return Math.ceil(Math.random()*limite);
}
numeroAleatorio(30);
