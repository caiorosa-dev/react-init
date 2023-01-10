import styled from 'styled-components';
import BasicContainer from '../BasicContainer';

const Container = styled(BasicContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
	color: ${ (props) => props.theme.fontColor.highlight };
`

const NavBar = styled.nav`
	display: flex;
	gap: 2.5rem;

	a {
		text-decoration: none;
		color: ${ (props) => props.theme.fontColor.highlight };
	}
`;

const Button = styled.button`
	background: transparent;
	font-size: 24px;

	transition: all 0.25s;
	cursor: pointer;
	:hover {
		opacity: 0.75;
	}
`;

export { Container, Title, Button, NavBar };
