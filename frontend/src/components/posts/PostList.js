import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../../actions/posts';
import { Link } from 'react-router-dom'; // added

class PostList extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>
                {this.props.posts.map(post => (
                    <div className='item' key={post.id}>
                        <div className='card mb-3' style={{ maxWidth: '40rem' }}>
                            <div className='card-header'>
                                <Link to={`/edit/${post.id}`}>
                                    {post.title}
                                </Link>
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>{post.text}</p>
                                <Link
                                    to={`/delete/${post.id}`}
                                    className='btn btn-danger btn-sm'
                                >
                                    Delete
                                </Link>
                            </div>
                            <div className='card-footer text-muted'>
                                {post.created_at}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: Object.values(state.posts)
});

export default connect(
    mapStateToProps,
    { getPosts, deletePost }
)(PostList);