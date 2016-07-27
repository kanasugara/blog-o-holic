import React from "react";

export default class OptSect extends React.Component{
  render() {
    return (
      <section className = {this.props.optSection.class}  style = {this.props.optSection.bg} >
        <div className = "container">
          <p> {this.props.optSection.img.txt} </p>
        </div>
      </section>
    );
  }
}