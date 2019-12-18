import config from '../src/config';
import { castArray } from 'lodash';

const findPlugin = (name: string) => (
	config.plugins.find((plugin) => (
		castArray(plugin)[0] === name
	))
);

it('uses develop branch by default', () => {
	expect(config.branch).toBe('develop');
});

it('uses clean version tag format', () => {
	expect(config.tagFormat).toBe('${version}');
});

it('skips repository url to define in project package file', () => {
	expect(config.repositoryUrl).toBeUndefined();
});

it('uses peakfijn commit analyzer plugin', () => {
	expect(findPlugin('@semantic-release/commit-analyzer')[1]).toMatchObject({
		preset: 'peakfijn',
		releaseRules: 'release-rules-peakfijn',
	});
});

it('uses peakfijn release note generator plugin', () => {
	expect(findPlugin('@semantic-release/release-notes-generator')[1]).toMatchObject({
		preset: 'peakfijn',
	});
});

it('uses default changelog plugin', () => {
	expect(findPlugin('@semantic-release/changelog')).toBe('@semantic-release/changelog');
});

it('uses default npm plugin', () => {
	expect(findPlugin('@semantic-release/npm')).toBe('@semantic-release/npm');
});

it('uses manifests with expo plugin', () => {
	expect(findPlugin('semantic-release-expo')[1]).toMatchObject({
		manifests: [
			'app.test.json',
			'app.staging.json',
			'app.production.json',
		],
	});
});

it('uses peakfijn config with git branches plugin', () => {
	expect(findPlugin('semantic-release-git-branches')[1]).toMatchObject({
		branchPush: true,
		branchMerges: ['develop', 'master'],
		message: 'release: create new version ${nextRelease.version}\n\n${nextRelease.notes}',
		assets: [
			'CHANGELOG.md',
			'package.json',
			'package-lock.json',
			'app.test.json',
			'app.staging.json',
			'app.production.json',
		],
	});
});
