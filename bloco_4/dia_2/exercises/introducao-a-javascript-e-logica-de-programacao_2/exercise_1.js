let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for(let index=0; index< numbers.length; index+=1){
    console.log(numbers[index]);
}
//2
let soma = 0;
for(let index=0; index<numbers.length; index+=1){
    soma= soma + numbers[index];
    console.log(soma);

}
//3
let media = soma/(numbers.length);
console.log(media);

//4
if(media>20){
    console.log('Valor maior que 20');
} else{
    console.log('Valor menor ou igual a 20')
}
//5
let maior=0
for(let index=0; index< numbers.length; index+=1){
    if(numbers[index]>maior){
        maior = numbers[index];
    }
   
}
console.log("");
console.log(maior);

//6
let impar=0
for(let index=0; index< numbers.length; index+=1){
    if(numbers[index]%3===0){
        impar +=1;
    }
   
}
console.log("");
if(impar>0){
console.log(impar + " números impar");
} else{
    console.log("Nenhum valor impar encontrado");
}
//7
let menor=numbers[0];
for(let index=0; index< numbers.length; index+=1){   
    if(numbers[index]<menor){
        menor = numbers[index];
    }
   
}
console.log("");
console.log(menor + " é o menor número");

//8
let numeros=[];
for( let index=1; index<= 25; index+=1){
    numeros[index-1] = index;

}
console.log(numeros);