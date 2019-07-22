import React, {Component} from 'react';

class PostForm extends Component {
constructor(props){
    super(props);
    this.Onchange=this.Onchange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
        title:'',
        body:''
    }
}

Onchange(e){
    this.setState({
        [e.target.name]:e.target.value
    })
}
onSubmit(e){
    e.preventDefault();
    const post = {
        title:this.state.title,
        body:this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data));
    
}
    render(){
        return (
            <div>
                <h1>ADD POST</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <br/>
                        <input type="text" name="title" onChange={this.Onchange}  value={this.state.title}/>
                    </div>
                    
                    <div>
                        <label>Body:</label>
                        <br/>
                        <textarea name='body' value={this.state.body}  onChange={this.Onchange}></textarea>
                        <br/>               
                    </div>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default PostForm;