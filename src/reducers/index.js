import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import { accountReducer } from './account';
import { kittyContractReducer } from './kittycontract';

export const rootReducer = combineReducers({
    account:accountReducer,
    kittyContract: kittyContractReducer,
    router: routerReducer
});
