import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import PostDelete from './posts/PostDelete';
import PostEdit from './posts/PostEdit';
import Dashboard from './posts/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';
import Header from './layout/Header';

import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';
import PrivateRoute from './common/PrivateRoute';

import { loadUser } from '../actions/auth';

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <PrivateRoute exact path='/' component={Dashboard} />
                        <Route exact path='/delete/:id' component={PostDelete} />
                        <Route exact path='/edit/:id' component={PostEdit} />
                        <Route exact path='/login' component={LoginForm} />
                        <Route exact path='/register' component={RegisterForm} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));