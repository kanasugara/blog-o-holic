import React from 'react';
import { Link } from 'react-router'

import './PostMin.css'

export default class Post extends React.Component{ 
     render() {
        return (
         <div className = 'postWrapper' style = {style}>
            <div className = 'postHover' >
                <div className = 'postTitle' >
                    <div className = 'postTitleText' >
                        {this.props.title}
                    </div>
                    <button className = 'postDeleteButton' >X</button>
                    <button className = 'postEditButton' ><Link to={`/posts/${this.props.key}`} >Edit</Link></button>
                </div>
                <div className = 'postContext'>
                    {this.props.mainTxt}
                </div>
            </div>
        </div>
        );
    }
}