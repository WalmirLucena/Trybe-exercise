//1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Bem-vinda,",info.personagem);
  
  //2
  info.recorrente = 'Sim';
  console.log(info);

  //3
  for(let value in info){
      console.log(value);
  }
  //4
  for(let value in info){
    console.log(info[value]);
}
//5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178', 
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e o Ultimo MacPatinhas',
    recorrente: 'Sim'

}
for (let value in info){
    if(value === 'recorrente' && info[value]=== 'Sim' && info2[value]=== 'Sim'){
        console.log('Ambos Recorrentes');
    } else{
        console.log(info[value]+" e "+info2[value]);
    }
}
// funções

//1
function palindromo(word){
    let cont =0;
    for(let indice in word){
        if(word[indice]!= word[(word.length-1) - indice]){
            return false;
        }
        
        }
        return true;

    } 

console.log(palindromo('arara'));

//2
function maiorValor(array){
    let maior = 0;
    for(let key in array){
        if(array[maior]< array[key]){
            maior= key; 
        } 
    

}
return maior;
}
let arrayTeste = [2,3,6,7,10,1];

console.log(maiorValor(arrayTeste));

//3 
function menorValor(array){
    let menor =0;
    for(let index in array){
        if(array[menor]> array[index]){
            menor = index;

        }
}
return menor;
}
let array2 =  [2, 4, 6, 7, 10, 0, -3]; 

console.log(menorValor(array2));

//4 
function verificaTamanho(array){
    let contRepetido = 0;
    let contNumero =0;
    let indexNumeroRepetido==
   
    for(key in array){
        
        if((array[maior]).length < (array[key]).length){
            maior = key;
        }
    }
    return array[maior];
}

let nomes= ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(verificaTamanho(nomes));

//5

function maisRepete(array){
    let cont=0;
   
    for(let key in array){
        for(let index in array){
            if(array[key]===array[index]){
                cont +=1;
            })
        }
       
       
    }
} 