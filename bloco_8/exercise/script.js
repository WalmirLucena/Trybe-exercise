//1
const getName = (name) => {
    const email = name.toLowerCase().split(' ').join('_');
    return {Nome: name, Email: `${email}@trybe.com`}
  }; 

const newEmployees = (getName) => {
    const employees = {
      id1: getName('Walmir Lucena'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: getName('Lucas Oliveira'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: getName('Eduardo Matheus'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(getName));

//2
const verifiy = (winner, number) => winner === number;

const aleat = (number , callback) => {
  const winner = Math.floor((Math.random()*5)+1);
  if(callback(winner, number)){
  console.log("Parabéns você ganhou");
  } else {
  console.log("Tente novamente");
  }
}
aleat(2 , verifiy);

//3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verify = (right, student) => {
  let sum = 0;
  for(let index = 0; index < right.length; index+=1 ){
    if(right[index] === student[index]){
      sum += 1;
    } 
     if( right[index] !== student[index] && student[index] !== 'N.A'){
      sum -= 0.5;
    }  
  }
  return `Resultado: ${sum} pontos`;
  }


const correction = (right, student, callback) => callback(right, student);

/* console.log(correction(RIGHT_ANSWERS, STUDENT_ANSWERS, verify)); */

const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);