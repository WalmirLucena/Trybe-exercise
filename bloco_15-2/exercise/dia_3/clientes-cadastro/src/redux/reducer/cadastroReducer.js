import { SET_CADASTRO, SET_REMOVER } from "../action";

const INITIAL_STATE = [];

const cadastroReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CADASTRO:
            return [...state, action.payload];
        case SET_REMOVER: 
            return state.filter((cadastro) => cadastro !== action.value);
        default: 
            return state;
    }
}

export default cadastroReducer;