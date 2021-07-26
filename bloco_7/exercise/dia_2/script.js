const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street},N°: ${order.address.number} ,AP: ${order.address.apartment} `)
  
  }
  
/*   customerInfo(order); */
  
  const orderModifier = (order) => {
    order.order.delivery.deliveryPerson = 'Luiz Silva';
    order.order.delivery.price = 50;
    const pizzas = Object.keys(order.order.pizza);

    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é de R$${order.order.delivery.price},00. `)
  
  }
  
orderModifier(order); 

  //parte II

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  
  const morning = (object, key, value) => {
    object[key]= value;
  }
 
morning(lesson2, 'turno', 'manhã');
/* console.log(lesson2);
   */
const listKeys = object => Object.keys(object);
/* console.log(listKeys(lesson3)); */

const tamObj = object => Object.keys(object).length;
/* console.log(tamObj(lesson1)); */

const listValues = object => Object.values(object);
/* console.log(listValues(lesson2));
 */
const allLessons = Object.assign({},{ lesson1, lesson2, lesson3});
/* console.log(allLessons); */


const checkStudents = object => {
    let total = 0;
    const array = Object.keys(object);
    for( key in array){
        total += object[array[key]].numeroEstudantes;
    }
    return total;
} 
/* 
console.log(checkStudents(allLessons)); */

const getValueByNumber = (obj, number) => Object.values(obj)[number];
 /*  console.log(getValueByNumber(allLessons, 0)); */

  const getPar = (obj,key, value) => {
    const check = Object.entries(obj);
    let signal = false;
    for(let index in check){
        if(check[index][0]=== key && check[index][1]=== value){
            signal = true;
        }
    }
    return signal;
  }
 /*  console.log(getPar(lesson3, 'turno', 'noite')); */

 /* console.log(allLessons); */

const contMathStudent = (obj) => {
  const check = Object.keys(obj);
  let cont = 0;
  for( let key in check){

    if(obj[check[key]].materia === 'Matemática'){
      cont += obj[check[key]].numeroEstudantes;
    }
  }
  return cont;
}
/* console.log(contMathStudent(allLessons)); */
const getInfo = (obj, prof) => {
  const subject = [];
  let student =0;
  const array = Object.values(obj);
  
  for(key in array){
    if( array[key].professor === prof){
      subject.push(array[key].materia);
      student += array[key].numeroEstudantes;

    }
  }
  return {aulas: subject, estudantes: student};
}

const createReport = (obj, prof) => {
  const report = {}; 
  report.professor = prof;
  Object.assign(report, getInfo(obj, prof));
  return report;
} 
console.log(createReport(allLessons, 'Carlos'));