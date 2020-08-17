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
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Create post
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <PostForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" form="postForm">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { addPost }
)(PostCreate);