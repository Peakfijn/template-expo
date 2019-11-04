import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

export const loadAssets = () => {
	const images = [
		require('assets/images/logo-peakfijn.png'),
	];

	return images.map(id => Asset.fromModule(id).downloadAsync());
}

export class AssetsProvider extends Component<{}, AssetsProviderState> {
	state = {
		isLoaded: false,
	};

	async componentDidMount() {
		await Promise.all([
			...loadAssets(),
			// ...loadFonts(),
		]);

		this.setState({ isLoaded: true });
	}

	render() {
		if (!this.state.isLoaded) {
			return <AppLoading />;
		}

		return this.props.children;
	}
}

interface AssetsProviderState {
	isLoaded: boolean;
}
