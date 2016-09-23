import React from 'react';

import ProfilePageTemplate from './ProfilePageTemplate';

export default class ProfilePage extends React.Component{
  render() {
    var BLOGER = {
        'id' : 1,
        'blogerName' : 'George Denis Patrick CARLIN',
        'blogerDesc' : 
`George Denis Patrick Carlin (May 12, 1937 – June 22, 2008) 
was an American stand-up comedian, actor, social critic and author. 
Carlin was noted for his black comedy and his thoughts on politics, 
the English language, psychology, religion, and various taboo subjects.

Phone 55-555-55

Fax   44-444-44`,
        'blogerAvatar' : 'http://lamcdn.net/lookatme.ru/post_image-image/Iq8CRxOI1k4IXuLRzATP4w-article.jpg',
        'SignedUpDate' : '26/02'
    };
    return (
      <ProfilePageTemplate 
        key = {BLOGER.id}  
        blogerName = {BLOGER.blogerName} 
        blogerDesc = {BLOGER.blogerDesc}
        blogerAvatar = {BLOGER.blogerAvatar}
      />
    );
  }
}