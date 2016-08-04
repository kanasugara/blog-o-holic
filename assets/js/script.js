import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import '../css/fonts.css'
import '../css/styles.css'

import Header from './pages/Header';
import MainContainer from './pages/mainContainer';
import NewPostPage from './pages/NewPostPage';
import PostPage from './pages/postPage';

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
		
		</Route>
	</Router>, 
app);