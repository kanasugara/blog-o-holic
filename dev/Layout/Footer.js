import React from 'react';
import { Link } from 'react-router'

import './Footer.css'

export default class Footer extends React.Component{
    render() {
        return ( 
            <footer>
                <ul>
                    <Link to='home' >Home</Link>
                    <Link to='newPost' >New Post</Link>
                    <Link to='profile' >Profile</Link>
                </ul>
                <h3>blog-o-holic</h3>
                <h4>2016</h4>
            </footer>
        );
    }
}
