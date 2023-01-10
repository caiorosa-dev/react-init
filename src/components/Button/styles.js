import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	padding: 12px 24px;
	border-radius: 5px;
	border: none;

	transition: all 0.25s;
	cursor: pointer;

	${(props) => css`
		color: ${ (props) => props.theme.fontColor.normal };
		background: ${ (props) => props.theme.background.normal };

		:hover {
			background: ${ (props) => props.theme.background.hover };
		}

		:disabled {
			display: none;
		}
	`}
`;

export { StyledButton };
