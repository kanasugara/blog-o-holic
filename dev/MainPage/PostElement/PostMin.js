import React from 'react';

import './PostMin.css'

export default class Post extends React.Component{
     render() {
        return (
         <div className = 'postWrapper' >
            <div className = 'postHover' >
                <div className = 'postTitle' >
                    <div className = 'postTitleText' >
                        {this.props.title}
                    </div>
                    <button className = 'postDeleteButton' >X</button>
                    <button className = 'postEditButton' >Edit</button>
                </div>
                <div className = 'postContext'>
                    {this.props.context}
                </div>
            </div>
        </div>
        );
    }
}