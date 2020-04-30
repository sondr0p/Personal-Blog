import React, { Component } from 'react'

class PostView extends Component {
    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render() {
        return (
            <div className='container'>
                <h2></h2>

            </div>
        );
    }
}

export default PostView
