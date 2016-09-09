import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import './fonts.css'
import './styles.css'

import Header from './Layout/Header';
import MainContainer from './MainPage/mainContainer';
import NewPostPageContainer from './NewPostPage/NewPostPage';
import PostPage from './SinglePostPage/postPage';
import ProfilePage from './ProfilePage/ProfilePage';

class Layout extends React.Component {
	render() {
		return( 
			<div>
				<Header />
				 {this.props.children}
				{/* add footer here   //// comment in JSX style */}
			</div>
		);
	}
}
const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={MainContainer} />
			<Route path='home' component={MainContainer} />
			<Route path='newPost' component={NewPostPageContainer} />
			<Route path='edit/:id' component={NewPostPageContainer} />
			<Route path='posts/:id' component={PostPage} />
			<Route path='profile' component={ProfilePage} />
		</Route>
	</Router>, 
app);