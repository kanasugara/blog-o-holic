import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './fonts.css'
import './styles.css'

import EditPostPageContainer from './EditPostPage/EditPostPage';
import Footer from './Layout/Footer';
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
					<div className = 'contentGoHere' >
						{this.props.children}
					</div>
				<Footer />
			</div>
		);
	}
}
const app = document.getElementById('app');
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={MainContainer} />
			<Route path='home' component={MainContainer} />
			<Route path='newPost' component={NewPostPageContainer} />
			<Route path='edit/:id' component={EditPostPageContainer} />
			<Route path='posts/:id' component={PostPage} />
			<Route path='profile' component={ProfilePage} />
		</Route>
	</Router>, 
app);