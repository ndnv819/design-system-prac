import { Theme } from '@emotion/react';

export type ThemeContextType = {
	theme: Theme;
	changeTheme: () => void;
};
