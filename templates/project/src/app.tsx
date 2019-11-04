import React from 'react';
import { AssetsProvider } from 'src/providers/assets';
import { NavigationProvider } from 'src/providers/navigation';
import { ThemeProvider } from 'src/providers/theme';

export const App: React.FC = () => (
	<AssetsProvider>
		<ThemeProvider>
			<NavigationProvider />
		</ThemeProvider>
	</AssetsProvider>
);
