import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export default function Button({ onClick, children, disabled }) {
	return (
		<StyledButton
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</StyledButton>)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
}
