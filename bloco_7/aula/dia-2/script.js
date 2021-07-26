/* Parte II
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

const listSkills = (student) => {
    const getkeys = Object.keys(student);
    for(let index = 0; index < getkeys.length; index +=1){
        console.log(`${getkeys[index]}, Nível: ${student[getkeys[index]]}`);
    }
}
listSkills(student2); */

//Parte III
const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student);
  
  // Sem Object.values
/*   console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student)); */

  //Parte 4
  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  for(index in pairKeyValue) {
    /* console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]); */
  };
/*   console.log(pairKeyValue); */

//Parte 5
const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

    const person1 = {
        name: 'Roberto',
      };
      
      const lastName = {
        lastName: 'Silva',
      };
      
      const clone = Object.assign(person1, lastName);
      
     /*  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
      console.log(lastName ); // { name: 'Roberto', lastName: 'Silva' }
      clone.name = 'Maria';

      console.log('Mudando a propriedade name através do objeto clone')
      console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
      console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
      console.log('--------------');
      
      person.lastName = 'Ferreira';
      
      console.log('Mudando a propriedade lastName através do objeto person');
      console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
      console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' } */

const person2 = {
    name:'Roberto',
  };
  
  const lastName2 = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person2,lastName2);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person2);