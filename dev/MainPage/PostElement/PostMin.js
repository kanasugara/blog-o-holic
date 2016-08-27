import React from 'react';

import './PostMin.css'

export default class Post extends React.Component{ 
     render() {
        const style = {
            backgroundImage: `url(${this.props.mainBg})` 
        };
        console.log(style);
        return (
         <div className = 'postWrapper' style = {style}>
            <div className = 'postHover' >
                <div className = 'postTitle' >
                    <div className = 'postTitleText' >
                        {this.props.title}
                    </div>
                    <button className = 'postDeleteButton' >X</button>
                    <button className = 'postEditButton' >Edit</button>
                </div>
                <div className = 'postContext'>
                    {this.props.mainTxt}
                </div>
            </div>
        </div>
        );
    }
}