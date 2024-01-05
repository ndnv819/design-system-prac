import styled from '@emotion/styled';

type ComponentProps = {
	size?: number;
	weight?: 400 | 500 | 600 | 700 | 800;
	color?: string;
};

export const Component = styled.p<ComponentProps>`
	${(props) => props.size && `font-size: ${props.size}px`};
	${(props) => props.weight && `font-weight: ${props.weight}`};
	color: ${(props) => props.color || props.theme.colors.color};
`;
