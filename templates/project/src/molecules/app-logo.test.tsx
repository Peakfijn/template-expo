import React from 'react';
import { Linking } from 'react-native';
import { fireEvent, render } from 'src/providers/testing';
import { AppLogo } from './app-logo';

it('renders peakfijn logo', () => {
	const { getByLabelText } = render(<AppLogo />);
	const image = getByLabelText('Peakfijn');

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	expect(image.props).toHaveProperty('source', require('assets/images/logo-peakfijn.png'));
});

it('links to peakfijn', () => {
	const { getByRole } = render(<AppLogo />);
	const link = getByRole('link');
	const openURL = jest.spyOn(Linking, 'openURL');

	fireEvent.press(link);
	expect(openURL).toHaveBeenCalledWith('https://peakfijn.nl');
});
