import {
    CONNECT_TO_KITTY_CONTRACT, CONNECT_TO_KITTY_CONTRACT_FAILED,
    CONNECT_TO_KITTY_CONTRACT_SUCCESS, KITTY_CONTRACT_FETCH_KITTY, KITTY_CONTRACT_FETCH_KITTY_FAILED,
    KITTY_CONTRACT_FETCH_KITTY_SUCCESS
} from "../actions/kittycontract";

const INITIAL_STATE = {
    connected: false,
    loading: false,
    error: null,
    fetchingKitty:false,
    fetchingKittyError:null,
    kitty:null,

};



export const kittyContractReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case CONNECT_TO_KITTY_CONTRACT:
            return {
                ...state,
                loading:true
            };

        case CONNECT_TO_KITTY_CONTRACT_SUCCESS:
            return {
                ...state,
                connected:true,
                error:null,
                loading:false
            };

        case CONNECT_TO_KITTY_CONTRACT_FAILED:
            return {
                ...state,
                loading:false,
                error:action.error
            };
        case KITTY_CONTRACT_FETCH_KITTY:
            return {
                ...state,
                kitty:null,
                fetchingKitty:true
            };

        case KITTY_CONTRACT_FETCH_KITTY_SUCCESS:
            return {
                ...state,
                fetchingKitty:false,
                kitty:action.kitty,
                error:null,
            };

        case KITTY_CONTRACT_FETCH_KITTY_FAILED:
            return {
                ...state,
                fetchingKitty:false,
                fetchingKittyError:action.error
            };


        default:
            return state;
    }
};




