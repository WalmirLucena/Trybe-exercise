import { SET_LOGIN} from '../action';

const INITIAL_STATE = {
    login: {
        email: '',
        senha: '',
    }
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, login: action.payload };
        default:
            return state;
    }
}

export default loginReducer;
