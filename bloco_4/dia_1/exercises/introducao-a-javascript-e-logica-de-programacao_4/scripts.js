let a= 0;

if(a<0){
    console.log("negative");
} else if (a>0) {
    console.log("positive");
} else {
    console.log("zero");
}

//5
let angle1 = 90;
let angle2 = 30;
let angle3 = 60;
let soma= angle1 + angle2 +angle3;

if(angle1<0 | angle2<0 |angle3<0){
    console.log("Error");
} else if(soma > 180 | soma <180){
    console.log(false);
} else{
    console.log(true);
}

//6
let peca= "rainha"
let lowercase = peca.toLowerCase();

switch(lowercase){
    case "bispo":
        console.log("Diagonais");
        break;
    case "peao":
        console.log("Diagonais e Frente");
        break;
    case "rainha":
        console.log("Todas as direções");
        break;
    case "rei":
        console.log("Todas as direções");
        break;
    case "torre":
        console.log("Colunas e fileiras");
        break;
    case "cavalo":
        console.log("Movimenta-se em L");
        break;
    default:
        console.log("erro");

}
//7
let nota= 90;

if(nota>=90 && nota<=100){
    console.log("A");
} else if(nota>=80 && nota<90){
    console.log("B");
} else if(nota>=70 && nota<80){
    console.log("C");
} else if(nota>=60 && nota<70){
    console.log("D");
} else if(nota>=50 && nota<60){
    console.log("E");
} else if(nota<50 && nota>0){
    console.log("F");
} else {
    console.log("Err0");
}

//8
let number1 = 9;
let number2 = 13;
let number3 = 11;
if(number1%2 === 0 | number2%2 === 0 | number3%2 ===0){
    console.log(true);
} else{
    console.log(false);
}

//9]
let number_1 = 9;
let number_2 = 13;
let number_3 = 11;
if(number_1%3 === 0 | number_2%3 === 0 | number_3%3 ===0){
    console.log(true);
} else{
    console.log(false);
}
//10
let custoProduto= 1000;
let valorVenda=1400;
let valorCustoTotal = custoProduto + (20/100)*custoProduto;
let lucro = valorVenda - valorCustoTotal;

if (custoProduto<0 || valorVenda<0){
    console.log("Erro");
} else{
    console.log(lucro*1000);
}
/11
let salarioBruto=1500.10;
