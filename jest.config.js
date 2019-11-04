module.exports = {
	clearMocks: true,
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/templates/project/',
	],
	testRegex: '\\.test\\.(js|ts)x?$',
	transform: {
		'^.+\\.(js|ts)x?$': 'babel-jest',
	},
};
