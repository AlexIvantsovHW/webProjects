import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import MessageReducer from './MessageReducer'


let reducers=combineReducers({
    form:formReducer,
    message:MessageReducer,
})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;