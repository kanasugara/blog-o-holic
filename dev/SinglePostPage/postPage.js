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
        const url = `/posts/:${this.props._id}`;
        Request.get(url).then((response) => {
            this.setState({
                post: response.body
            })
        })
    }
    render() {
        var post = _.map(this.state.post, (post) => {
            return <PostPageElement  
              key = {post.id}  
              title = {post.title} 
              mainTxt = {post.mainTxt}
              mainBg = {post.mainBg}
            />;
        });
    return (
      <div>
        {post}
      </div>
    );
  }
}