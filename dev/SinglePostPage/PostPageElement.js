import React from 'react'

import './PostPageElement.css'

export default class PostPageElement extends React.Component{
  render() {
    const style = {
      backgroundImage: `url(${this.props.mainBg})` 
    };
    return (
      <div className = 'pageWrapper' >
        <div className = 'mainBackground' style = {style} >
          <h1> {this.props.title} </h1>
        </div>
        <div className = 'mainContent' >
          <p> {this.props.mainTxt} </p>
        </div>
      </div>
    );
  }
}