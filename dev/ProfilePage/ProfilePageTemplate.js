import React from 'react';

import './ProfilePageTemplate.css'

export default class ProfilePage extends React.Component{
    render() {
        return ( 
            <div>
                <h1>{this.props.blogerName}</h1> 
                <div id='profileInfo'>
                    <div id='blogerDescription'>
                        {this.props.blogerDesc}
                    </div>
                    <div id='blogerAvatar'>
                        {this.props.blogerAvatar}
                    </div>
                </div>
            </div>
        );
    }
}
