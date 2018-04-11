import { ACCOUNT_SAVE_DETAILS, saveAccountDetails } from "./account";

describe('account actions', () => {
    it('should create an action to save account details', () => {
        const name = "John Doe";
        const email = "john.doe@undifened.com";
        const expectedAction = {
            type: ACCOUNT_SAVE_DETAILS,
            name,
            email
        };

        expect(saveAccountDetails(name,email)).toEqual(expectedAction)
    });
});