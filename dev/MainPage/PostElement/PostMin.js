import React from 'react';
import { Link } from 'react-router'
import Request from 'superagent';

import './PostMin.css'

export default class Post extends React.Component{
    handleDelete(){
        const url = `/posts/${this.props.id}`;
        Request.del(url)
        .end( () => {
            React.forceUpdate();
        });
    }
     render() {
        const style = {
             background: `url(${this.props.mainBg})` 
         };
        return (

         <div className = 'postWrapper' style = {style}>
            <div className = 'postHover' >
                <div className = 'postTitle' >
                    <Link to={`/posts/${this.props.id}`}  className ='link'>
                        <div className = 'postTitleText' >
                            {this.props.title}
                        </div>
                    </Link>
                    <button className = 'postDeleteButton' onClick={this.handleDelete.bind(this)}>X</button>
                    <button className = 'postEditButton' ></button>
                </div>
                <Link to={`/posts/${this.props.id}`} className = 'link'>
                    <div className = 'postContext'>
                        {this.props.mainTxt}
                    </div>
                </Link>
            </div>
        </div>
        );
    }
}