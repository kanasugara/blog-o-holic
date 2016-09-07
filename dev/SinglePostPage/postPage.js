import React from "react";
import Request from 'superagent';

import PostPageElement from './PostPageElement';

// import OptSect from "./OptSect";

export default class PostPage extends React.Component{
    constructor() {
      super();
          this.state = {  
            post: ''   ,
            };
      }
    componentWillMount(){
        const url = `/posts/${this.props.params.id}`;
        Request.get(url).then((response) => {
            this.setState({
                post: response.body
            })
        })
    }
    render() {
      var post = this.state.post;
    return (
      <div>
        <PostPageElement 
                    key = {post._id}
                    id = {post._id} 
                    title = {post.title} 
                    mainTxt = {post.mainTxt}
                    mainBg = {post.mainBg}
            />;
      </div>
    );
  }
}