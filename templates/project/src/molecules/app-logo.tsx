import React from 'react';
import { Image, Linking, TouchableOpacity } from 'react-native';

export const AppLogo: React.FC = () => (
	<TouchableOpacity accessibilityRole='link' onPress={() => Linking.openURL('https://peakfijn.nl')}>
		<Image
			source={require('assets/images/logo-peakfijn.png')}
			style={{ width: 128, height: 158}}
			accessibilityLabel='Peakfijn'
		/>
	</TouchableOpacity>
);
