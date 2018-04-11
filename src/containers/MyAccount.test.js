import React from 'react';
import ReactDOM from 'react-dom';
import {MyAccount} from "./MyAccount";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyAccount />, div);
    ReactDOM.unmountComponentAtNode(div);
});
