import React from 'react';
import Request from 'superagent';
import _ from 'underscore'

import './MainContainer.css'

import Post from "./PostElement/PostMin";

export default class MainContainer extends React.Component{
    constructor() {
        super();
            this.state = {};
    }
    componentWillMount(){
        const url = `/home`;
        Request.get(url).then((response) => {
            this.setState({
                posts: response.body
            })
        })
    }
    render() {
        var posts = _.map(this.state.posts, (post) => {
            return <Post 
                    key = {post.id}  
                    title = {post.title} 
                    mainTxt = {post.mainTxt}
                    mainBg = {post.mainBg}
                />;
        });

        return ( 
            <div id = "mainContainer">
                <newPost />
                {posts}
            </div> 
        );
    }
}
//ES5

// var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
// var messages = ids.map(function (value) {
//   return "ID is " + value // explicit return
// });

//ES6

// var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
// var messages = ids.map(value => `ID is ${value}`) // implicit return