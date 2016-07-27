import React from "react";

import OptSect from "./OptSect";

export default class PostPage extends React.Component{
     render() {
        return (
         <div className = "pageWrapper" >
            <section className = "module parallax parallax-1" style={this.props.mainBg} >
              <div className="container">
                <h1> {this.props.title} </h1>
              </div>
            </section>
            <section className="module content" style={this.props.mainTxtBg} >
              <div className="container" >
                <p> {this.props.mainTxt} </p>
              </div>
            </section>
            {
                POSTS.map( post => 
                    <OptSect 
                        key = {post.id}  
                        title = {post.title} 
                        context = {post.contextMin}
                    />
                )
            }
        </div>
        );
    }
}