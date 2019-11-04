import React from 'react';
import { fireEvent, render } from 'src/providers/testing';
import { AppLogo } from './app-logo';

const mockOpenURL = jest.fn();

jest.mock('Linking', () => ({
	openURL: mockOpenURL,
}));

it('renders peakfijn logo', () => {
	const { getByLabelText } = render(<AppLogo />);
	const image = getByLabelText('Peakfijn');

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	expect(image.props).toHaveProperty('source', require('assets/images/logo-peakfijn.png'));
});

it('links to peakfijn', () => {
	const { getByRole } = render(<AppLogo />);
	const link = getByRole('link');

	fireEvent.press(link);
	expect(mockOpenURL).toHaveBeenCalledWith('https://peakfijn.nl');
});
