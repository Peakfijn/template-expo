import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { merge } from 'lodash';

const theme = merge(DefaultTheme, {
	colors: {
		peakfijn: '#FF4D18',
	},
});

export const ThemeProvider: React.FC = (props) => (
	<StyledThemeProvider theme={theme}>
		<PaperProvider theme={theme}>
			{props.children}
		</PaperProvider>
	</StyledThemeProvider>
);
