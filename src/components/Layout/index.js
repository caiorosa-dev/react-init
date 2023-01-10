import React from "react";
import Header from "../Header";
import { Container } from './styles';
import Footer from '../Footer';
import Routes from '../../Routes';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Layout() {
	return (
		<Container>
			<BrowserRouter>
				<Header>
					<Link to='/'>Home</Link>
					<Link to='/posts'>Posts</Link>
				</Header>

				<Routes />

				<Footer />
			</BrowserRouter>
		</Container>
	)
}
