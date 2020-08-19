import React, { Component } from 'react';
import PostList from './PostList';


class Dashboard extends Component {
    render() {
        return (
            <div className='container'>
                <PostList />
            </div>
        );
    }
}

export default Dashboard;