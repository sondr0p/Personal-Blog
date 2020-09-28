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
                <textarea {...input}
                    className={`${touched && error ? 'form-control is-invalid' : 'form-control'}`}
                    autoComplete='off'
                    rows='3'
                />
                {touched && error && (
                    <span className='invalid-feedback'>{error}</span>
                )}
            </div>
        );
    };

    uploadImage = ({ input: { value: omitValue, ...inputProps }, label, meta: omitMeta, ...props }) => {
        return (
            <div>
                <label className='form-control-label'>{label}</label>
                <input type='file' id="image" {...inputProps} {...props} />
            </div>
        );
    }



    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div>
                <form id='postForm' onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className='form-group has-danger'>
                    <Field name='title' label='Enter title' className='form-control' type='text' component={this.renderTitle} />
                    <Field name='text' label='Enter text' className='form-control' type='text' component={this.renderText} />
                    <Field name='image' label='Add Image' component={this.uploadImage} />
                    <button className='btn btn-info btn-md'>POST</button>
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

