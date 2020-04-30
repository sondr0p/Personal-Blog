import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../layout/Modal';
import history from '../../history';
import { getPost, deletePost } from '../../actions/posts';

class PostDelete extends Component {
    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    renderContent() {
        if (!this.props.post) {
            return 'Are you sure you want to delete this post?';
        }
        return `Are you sure you want to delete the post: ${this.props.post.title}`;
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <Fragment>
                <button
                    onClick={() => this.props.deletePost(id)}
                    className='btn btn-primary'
                >
                    Delete
        </button>
                <Link to='/' className='btn btn-secondary'>
                    Cancel
        </Link>
            </Fragment>
        );
    }

    render() {
        return (
            <Modal
                title='Delete Post'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.match.params.id]
});

export default connect(
    mapStateToProps,
    { getPost, deletePost }
)(PostDelete);