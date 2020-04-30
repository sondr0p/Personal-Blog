import React, { Component } from 'react';
import PostList from './PostList';
import PostCreate from './PostCreate';

class Dashboard extends Component {
    render() {
        return (
            <div className='container'>
                <PostCreate />
                <PostList />
            </div>
        );
    }
}

export default Dashboard;