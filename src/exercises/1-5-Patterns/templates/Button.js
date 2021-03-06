import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// FINAL_START
import { css } from '@styled-system/css';
import { variant } from 'styled-system';
// FINAL_END

// WORKSHOP_START
const Button = styled.button`
	padding: ${props => props.theme.space[3]} ${props => props.theme.space[4]};
	color: ${props => props.theme.colors.background};
	background-color: ${props => props.theme.colors.primary};
	border: 0;
	border-radius: ${props => props.theme.radii.round};
`;
// WORKSHOP_END
// FINAL_START
const Button = styled.button(
	css({
		boxSizing: 'border-box',
		display: 'inline-block',
		px: 4,
		py: 3,
		textAlign: 'center',
		border: 'thin',
		borderColor: 'primary',
		borderRadius: 'round',
		fontFamily: 'body',
		fontSize: 'md',
		textDecoration: 'none',
		userSelect: 'none',

		// We can't use :enabled here because it doesn't work with <a>
		'&:hover:not(:disabled), &:active:not(:disabled)': {
			color: 'background',
			borderColor: 'accent',
			backgroundColor: 'accent',
			cursor: 'pointer',
		},

		'&:focus': {
			outline: 0,
			color: 'background',
			backgroundColor: 'accent',
			borderColor: 'accent',
		},

		'&:disabled': {
			opacity: 0.6,
			filter: 'saturate(60%)',
		},
	}),
	variant({
		variants: {
			primary: {
				color: 'background',
				backgroundColor: 'primary',
			},
			secondary: {
				color: 'primary',
				backgroundColor: 'background',
			},
		},
	})
);
// FINAL_END

Button.propTypes = {
	/** Button label */
	children: PropTypes.node,
	/** Button variation */
	variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
	variant: 'secondary',
};

/** @component */
export default Button;
