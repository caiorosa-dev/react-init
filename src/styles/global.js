import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	body {
		background: ${ (props) => props.theme.background.bodyBackground };
		font-family: 'Poppins';
		color: ${ (props) => props.theme.fontColor.highlight };
		padding: 16px;
	}

	* {
		margin: 0;
		padding: 0;
		border: none;
	}

	::-webkit-scrollbar {
		width: 7px;
	}

	::-webkit-scrollbar-track {
		background: #111;
	}

	::-webkit-scrollbar-thumb {
		background: ${ (props) => props.theme.background.normal };
		border-radius: 2px;

		:hover {
			background: ${ (props) => props.theme.background.lighter };
		}
	}
`;
