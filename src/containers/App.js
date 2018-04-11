import React, {Component} from 'react';
import {Redirect, Route, Switch,withRouter} from 'react-router';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MarketPlace from "./MarketPlace";
import MyKitties from "./MyKitties";
import MyAccount from "./MyAccount";
import {Link} from 'react-router-dom';
import { Web3Provider } from 'react-web3';
import Web3Unvailable from '../components/Web3Unvailable';
import AccountUnvailable from '../components/AccountUnvailable';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';

export class App extends Component {
 
    render() {
        const {connected,push} = this.props;
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="App-header">
                        <div  className="App-logo">
                            <div className="icon"></div>
                            <h1>CryptoKitties </h1>
                            {connected ? <label>(Connected)</label>: <label>(Not connected)</label>}
                        </div>
                        
                        <div>
                            
                            <Link to="/marketplace"> Marketplace</Link>
                            <Link to="/my-kitties"> My Kitties</Link>
                            <Link to="/account">My Account</Link>
                           
                        </div>
                    </div>
                    <Web3Provider 
                    accountUnavailableScreen={AccountUnvailable}
                    web3UnavailableScreen={Web3Unvailable}>
                    <div>
                        <Switch>
                            <Route exact path="/marketplace" component={MarketPlace}/>
                            <Route exact path="/my-kitties" component={MyKitties}/>
                            <Route path="/account" component={MyAccount}/>
                            <Redirect from="/" to="/marketplace"/>
                        </Switch>
                    </div>
                    </Web3Provider>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default withRouter(connect(
    state => ({connected: state.kittyContract.connected}),
    {push},
)(App));

