import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'; // added

import history from '../history'; // added
import PostDelete from './posts/PostDelete'; // added
import PostEdit from './posts/PostEdit'; // added
import Dashboard from './posts/Dashboard'; // added

import { Provider } from 'react-redux'; // added
import store from '../store'; // added
import Header from './layout/Header';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route exact path='/delete/:id' component={PostDelete} />
                        <Route exact path='/edit/:id' component={PostEdit} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));