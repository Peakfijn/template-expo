import React from 'react';
import { Title } from 'react-native-paper';
import styled from 'styled-components/native';
import { Page } from 'src/atoms/page';
import { AppLogo } from 'src/molecules/app-logo';

export const PeakfijnPage: React.FC = () => (
	<Page>
		<Container>
			<AppLogo />
			<Heading>Peakfijn ❤️ Expo</Heading>
		</Container>
	</Page>
);

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const Heading = styled(Title)`
	margin: 8px;
`;
