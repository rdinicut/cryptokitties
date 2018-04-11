import React from 'react';
import ReactDOM from 'react-dom';
import MyKitties from "./MyKitties";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyKitties />, div);
    ReactDOM.unmountComponentAtNode(div);
});
