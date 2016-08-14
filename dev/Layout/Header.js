import React from 'react';
import { Link } from 'react-router'

import './Header.css'

export default class Header extends React.Component{
    render() {
        return ( 
            <header>
                <ul>
                    <Link to='home' id="logo" >blog-o-holic</Link>
                    <Link to='home' >Home</Link>
                    <Link to='newPost' >New Post</Link>
                    <Link to='profile' >Profile</Link>
                </ul>
            </header>
        );
    }
}
