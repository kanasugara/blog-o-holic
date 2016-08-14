import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import './fonts.css'
import './styles.css'

import Header from './Layout/Header';
import MainContainer from './MainPage/mainContainer';
import NewPostPage from './NewPostPage/NewPostPage';
import PostPage from './SinglePostPage/postPage';
import ProfilePage from './ProfilePage/ProfilePage';

class Layout extends React.Component {
	onPostAdd(data){
		console.log(data);
	}
	render() {
		return( 
			<div>
				<Header />
				 {this.props.children}
				{/* add footer here   //// comment in JadsSX style */}
			</div>
		);
	}
}
const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={NewPostPage} />
			<Route path='home' component={MainContainer} />
			<Route path='newPost' component={NewPostPage} />
			<Route path='postPage' component={PostPage} />
			<Route path='profile' component={ProfilePage} />
		</Route>
	</Router>, 
app);