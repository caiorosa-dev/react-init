import styled, { css } from 'styled-components';

export const Container = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;

	background: ${ (props) => props.theme.background.darker };
	padding: 8px;
	border-radius: 8px;

	${(props) => css`
		opacity: ${ props.removed ? 0.25 : 1 };
	`}
`;

export const Title = styled.h2`
	color: ${ (props) => props.theme.fontColor.normal };
	transition: color 0.25s;

	:hover {
		color: ${ (props) => props.theme.fontColor.highlight };
		cursor: pointer;
	}
`;

export const Subtitle = styled.small`
	display: block;
	color: ${ (props) => props.theme.fontColor.subtitle };
	font-size: 16px;
`;

