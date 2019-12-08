/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('lodash');
const expoPreset = require('jest-expo/jest-preset');
const testingLibraryPreset = require('@testing-library/react-native/jest-preset');

module.exports = merge(expoPreset, testingLibraryPreset, {
	cacheDirectory: '.jest',
	coverageDirectory: './test-reports/coverage',
	projects: [
		{ preset: 'jest-expo/ios' },
		{ preset: 'jest-expo/android' },
	],
	reporters: [
		'default',
		['jest-junit', {
			suiteName: 'Project-Name tests',
			outputDirectory: 'test-reports',
		}],
	],
});
