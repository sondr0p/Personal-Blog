import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../../actions/posts';
import { Link } from 'react-router-dom'; // added
import PostCreate from './PostCreate';

class PostList extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    renderImage = (image) => {
        if (image !== null)
            return (<img style={{ maxWidth: "100%", maxHeight: "100%", padding: 50 }} src={post.image} alt="" />);
        else
            return null;
    }

    render() {
        return (
            <div>
                <PostCreate />

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
                                {post.image === null ? <img /> : <img style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: 10 }} src={post.image} alt="" />}
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