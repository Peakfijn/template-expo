#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import resolvePkg from 'resolve-pkg';

const directory = resolvePkg('semantic-release', { cwd: __dirname });
const manifest = require(path.resolve(directory, 'package.json'));
const bin = path.resolve(directory, manifest.bin['semantic-release']);

require(bin);
