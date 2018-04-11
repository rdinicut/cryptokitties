import React, { Component } from 'react';
import './MarketPlace.css';
import {getKitty} from "../actions/kittycontract";
import { FlatButton } from 'material-ui';
import {connect} from 'react-redux';

class MarketPlace extends Component {
    render() {
        const {kitty,getKitty} = this.props;
        return (
            <div className="MarketPlace">
                { !kitty ? 
                <FlatButton label="Fetch Kittie" primary={true} onClick={() => getKitty(680492)} /> : 
                <ul>
                   {Object.keys(kitty).map(key => <li key={key}>{key} => {kitty[key].toString()}</li>)}
                </ul>
                }
                
            </div>
        );
    }
}



export default connect(
    state => ({kitty: state.kittyContract.kitty}),
    {getKitty},
)(MarketPlace)
