import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions/auth';

class LoginForm extends Component {
    renderField = ({ input, label, type, meta: { touched, error } }) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''} form-group has-danger`}>
                <label className='form-control-label'>{label}</label>
                <input {...input} className={`${touched && error ? 'form-control is-invalid' : 'form-control'}`} type={type} />
                {touched && error && (
                    <span className='invalid-feedback'>{error}</span>
                )}
            </div>
        );
    };

    hiddenField = ({ type, meta: { error } }) => {
        return (
            <div className='field form-group has-danger'>
                <input type={type} className={`${error ? 'form-control is-invalid' : 'form-control'}`} />
                {error && <div className='invalid-feedback'>{error}</div>}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.login(formValues);
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
        }
        return (
            <div className='container' style={{ marginTop: '2rem' }}>
                <form
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className='form-group has-danger'
                >
                    <Field
                        name='username'
                        type='text'
                        component={this.renderField}
                        label='Username'
                    />
                    <Field
                        name='password'
                        type='password'
                        component={this.renderField}
                        label='Password'
                    />
                    <Field
                        name='non_field_errors'
                        type='hidden'
                        component={this.hiddenField}
                    />
                    <button className='btn btn-primary btn-sm'>Login</button>
                </form>
                <p style={{ marginTop: '1rem' }}>
                    Don't have an account? <Link to='/register'>Register</Link>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

LoginForm = connect(
    mapStateToProps,
    { login }
)(LoginForm);

export default reduxForm({
    form: 'loginForm'
})(LoginForm);