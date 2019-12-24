import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newPosts } from '../action/postAction';


class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            image: ""

        }
    }



    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postSubmit = () => {
        this.props.newPosts(this.state.title, this.state.image, this.state.body)
        this.setState({
            title: "",
            image: '',
            body: ""
        });
        alert("POST SUCCESS FULL");
    }





    render() {

        if (!localStorage.getItem("token")) {
            return <h1>Please Login</h1>
        }
        return (
            <div>
                <h1> Welcome Admin</h1>
                <div>Post Title</div>
                <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                <br></br>
                <div>Post Body</div>
                <input type="text" name="body" value={this.state.body} onChange={this.onChange} style={{ height: '200px' }} />
                <div>Post images</div>
                <input type="file" name="image" value={this.state.image} onChange={this.onChange} />
                <br></br>
                <br></br>
                <br></br>
                <button onClick={this.postSubmit}>Submit Your Post</button>
            </div>
        )
    }
}

export default connect(null, { newPosts })(admin);