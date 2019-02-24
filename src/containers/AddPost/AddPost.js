import React, {Component, Fragment} from 'react';
import axios from '../../axios-blog';
import PostForm from "../../components/PostForm/PostForm";

class AddPost extends Component {
    addPost = post => {
        axios.post('posts.json', post).then(() => {
            this.props.history.replace('/');
        });
    };

    render() {
        return (
            <Fragment>
                <h1>Add new post</h1>
                <PostForm onSubmit={this.addPost}/>
            </Fragment>
        );
    }
}

export default AddPost;