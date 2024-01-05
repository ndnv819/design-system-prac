/* eslint-disable react/require-default-props */
import { forwardRef } from 'react';
import { Component } from './styles';

interface TypographyTypes extends React.HTMLAttributes<HTMLElement> {
	as?: keyof JSX.IntrinsicElements;
	level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	size?: number;
	weight?: 400 | 500 | 600 | 700 | 800;
	color?: string;
}

export const Typography = forwardRef<HTMLElement, TypographyTypes>(
	({ as = 'p', level, size, weight = 400, color, ...props }, ref) => {
		const element = level || as;
		return (
			<Component
				ref={ref}
				as={element}
				size={level ? undefined : size}
				weight={weight}
				color={color}
				{...props}
			/>
		);
	},
);
