import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost, editPost } from "../../actions/posts";
import PostForm from "./PostForm";

class PostEdit extends Component {
    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editPost(this.props.match.params.id, formValues);
    };

    render() {
        return (
            <div className="container">
                <h2>Edit Post</h2>
                <PostForm
                    initialValues={_.pick(this.props.post, "title")}
                    enableReinitialize={true}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getPost, editPost })(PostEdit);
