import React from 'react';
import Request from 'superagent';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
            });
        });
    }
    render() {
        var posts = _.map(this.state.posts, (post) => {
            return <Post 
                    key = {post._id}
                    id = {post._id} 
                    title = {post.title} 
                    mainTxt = {post.mainTxt}
                    mainBg = {post.mainBg}
            />;
        });
        return ( 
            <div id = "mainContainer">
                <newPost />
                <ReactCSSTransitionGroup 
                    transitionName="example" 
                    transitionEnterTimeout={500} 
                    transitionLeaveTimeout={300}>
                        {posts}
                </ReactCSSTransitionGroup>
            </div> 
        );
    }
}