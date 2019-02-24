import React, {Component, Fragment} from 'react';
import axios from '../../axios-blog';
import {Button} from "reactstrap";
import {NavLink} from "react-router-dom";

class ReadMore extends Component {

    state = {
        post: null
    };

    getPostUrl = () => {
        const id = this.props.match.params.id;
        return `posts/${id}.json`;

    };

    componentDidMount() {
        axios.get(this.getPostUrl()).then(response => {
            this.setState({post: response.data});
        })
    }

    deletePost = () => {
        axios.delete(this.getPostUrl()).then(() => {
            this.props.history.push('/')

        })
    };

    render() {
        return (
            this.state.post ? <Fragment>
                <h1>Read More:</h1>
                <div>{this.state.post.title}</div>
                <div>{this.state.post.description}</div>
                <NavLink to={"/posts/" + this.props.match.params.id + '/edit'}><Button>To Change</Button></NavLink>
                <Button onClick={this.deletePost}>Delete</Button>
            </Fragment> : null
        );
    }
}

export default ReadMore;