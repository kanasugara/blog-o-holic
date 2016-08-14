import React from 'react';

import ProfilePageTemplate from './ProfilePageTemplate';

var BLOGER = [
    {
        'id' : 1,
        'blogerName' : 'Max Barkskikh',
        'blogerDesc' : 
`lalaalallala
Phone 55-555-55
Fax   44-444-44`,
        'blogerAvatar' : '../../img/post_2',
        'SignedUpDate' : '26/02'
      }
    ]

export default class ProfilePage extends React.Component{
  render() {
    return (
      <div>
        {  
          BLOGER.map( data => 
            <ProfilePageTemplate 
              key = {data.id}  
              blogerName = {data.blogerName} 
              blogerDesc = {data.blogerDesc}
              blogerAvatar = {data.blogerAvatar}
            />
          )
        }
      </div>
    );
  }
}