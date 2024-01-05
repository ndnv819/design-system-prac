import { useContext } from 'react';
import { ThemeContext } from '../themeContext';
import { ThemeContextType } from '../types';

export default function useThemeMode(): ThemeContextType {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error('themeProvider가 선언되지 않음');
	}

	return context;
}
