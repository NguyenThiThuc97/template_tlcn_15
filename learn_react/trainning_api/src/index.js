import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import appReducers  from './reducers/index'
import {Provider} from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import AppClient from './AppClient';

const store = createStore(
    appReducers,
    window.__REDUX_DEV_TOOLS_EXTENSION__ && window.__REDUX_DEV_TOOLS_EXTENSION__()
)

// ReactDOM.render(
//     <Provider store = {store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <Switch>
                <Route path = "/admin" component = {App}/>
                <Route path = "/" component = {AppClient}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
