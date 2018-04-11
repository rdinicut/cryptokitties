import React, {Component} from 'react';
import './Web3Unvailable.css';
import { RaisedButton, Card } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';


class Web3Unvailable extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="Web3Unvailable">
                <Card>
                <h1>Wanna play?</h1>
                <p>You’ll need a safe place to store all of your adorable CryptoKitties! The perfect place is in a secure wallet like MetaMask. This will also act as your login to the game (no extra password needed).</p>
                <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank">
                <RaisedButton label="Install Metamask" primary={true} />
                </a>
                </Card>
                    
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Web3Unvailable;