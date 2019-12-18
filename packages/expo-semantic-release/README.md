# Expo Semantic Release - Peakfijn

Quickly integrate [Semantic Release](https://github.com/semantic-release/semantic-release) in Expo, using Peakfijn standards.

```bash
npm install --save @peakfijn/expo-semantic-release
```

## Getting started

There are two `package.json` settings required for this to work.
  - [The package repository](https://docs.npmjs.com/files/package.json#repository)
  - [Semantic release configuration](https://semantic-release.gitbook.io/semantic-release/usage/configuration)

### The package repository

For our internal pipeline, we need a git reference to the repository.
You can do that by setting this in the `package.json`.

```json
{
	"repository": {
		"type": "git",
		"url": "git@bitbucket.org:peakfijn/<project-name>.git"
	}
}
```

### Semantic release configuration

There are [multiple ways to configure this](https://semantic-release.gitbook.io/semantic-release/usage/configuration), using the package file is recommended.
You can set this up by setting this in the `package.json`.

```json
{
	"release": {
		"extends": "@peakfijn/expo-semantic-release"
	}
}
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

--- ---

<div align="center">
    <strong><a href="https://peakfijn.nl">Peakfijn</a></strong>
</div>
