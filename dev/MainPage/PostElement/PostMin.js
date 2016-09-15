import React from 'react';
import { Link, browserHistory } from 'react-router'
import Request from 'superagent';

import './PostMin.css'

export default class Post extends React.Component{
    removePost(){
        const id = this.props.id;
        this.props.handleDelete(id);
    }
    openEdit(){
        browserHistory.push(`/edit/${this.props.id}`);
    }
     render() {
        const style = {
             background: `url(${this.props.mainBg})` 
         };
        return (

         <div className = 'postWrapper' style = {style}>
            <div className = 'postHover' >
                <div className = 'postTitle' >
                    <Link to={`/edit/${this.props.id}`}  className ='link'>
                        <div className = 'postTitleText' >
                            {this.props.title}
                        </div>
                    </Link>
                    <button className = 'postDeleteButton' onClick={this.removePost.bind(this)} >X</button>
                    <Link to={`/edit/${this.props.id}`}>
                        edit
                    </Link>
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