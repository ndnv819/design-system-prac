import { ThemeContext } from '@/context/themeContext';
import { darkTheme, lightTheme } from '@/styles/theme';
import { Theme, ThemeProvider as EmotionProvider } from '@emotion/react';
import { ReactNode, useCallback, useState } from 'react';

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>(lightTheme);

	const changeTheme = useCallback(() => {
		setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			<EmotionProvider theme={theme}>{children}</EmotionProvider>
		</ThemeContext.Provider>
	);
}
