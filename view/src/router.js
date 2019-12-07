import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import CombinedReducers from './reducers/index';

//import components
import Index from './components/index';
import NotFound from './components/not-found';

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(CombinedReducers, applyMiddleware(thunk));
    }

    render() {
        return (
            <div>
                <Provider store={this.store} >
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Index} />
                            <Route path="*"  component={NotFound} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default AppRouter;