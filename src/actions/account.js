export const ACCOUNT_SAVE_DETAILS = "[USER]SAVE_ACCOUNT_DETAILS";
export const ACCOUNT_CHANGED = "web3/CHANGE_ACCOUNT";
export const ACCOUNT_RECEIVED = "web3/RECEIVE_ACCOUNT";

export const saveAccountDetails = (name,email) => {
    return {
        type: ACCOUNT_SAVE_DETAILS,
        name,
        email
    }
}