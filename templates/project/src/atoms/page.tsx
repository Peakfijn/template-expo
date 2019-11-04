import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

export const Page: React.FC<ViewProps> = ({ children, ...props }) => (
	<Background {...props}>
		{children}
	</Background>
);

const Background = styled.View`
	flex: 1;
`;
