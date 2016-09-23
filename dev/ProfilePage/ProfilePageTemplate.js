import React from 'react';

import './ProfilePageTemplate.css'

export default class ProfilePage extends React.Component{
    render() {
        const style = {
             background: `url(${this.props.blogerAvatar})`
         };
        return (
            <div id = 'profile'>
                <h1>{this.props.blogerName}</h1> 
                 <div id = 'blogerAvatar' style = {style}>
                    </div>
                <div id='profileInfo'>
                    <div id='blogerDescription'>
                        <pre>{this.props.blogerDesc}</pre>
                    </div>
                   
                </div>
            </div>
        );
    }
}
