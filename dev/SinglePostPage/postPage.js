import React from "react";
import Request from 'superagent';
import _ from 'underscore'

import PostPageElement from './PostPageElement';

// import OptSect from "./OptSect";

export default class PostPage extends React.Component{
    constructor() {
      super();
          this.state = {};
      }
    componentWillMount(){
        const url = '/posts/57c6d6252a3c3f109c915a78';
        Request.get(url).then((response) => {
            this.setState({
                post: response.body
            })
        })
    }
    render() {
        var postData = this.state.post;
    return (
      <div>
        <PostPageElement  
              key = {postData.id}  
              title = {postData.title} 
              mainTxt = {postData.mainTxt}
              mainBg = {postData.mainBg}
        />;
      </div>
    );
  }
}