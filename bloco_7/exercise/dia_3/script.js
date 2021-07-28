//1
const assert = require('assert');

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

// implemente seus testes aqui
const expected = sum(4, 5);
assert.strictEqual(expected, 9, '4 + 5 = 9');

//EX2

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3) , [1, 2, 4] , 'Não removeu o item desejado ');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3) , [1, 2, 3, 4] , 'Retorna o array indesejado ');
assert.deepStrictEqual(myRemove([1, 2, 3, 4]),[1, 2, 3, 4], 'Array não é igual');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5) , [1, 2, 3, 4] , 'Não removeu o item desejado ');

//EX3

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'Não removeu o item desejado');
assert.notDeepStrictEqual( myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Retorna o array indesejado');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4]),[1, 2, 3, 4], 'Array sofreu alterações');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4]),[1, 2, 3, 4], 'Não retorna array esperado')

//EX5

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(30),'fizzbuzz', 'Não é divisível por 3 e por 5');
assert.strictEqual(myFizzBuzz(27),'fizz', 'Não é divisível por 3');
assert.strictEqual(myFizzBuzz(50),'buzz', 'Não é divisível por 5');
assert.strictEqual(myFizzBuzz(31), 31, 'È divisível por 3 ou por 5');
assert.strictEqual(myFizzBuzz('a'), false, 'Não é um número');

//EX5
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.deepStrictEqual(obj2, obj1, 'Não são iguais');
assert.deepStrictEqual(obj1, obj3, 'Não são iguais')