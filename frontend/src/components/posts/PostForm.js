import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import values from 'redux-form/lib/values';

class PostForm extends Component {

    renderTitle = ({ input, label, meta: { touched, error } }) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''} form-group has-danger`}>
                <label className='form-control-label'>{label}</label>
                <input {...input} className={`${touched && error ? 'form-control is-invalid' : 'form-control'}`} autoComplete='off' />
                {touched && error && (
                    <span className='invalid-feedback'>{error}</span>
                )}
            </div>
        );
    };

    renderText = ({ input, label, meta: { touched, error } }) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''} form-group has-danger`}>
                <label className='form-control-label'>{label}</label>
                <textarea {...input} className={`${touched && error ? 'form-control is-invalid' : 'form-control'}`} autoComplete='off' />
                {touched && error && (
                    <span className='invalid-feedback'>{error}</span>
                )}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        const btnText = `${this.props.initialValues ? 'Update' : 'Add'}`;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className='form-group has-danger'>
                    <label>Enter title</label>
                    <Field name='title' className='form-control' type='text' component={this.renderTitle} />
                    <label>Enter text</label>
                    <Field name='text' className='form-control' type='text' component={this.renderText} />
                    <button className='btn btn-primary btn-sm'>{btnText}</button>
                </form>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Please enter a title';
    }

    if (!formValues.text) {
        errors.text = 'Please enter a body';
    }

    return errors;
}

export default reduxForm({
    form: 'postForm',
    touchOnBlur: false,
    validate
})(PostForm);

