//Qual a posição da rainha?
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4 ;

//Qual a posição da peça?
let posicaoPecaLinha = 3;
let posicaoPecaColuna =2;
//Algo para guardar se o ataque foi bem sucedido?
let ataqueBemSucedido = false;
//Quais caminhos a rainha pode atacar?

//Se a peça estiver na mesma linha, ataque bem sucedido
if(posicaoPecaLinha === posicaoRainhaLinha){
   // console.log("Ataque Bem sucedido na mesma linha");
    ataqueBemSucedido = true;
}

if(posicaoPecaColuna === posicaoRainhaColuna){
    //console.log("Ataque Bem sucedido na mesma coluna");
    ataqueBemSucedido = true;
}
for(let index =1; index<8; index+=1){
    let linhaAtualRainha = posicaoRainhaLinha- index;

    let colunaAtualRainha = posicaoRainhaColuna - index;

    if(posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
        console.log("Ataque bem sucedido na diagonal inferior esquerda");
        ataqueBemSucedido = true;
       


    }
}
for(let index=1; index<8; index+=1){
    let linhaAtualRainha = posicaoRainhaLinha + index;
    let colunaAtualRainha = posicaoRainhaColuna - index;
    if(posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna ===colunaAtualRainha){
        ataqueBemSucedido = true;
        console.log("ataque bem sucedido na diagonal superior esquerda");
       

    }
}
//diagonal superior direita

for(let index=1;index<8; index+=1){
    let linhaAtualRainha = posicaoRainhaLinha +index;
    let colunaAtualRainha = posicaoRainhaColuna + index;
    if(posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna && colunaAtualRainha){
        console.log("Ataque bem sucedido na diagonal superior direita");
        ataqueBemSucedido = true;
        
    }
}
for (let index=1; index <8; index+=1){
    let linhaAtualRainha= posicaoRainhaLinha - index;
    let colunaAtualRainha = posicaoRainhaColuna + index;

    if(posicaoPecaColuna === colunaAtualRainha && posicaoPecaLinha === linhaAtualRainha){
        console.log("Ataque bems sucedido na diagonal inferior direita");
        ataqueBemSucedido = true;
       
    }
}
if(ataqueBemSucedido === false){
    console.log("A peça não pode ser atacada")
}
console.log(ataqueBemSucedido);