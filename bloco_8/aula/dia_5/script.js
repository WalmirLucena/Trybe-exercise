//1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [ item1] = saudacoes;
console.log(item1);

//2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal]
console.log(comida, animal, bebida);

//3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares)

//Default destructuring
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;
  console.log(nationality); // Brazilian

  //ex1
  const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
const { nationality = 'Brazilian'} = person; 

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//Object property shorthand

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542));

//DEfault parameters

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

//EX1 Default parameters
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;

};

console.log(multiply(8,5));