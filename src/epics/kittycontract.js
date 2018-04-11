/*eslint-disable no-undef*/
import 'rxjs';
import {Observable} from 'rxjs/Observable';
import {combineEpics} from 'redux-observable';
import {
    getKittyFailed, getKittySuccess, KITTY_CONTRACT_FETCH_KITTY
} from "../actions/kittycontract";
import {KITTY_CONTRACT_ABI, KITTY_CONTRACT_ADDRESS} from "../core/kittycontract";
import { ACCOUNT_RECEIVED } from '../actions/account';
import { contractConnectFailed } from '../actions/kittycontract';
import { contractConnectSuccess } from '../actions/kittycontract';


export const createKittyContractEpic = () => {
    return combineEpics(connect,getKitty);
}


let kittyContract;

const promisify = (inner) =>
    new Promise((resolve, reject) =>
    inner((error, result) => {
        if (error) { reject(error) }
            resolve(result);
    })
);

const payloadToObject = (methodName,payload) => {
    let method = KITTY_CONTRACT_ABI.find(item => {
        return item.name === methodName;
    })

    if(!method) throw new Error(`Method ${methodName} is not defined in ABI`);

    return method.outputs.reduce((obj, value, index) => {
        obj[value.name] = payload[index];
        return obj;
    },{})
}


const connect = (action$) => {
    return action$.ofType(ACCOUNT_RECEIVED).switchMap(() => {

        let {web3} =  window;
        kittyContract =   web3.eth.contract(KITTY_CONTRACT_ABI).at(KITTY_CONTRACT_ADDRESS);

        return Observable.from(promisify( cb =>  kittyContract.name(cb)))
        .map(contractConnectSuccess)
        .catch(e => Observable.of(contractConnectFailed(e)));
       
    });
};

const getKitty = (action$) => {
    return action$.ofType(KITTY_CONTRACT_FETCH_KITTY).switchMap(({kittyId}) => {

        if(!kittyContract) {
            throw new Error('Fist you must connect to contract');
        }
        return Observable.from(promisify( cb =>  kittyContract.getKitty(kittyId,cb)).then(result => {
            return payloadToObject('getKitty',result);
        }))
        .map(result => getKittySuccess(result))
        .catch(e => Observable.of(getKittyFailed(e)));
       
    });
};