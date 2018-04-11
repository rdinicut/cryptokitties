import React, {Component} from 'react';
import './AccountUnvailable.css';
import { Card } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';


class AccountUnvailable extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="Web3Unvailable">
                <Card>
                <h1>Your MetaMask is locked</h1>
                <p>Simply open MetaMask and follow the instructions to unlock it..</p>
                </Card>
                    
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AccountUnvailable;