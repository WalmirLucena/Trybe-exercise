let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };


console.log("A jogadora " + name + " "+lastName +" tem "+age+" anos de idade");

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: '34',
    bestInTheWorld: [2006,2007,2008,2009,2010,2018],
    medals : {
        golden: 2,
        silver: 3,
    }
}
console.log("a jogadora Marta Silva foi eleita a melhor do mundo por "+player.bestInTheWorld.length+" vezes.");

console.log("a jogadora possui " + player.medals.golden + " medalhas de ouro e "+ player.medals.silver+" medalhas de prata")

//1

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  }
  for(let value in names){
      console.log(names[value]);
  }
//2
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }
for(let key in car){
    console.log(car[key]);
}