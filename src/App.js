import React, {Component} from 'react';
import {Provider} from "react-redux"
import {BrowserRouter as Router, Switch} from 'react-router-dom'

import store from "./store/store"
import PrivateRoute from "./helpers/router"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <PrivateRoute />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
