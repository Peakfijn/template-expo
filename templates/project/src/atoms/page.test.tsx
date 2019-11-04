import React from 'react';
import { Text } from 'react-native';
import { render } from 'src/providers/testing';
import { Page } from './page';

it('renders container with flex', () => {
	const { getByTestId } = render(
		<Page testID='page'>
			<Text>text</Text>
		</Page>
	);

	const component = getByTestId('page');

	expect(component).toHaveStyleRule('flexGrow', 1);
	expect(component).toHaveStyleRule('flexShrink', 1);
});
