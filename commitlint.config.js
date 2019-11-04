/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const LernaProject = require('@lerna/project');

module.exports = {
	extends: ['@peakfijn/config-commitlint'],
	utils: { getScopeRule },
	rules: {
		'scope-empty': [0],
		'scope-enum': getScopeRule,
	},
};

// see: https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-lerna-scopes/index.js
async function getScopeRule(context = {}) {
	const packages = await getPackageScopes(context);
	const templates = getTemplateScopes(context);

	return [2, 'always', [...packages, ...templates]];
}

async function getPackageScopes(context = {}) {
	const project = new LernaProject(context.cwd || process.cwd());
	const packages = await project.getPackages();

	return packages
		.map(pkg => pkg.name)
		.map(name => (name.charAt(0) === '@' ? name.split('/')[1] : name));
}

function getTemplateScopes(context = {}) {
	const templates = fs.readdirSync(
		path.resolve(context.cwd || process.cwd(), 'templates')
	);

	return templates.map(name => `template/${name}`);
}
