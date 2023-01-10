import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import PostPage from './pages/Post/index';

export default function Routes() {
	return (
	<Switch location={item}>
		<Route exact path='/' component={Home} />
		<Route exact path='/posts' component={Posts} />
		<Route path='/posts/:id' component={PostPage} />
		<Route component={NotFound} />
	</Switch>);
}
