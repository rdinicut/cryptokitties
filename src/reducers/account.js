import { ACCOUNT_RECEIVED, ACCOUNT_CHANGED, ACCOUNT_SAVE_DETAILS } from "../actions/account";

const initialState = {
    name: "",
    email: "",
    ethAddress : ""
}

export const accountReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACCOUNT_RECEIVED:
        return {
            ...state,
            ethAddress: action.address
        };

        case ACCOUNT_CHANGED:
        return {
            ...state,
            ethAddress: action.address
        };

        case ACCOUNT_SAVE_DETAILS:
        return {
            ...state,
            name: action.name,
            email: action.email
        };

        default:
            return state;
    }
}