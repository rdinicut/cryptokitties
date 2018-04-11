import React, { Component } from 'react';
import './MyAccount.css';
import {connect} from 'react-redux';
import { saveAccountDetails } from '../actions/account';
import { TextField, RaisedButton, Card } from 'material-ui';

export class MyAccount extends Component {

    render() {
        const {account, saveAccountDetails} = this.props;
        let {name,email} = account;
        return (
            <div className="MyAccount">
                <Card>
                    <label>Wallet address : {account.ethAddress}</label>
                    <TextField 
                    floatingLabelText="Name" 
                    floatingLabelFixed={true} 
                    fullWidth={true} 
                    defaultValue={account.name}
                    onChange={(event, value) => name = value}/>
                    <TextField 
                    floatingLabelText="Email" 
                    floatingLabelFixed={true} 
                    type="email" 
                    defaultValue={account.email} 
                    fullWidth={true}
                    onChange={(event, value) => email = value}/>
                   />
                    <RaisedButton label="Save" primary={true}
                    onClick={() => {
                        saveAccountDetails(name, email);
                    }} />
               </Card> 
            </div>
        );
    }
}

export default connect(
    state => ({account: state.account}),
    {saveAccountDetails},
)(MyAccount);
