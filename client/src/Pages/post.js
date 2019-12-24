import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchPosts} from '../action/postAction';


const PostCard = styled.div`
    width: 90%;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 2px 1px 10px #ccc;
    border: 1px solid #ccc;
    margin: auto;
    margin-bottom: 10px;
    text-align: left;

`;


 class post extends Component {

    async componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts
        return (
            <div>
               <h1> Post Pages</h1>
                {posts && posts.map((post, index) => {
                    return (
                        <PostCard>
                            <h3>{post.title}</h3>
                            <div>{post.image}</div>
                            <p>{post.body}</p>
                        </PostCard>
                    )
                })}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(post);