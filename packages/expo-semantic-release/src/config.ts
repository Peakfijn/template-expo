import { GlobalConfig } from 'semantic-release';

/**
 * The Expo manifests to include in the upgrade.
 */
export const manifests = [
	'app.test.json',
	'app.staging.json',
	'app.production.json',
];

export default {
	branch: 'develop',
	tagFormat: '${version}',
	repositoryUrl: undefined, // this is handled through the project's package.json
	plugins: [
		['@semantic-release/commit-analyzer', {
			preset: 'peakfijn',
			releaseRules: 'release-rules-peakfijn',
		}],
		['@semantic-release/release-notes-generator', { preset: 'peakfijn' }],
		'@semantic-release/changelog',
		'@semantic-release/npm',
		['semantic-release-expo', { manifests }],
		['semantic-release-git-branches', {
			branchPush: true,
			branchMerges: ['develop', 'master'],
			message: 'release: create new version ${nextRelease.version}\n\n${nextRelease.notes}',
			assets: [
				'CHANGELOG.md',
				'package.json',
				'package-lock.json',
				...manifests,
			],
		}],
	],
} as GlobalConfig
