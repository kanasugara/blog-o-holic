import React from "react";

import './PostPageElement.css'

export default class PostPageElement extends React.Component{
     render() {
      const style = {
             backgroundImage: `url(${this.props.mainBg})` 
         };
        return (
         <div className = "pageWrapper" >
            <section className = "module parallax parallax-1" style={style}  >
              <div className="container">
                <h1> {this.props.title} </h1>
              </div>
            </section>
            <section className="module content" >
              <div className="container" >
                <p> {this.props.mainTxt} </p>
              </div>
            </section>
        </div>
        );
    }
}