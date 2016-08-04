import React from "react";
import { Link } from 'react-router'

export default class Header extends React.Component{
    render() {
        return ( 
            <header>
                <ul>
                    <Link to='home'><li id="logo" >blog-o-holic</li> </Link>
                    <Link to='home'><li id="HomeLink" >Home</li></Link>
                    <Link to='newPost'><li id="newPostLink" >New Post</li></Link>
                    <Link to='home'><li id="ProfileLink" >Profile</li></Link>
                </ul>
            </header>
        );
    }
}
