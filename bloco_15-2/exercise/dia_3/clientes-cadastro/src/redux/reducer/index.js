import { combineReducers } from "redux";
import loginReducer from './reducer';
import cadastroReducer from "./cadastroReducer";

const rootReducer = combineReducers({ loginReducer,
    cadastroReducer
});

export default rootReducer;
