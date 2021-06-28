function maiorValor(array){
    let maior = 0;
    for(let key in array){
        if(array[maior]< array[key]){
            maior = key; 
        } 
   

}
return maior;
}
let arrayTeste = [2,3,6,7,10,1];

console.log(maiorValor([2,3,6,7,10,1]));
