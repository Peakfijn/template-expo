import React from 'react';
import { render } from 'src/providers/testing';
import { PeakfijnPage } from './peakfijn';

it('renders peakfijn text', () => {
	const { getByText } = render(<PeakfijnPage />);

	expect(getByText('Peakfijn ❤️ Expo')).toBeDefined();
});
