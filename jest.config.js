module.exports = {
	clearMocks: true,
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/template/',
	],
	testRegex: '\\.test\\.(js|ts)x?$',
	transform: {
		'^.+\\.(js|ts)x?$': 'babel-jest',
	},
};
