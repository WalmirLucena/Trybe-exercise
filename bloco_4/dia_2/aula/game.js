

let numerosMegaSena = [];

let repete="";

for(let index=0; index<6; index +=1 ){
   
    numerosMegaSena[index]= Math.ceil(Math.random() * 60);
   
    
}
console.log(numerosMegaSena);

let jogoTurma14a = [13, 2, 6, 7, 32, 55];
let acertos = 0;

for(let indexJogo =0; indexJogo< jogoTurma14a.length; indexJogo +=1){
    for(let index2 =0; index2<6;index2+=1){
        if(jogoTurma14a[indexJogo] === numerosMegaSena[index2]){
            acertos +=1;
        }

    }
    
}
console.log(acertos);