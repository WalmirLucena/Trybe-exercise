const assert = require('assert');
// escreva a função addOne aqui
const addOne = (array) => {
    for(let i=0 ; i< array.length ; i+=1){
        array[i] +=1;
    }
    return array;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

/* assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged); */

//EX2
// escreva a função wordLengths aqui
const wordLengths = (array) => {
    let cont = [];
    for (let index = 0; index < array.length; index+=1) {
       cont.push(array[index].length);
    }
    return cont;
}
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected2 = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output2 = wordLengths(words);
assert.deepStrictEqual(output2, expected2);

//EX3
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (array) => {
    let cont = 0;
    for (let index = 0; index < array.length; index++) {
        cont += array[index];
    }
    return cont;
}

const numbers = [9, 23, 10, 3, 8];
const expected3 = 53;
const output3 = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output3, expected3);

//EX3
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, word) => {
    let output = -1;
    for (const index in array) {
      if (word === array[index]) {
        output = Number(index);
      }
    }
    return output;
  };

let words2 = ['house', 'train', 'slide', 'needle', 'book'];
let expected4 = 3;
let output4 = findTheNeedle(words2, 'needle');
assert.strictEqual(output4, expected4);

words2 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = 0;
output4 = findTheNeedle(words2, 'plant');
assert.strictEqual(output4, expected4);

words2 = ['plant', 'shelf', 'arrow', 'bird'];
expected4= -1;
output4 = findTheNeedle(words2, 'plat');
assert.strictEqual(output4, expected4);