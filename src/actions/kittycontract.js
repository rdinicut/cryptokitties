export const CONNECT_TO_KITTY_CONTRACT = "[KITTY_CONTRACT]CONNECT";
export const CONNECT_TO_KITTY_CONTRACT_SUCCESS = "[KITTY_CONTRACT]CONNECT_SUCCESS";
export const CONNECT_TO_KITTY_CONTRACT_FAILED = "[KITTY_CONTRACT]CONNECT_FAILED";
export const KITTY_CONTRACT_FETCH_KITTY = "[KITTY_CONTRACT]GET_KITTY";
export const KITTY_CONTRACT_FETCH_KITTY_SUCCESS = "[KITTY_CONTRACT]GET_KITTY_SUCCESS";
export const KITTY_CONTRACT_FETCH_KITTY_FAILED = "[KITTY_CONTRACT]GET_KITTY_FAILED";

export const connectToContract = () => {
    return {
        type: CONNECT_TO_KITTY_CONTRACT
    }
}

export const contractConnectSuccess = () => {
    return {
        type: CONNECT_TO_KITTY_CONTRACT_SUCCESS
    }
}

export const contractConnectFailed = () => {
    return {
        type: CONNECT_TO_KITTY_CONTRACT_FAILED
    }
}

export const getKitty = (kittyId) => {
    return {
        type: KITTY_CONTRACT_FETCH_KITTY,
        kittyId
    }
}

export const getKittySuccess = (kitty) => {
    return {
        type: KITTY_CONTRACT_FETCH_KITTY_SUCCESS,
        kitty
    }
}

export const getKittyFailed = (error) => {
    return {
        type: KITTY_CONTRACT_FETCH_KITTY_FAILED,
        error
    }
}