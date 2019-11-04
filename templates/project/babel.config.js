module.exports = function(api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'inline-dotenv',
			['module-resolver', {
				root: ['.'],
				alias: {
					src: './src',
					assets: './assets',
				},
			}],
			['styled-components', {
				ssr: false,
				displayName: true,
				preprocess: true,
			}],
		],
		env: {
			production: {
				plugins: ['react-native-paper/babel'],
			},
		},
	};
};
