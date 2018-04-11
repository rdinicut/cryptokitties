import {combineEpics} from 'redux-observable';
import {createKittyContractEpic} from "./kittycontract";

export const rootEpic = combineEpics(createKittyContractEpic());