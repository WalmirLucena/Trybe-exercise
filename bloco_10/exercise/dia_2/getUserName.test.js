
const getUserName = require('./getUserName');

describe('getUserName - promise', ()=> {
test('Verifica se o usuário é encontrado', () => {
    expect.assertions(1);
    return getUserName(1).then((resposta) => {
        expect(resposta).toEqual('Mark')
    })
})

test('Verifica se o usuário não existe', ()=> {
    expect.assertions(1);
    getUserName(3).catch((resposta)=> {
        expect(resposta.message).toEqual('User with 3 not found.')
    })
})


test('Verifica se o usuario não existe via async', async () => {
    expect.assertions(1);
    try {
       await getUserName(3);
       
    } catch (error) {
        expect(error.message).toEqual('User with 3 not found.')
    }
    

    
})
})