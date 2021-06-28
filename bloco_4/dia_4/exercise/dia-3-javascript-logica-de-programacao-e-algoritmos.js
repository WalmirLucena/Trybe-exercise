// Declara variável chamada n
let n = 7;
// Se n>1 imprima um quadrado de asteriscos de tam n

if(n>1){
    let print ="";
    for(let index=1;index<=n;index+=1){
        if(print.length<7){
        for(let index2=1; index2<=n; index2+=1){
        print += "*";
        }
    }
        
        console.log(print);

    } 
}
    else{ 
        console.log("N não é maior que 1");
    }
//2
let n1=5;
let num="";

for(let index=1; index<=n1; index +=1){
    num += "*";
    console.log(num);
}

//3
let n2=6;

let symbol= '*';
let print='';
let position = n2;

for(let index=0; index < n2; index +=1){


        for(let index2=0; index2 <=n2; index2 +=1){
            if(index2<position){
            print += ' ';
            } else{
            print += symbol;
            }
        }
   
    console.log(print);
    print= '';
    position = position -1;

}
//4 Para n impar

let numb = 1;
let printer = '';
let symb="*";


let middle= (numb+1)/2;
let left = middle;
let right = middle;

for(let index=0; index <= middle; index+=1){
    for(let index2=0; index2<=numb; index2 +=1){
        if(index2>left && index2<right){
            printer= printer + symb;
           
        } else{
            printer = printer + " ";
            
        }
     
    }
    console.log(printer);
    printer = '';
    right+=1;
    left -=1;
}

//5

//6
let numero = 5;

let divisores=0;

for(let index=1; index<= numero; index +=1){

    if(numero%index === 0){
        divisores+= 1;
    }

}
if(divisores===2){
    console.log("Primo");
} else{
    console.log("Não é Primo");
}