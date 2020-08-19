import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../actions/auth';

class RegisterForm extends Component {
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

    onSubmit = formValues => {
        this.props.register(formValues);
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
                        validate={[required, minUserLength, maxUserLength]}
                    />
                    <Field
                        name='email'
                        type='email'
                        component={this.renderField}
                        label='Email'
                        validate={required}
                    />
                    <Field
                        name='password'
                        type='password'
                        component={this.renderField}
                        label='Password'
                        validate={required}
                    />
                    <Field
                        name='password2'
                        type='password'
                        component={this.renderField}
                        label='Confirm Password'
                        validate={[required, passwordsMatch]}
                    />
                    <button className='btn btn-primary btn-sm'>Register</button>
                </form>
                <p style={{ marginTop: '1rem' }}>
                    Already have an account? <Link to='/login'>Login</Link>
                </p>
            </div>
        );
    }
}

const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
    value && value.length < min
        ? `Must be at least ${min} characters`
        : undefined;

const minUserLength = minLength(8);

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxUserLength = maxLength(16);

const passwordsMatch = (value, allValues) =>
    value !== allValues.password ? 'Passwords do not match' : undefined;

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

RegisterForm = connect(
    mapStateToProps,
    { register }
)(RegisterForm);

export default reduxForm({
    form: 'registerForm'
})(RegisterForm);