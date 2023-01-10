import React, { useContext } from "react";
import ThemeContext from '../../context/ThemeContext';
import { Container, Button, Title, NavBar } from './styles';

export default function Header({ children }) {
	const { theme, handleToggleTheme } = useContext(ThemeContext);

	return (
		<Container as='header'>
			<Title>Dev's Blog</Title>

			<NavBar>
				{ children }
			</NavBar>

			<Button onClick={handleToggleTheme}>
				{theme === 'dark' ? '🌞' : '🌚'}
			</Button>
		</Container>
	);
}
