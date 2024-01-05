import { css } from '@emotion/css';
import styled from '@emotion/styled';

export const Component = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 99px;
`;

export const buttonTypes = {
	primary: {
		filled: css`
			color: white;
			background-color: #1B8;
			border: none;

			&:hover {
				background-color: #0C9266;
			}
			&:focus {
				outline: #08623F;
				outline-offset: 4px;
			}
			&:active {
				background-color: #08623F;
			}
			&:disabled {
				color: #878D96;
				background-
        color: #DDE1E6;
			}
		`,
		outlined: css`
			color: #1B8;
			background-color: #fff;
			border: 1.5px solid #1B8;

			&:hover {
				color: #08623F;
				border: 1.5px solid #0C9266;
			}
			&:focus {
				color: #08623F;
				background-color: #fff;
				border: 1.5px solid #08623F;
			}
			&:active {
				color: #08623F;
				background-color: #fff;
				border: 1.5px solid #08623F;
			}
			&:disabled {
				color: #878D96;
				background-color: #fff;
				border: 1.5px solid #DDE1E6;
			},
    `,
		subtle: css`
      color: #1B8;
      background-color: transparent;
      border: none;

      &:hover {
        color: #08623F;
      }
      &:focus {
        color: #1B8;
        background-color: #fff;
        border: 1px solid #1B8;
        outline: none;
      }
      &:active {
        color: #1B8;
        background-color: #fff;
        border: 1.5px solid #08623F;
        outline: none;
      }
      &:disabled {
        color: #878D96;
        background-color: #fff;
        border: 1.5px solid #DDE1E6;
      },
    `,
	},
	secondary: {
		filled: css`
			color: white;
			background-color: #2d384d;
			border: none;

			&:hover {
				background-color: #565e76;
			}
			&:focus {
				outline: #ecedf4;
				outlineoffset: 4px;
			}
			&:active {
				color: #2d384d;
				background-color: #ecedf4;
			}
			&:disabled {
				color: #878d96;
				background-color: #ecedf4;
			}
		`,
		outlined: css`
			color: #2d384d;
			background-color: #fbfcfe;
			border: 1.5px solid #2d384d;

			&:hover {
				color: #08623f;
				border: 1.5px solid #565e76;
			}
			&:focus {
				color: #2d384d;
				background-color: #ecedf4;
				border: 1.5px solid #2d384d;
			}
			&:active: {
				color: #2d384d;
				background-color: #ecedf4;
				border: 1.5px solid #2d384d;
			}
			&:disabled: {
				color: #878d96;
				background-color: #fff;
				border: 1.5px solid #898da4;
			}
		`,
		subtle: css`
      color: #2D384D;
      background-color: transparent;
      border: none;

      &:hover {
        color: #565E76;
      }
      &:focus {
        color: #2D384D;
        background-color: #ECEDF4;
        outline: none;
      }
      &:active: {
        color: #2D384D;
        background-color: #ECEDF4;
        outline: none;
      }
      &:disabled: {
        color: #878D96;
      },
    `,
	},
};

export const buttonSizes = {
	small: css`
		height: 30px;
		padding: 8px 16px;
	`,
	medium: css`
		height: 38px;
		padding: 10px 32px;
	`,
	large: css`
		height: 44px;
		padding: 12px 64px;
	`,
};
