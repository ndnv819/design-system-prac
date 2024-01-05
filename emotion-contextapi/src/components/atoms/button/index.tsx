/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import { forwardRef } from 'react';
import { css } from '@emotion/css';
import { Component, buttonSizes, buttonTypes } from './styles';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
	type?: 'primary' | 'secondary';
	size?: 'small' | 'medium' | 'large';
	varient?: 'filled' | 'outlined' | 'subtle';
	disabled?: boolean;
}

export const Button = forwardRef<HTMLElement, ButtonProps>(
	(
		{
			type = 'primary',
			size = 'medium',
			varient = 'filled',
			disabled,
			...props
		},
		ref,
	) => {
		const buttonStyle = buttonTypes[type][varient];
		const sizeStyle = buttonSizes[size];

		const combinedStyles = css`
			${sizeStyle}
			${buttonStyle}
		`;
		return (
			<Component
				ref={ref}
				className={combinedStyles}
				disabled={disabled}
				{...props}
			/>
		);
	},
);
