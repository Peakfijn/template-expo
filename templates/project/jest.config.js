/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('lodash');
const expoPreset = require('jest-expo/jest-preset');
const expoIosPreset = require('jest-expo/ios/jest-preset');
const expoAndroidPreset = require('jest-expo/android/jest-preset');
const testingLibraryPreset = require('@testing-library/react-native/jest-preset');

module.exports = merge({}, expoPreset, testingLibraryPreset, {
	clearMocks: true,
	cacheDirectory: '.jest',
	coverageDirectory: './test-reports/coverage',
	projects: [
		{ preset: 'jest-expo/ios', transformIgnorePatterns: expoIosPreset.transformIgnorePatterns },
		{ preset: 'jest-expo/android', transformIgnorePatterns: expoAndroidPreset.transformIgnorePatterns },
	],
	reporters: [
		'default',
		['jest-junit', {
			suiteName: 'Project-Name tests',
			outputDirectory: 'test-reports',
		}],
	],
});
