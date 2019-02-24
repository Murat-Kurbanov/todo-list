import React, {Component} from 'react';

import {Button, Card, CardBody, CardTitle, Col, Row} from "reactstrap";

import axios from '../../axios-blog';


class PostList extends Component {
    state = {
        posts: null
    };

    componentDidMount() {
        axios.get('posts.json').then(response => {
            const posts = Object.keys(response.data).map(id => {
                return {...response.data[id], id};
            });

            this.setState({posts})
        })
    }

    readMore = (id) => {
        this.props.history.push(`/posts/${id}`);
    };

    render() {
        let posts = null;

        if (this.state.posts) {
            posts = this.state.posts.map((post, index) => (
                <Card key={index} inverse color="info" style={{marginBottom: "10px", width: "70em"}}>
                    <CardBody>
                        <CardTitle>{post.title}</CardTitle>
                            <Button onClick={() => this.readMore(post.id)}>Read More >></Button>
                    </CardBody>
                </Card>
            ));
        }

        return (
            <Row style={{marginTop: "20px"}}>
                <Col sm={3}>
                    <h2>Posts:</h2>
                    {posts}
                </Col>
            </Row>
        );
    }
}

export default PostList;