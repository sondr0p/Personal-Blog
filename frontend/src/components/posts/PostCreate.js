import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/posts';
import PostForm from './PostForm';

class PostCreate extends Component {
    onSubmit = formValues => {
        this.props.addPost(formValues);
    };

    render() {
        return (
            <div style={{ marginTop: '2rem' }}>
                <PostForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    null,
    { addPost }
)(PostCreate);