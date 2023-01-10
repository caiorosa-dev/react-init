import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import ThemeContext from './context/ThemeContext';
import themes from './styles/themes';

export default function App() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

	const currentTheme = useMemo(() => {
		return themes[theme] || themes.dark
	}, [theme]);

	function handleToggleTheme() {
		setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
	}

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, handleToggleTheme }}>
			<ThemeProvider theme={currentTheme}>
				<GlobalStyle />
				<Layout />
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}
