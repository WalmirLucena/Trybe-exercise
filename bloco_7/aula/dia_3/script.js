const assert = require('assert');

const summationOf = (number) => {
    if (typeof (number) !== number) {
        throw Error('Essa função só aceita número como parâmetro');
    }
    if (number === 0) {
        throw Error('O número ZERO não pode ser paramêtro dessa função');
    }
    let sum = 0
    for (let i = number; i >= 1; i -= 1) {
        sum += i;
    }
    return sum;
}


assert.strictEqual(typeof (summationOf), 'function', 'Valores são diferentes');
assert.strictEqual(summationOf(1), 1, 'O resultado deve ser 1');
assert.strictEqual(summationOf(3), 6, 'O resultado deve ser 6');
assert.strictEqual(summationOf(5), 15, 'O resultado deve ser 15');