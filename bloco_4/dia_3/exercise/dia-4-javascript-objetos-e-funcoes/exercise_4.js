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

function palindromo(word){
    let cont =0;
    for(let indice in word){
        if(word[])
    } ; 
}
console.log(palindromo('arara'));