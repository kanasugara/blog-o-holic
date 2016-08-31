import React from "react";

import './PostPageElement.css'

export default class PostPageElement extends React.Component{
     render() {
        return (
         <div className = "pageWrapper" >
            <section className = "module parallax parallax-1" style={{background: this.props.mainBg}}  >
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