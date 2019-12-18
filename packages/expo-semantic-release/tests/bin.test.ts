import pkg from '../package';

it('has binary alias defined in package file', () => {
	expect(pkg.bin).toMatchObject({
		'semantic-release': 'build/bin.js',
	});
});
