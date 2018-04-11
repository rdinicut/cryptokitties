import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter,routerMiddleware } from 'react-router-redux'
import {rootReducer} from "./reducers";
import {rootEpic} from "./epics/index";
import { createEpicMiddleware } from 'redux-observable';

const history = createHistory();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(createEpicMiddleware(rootEpic)),
        applyMiddleware(routerMiddleware(history)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);



ReactDOM.render(
    <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
