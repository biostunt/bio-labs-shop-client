import { applyMiddleware, combineReducers, createStore } from "redux";
import { StoreReducer } from './Reducers';
import logger from 'redux-logger'
export type { TStoreAction } from './Actions';
export type { IStoreState } from './State';


const thunkMiddleware = (store: any) => (next: any) => (action: any) => {
    typeof action == "function" ?
        action(Store.dispatch, Store.getState) :
        next(action);
}



const Reducers = combineReducers(StoreReducer);
const Store = createStore(Reducers, applyMiddleware(thunkMiddleware,logger));



export default Store;