export const SET_CADASTRO = 'SET_CADASTRO';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_REMOVER = 'SET_REMOVER'

export const setLogin = (payload) => ({
    type: SET_LOGIN, payload,
})

export const setCadastro = (payload) => ({
    type: SET_CADASTRO, payload,
})

export const setRemover = (value) => ({
    type: SET_REMOVER, value,
})