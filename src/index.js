import React from "react";
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';

import store from './redux/store';
import User from "./User";



ReactDOM.render(
    <Provider store={store}>
        <User/>
    </Provider>,
    document.getElementById("app")
);

// hot reloading. It works by replacing a module of the application
// during runtime with an updated one so that it’s available for instant use.
module.hot.accept();