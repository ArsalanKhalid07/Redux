import React, { Component } from 'react';

class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            post:[]
        }
    }
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({post:data }));
    }
    render(){
        const postItems = this.state.post.map(item => (
            <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            </div>
        ));

        return (
            <div>
                <h1>POST</h1>
                {postItems}
            </div>
        )
    }
}

export default Post;