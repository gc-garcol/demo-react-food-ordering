import { combineReducers } from 'redux';
import { default as authenticationReducer } from "store/share/authentication/authentication.saga.reducer";


const rootReducer = combineReducers<any>({
  authenticationReducer
});

export default rootReducer;