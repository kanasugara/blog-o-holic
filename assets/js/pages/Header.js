import React from "react";

export default class Header extends React.Component{
    render() {
        return ( 
            <header>
                <ul>
                    <li><a href="#" id="logo" onClick={this.showPosts} >blog-o-holic</a></li>
                    <li><a href="#" id="HomeLink" onClick={this.showPosts} >Home</a></li>
                    <li><a href="#" id="newPostLink" onClick={this.openCreatePost} >New Post</a></li>
                    <li><a href="#" id="ProfileLink" onClick={this.showProfile} >Profile</a></li>
                </ul>
            </header>
        );
    }
}
