# Project-Name

- [Project Notes](#markdown-header-project-notes)
- [Getting started](#markdown-header-getting-started)
- [Folder structure](#markdown-header-folder-structure)
- [Coding rules](#markdown-header-coding-rules)
- [Commit guidelines](#markdown-header-commit-guidelines)


## Project notes

_none_


## Getting started

To get up and running and start developing, follow the steps below.

1. Copy the following files and set it up for your machine
	- `.env.staging` to `.env`
	- `app.staging.json` to `app.json`
2. Install Node dependencies using `npm ci` (or `npm install`)
3. Run the project with `npm start`
4. Or test the project with `npm test` and `npm run lint`

> Or run the project with docker `docker-compose up`

### Troubleshooting project

Node/React apps can be complex projects; a lot of things can go wrong.
Here are some steps to quickly reset your local environment to start all over again.

1. Make sure you followed the **Getting started** steps
2. Reset all local changes to start over with these commands
    - `npm run clean` — removes Expo instance settings and test reports
	- `git checkout develop` — changes the current branch back to the main branch
	- `git reset --hard HEAD` — resets all local changes to the last commit, _use with caution_
	- `git clean -xdf ./src` — removes all files in src not listed in the repo, _use with caution_
3. Reset node modules and node caches using `npm ci`

> Or rebuild the project with docker `docker-compose up --build`


## Folder structure

Every project needs a folder structure.
This one uses the [Atomic Design][link-atomic-design] principles as structure.
The rules are relatively simple; each folder has a specific meaning related to the types of components.

1. `atoms` — smallest components that don't refer domain-specific entities, like `Text` or `Button` _(may include other atoms)_
2. `molecules` — small components which are reused multiple times and/or refer domain-specific entities, like `AppFrame` or `<Entity>Card` _(may include other atoms and molecules)_
3. `organisms` — group of components for specific non-reused domain-specific areas of the project, like `Auth` or certain business-related pages _(may include or contain other atoms and molecules)_

Next to these folders, there are some extra non-atomic folders with a special meaning.

1. `providers` — a file, or group of files, that "provide" features or integrations, like `theme`, `testing` or `sentry`
2. `types` — some TypeScript definition files to "fix" untyped libraries, like `jest-styled-components.d.ts`
3. `app.tsx` — **Expo only** the entry point for the whole Expo app. It renders the full app using references to providers or organisms

> We also recommend using a [folder-component][link-folder-component] for complex multi-file components.

> Please keep nesting minimal as possible, it's hard for developers if they have to search through all folders.


## Coding rules

Be a good colleague and make your code stable and predictable by adhering to our shared coding rules.

- Follow the [Airbnb JavaScript style guide][link-airbnb-js]
- Use **tabs** for _indentation_, **spaces** for _alignment_
- Make sure the automated tests (CI) are successful
- **WRITE TESTS**


## Commit guidelines

Make sure you follow the [Conventional Commits][link-convcomm] rules when formatting your commit messages.

> You can view the most up-to-date version of these guidelines in the [Peakfijn Conventions][link-peakfijn-commits] repository.


[link-airbnb-js]: https://github.com/airbnb/javascript
[link-atomic-design]: https://bradfrost.com/blog/post/atomic-web-design/
[link-convcomm]: https://www.conventionalcommits.org
[link-folder-component]: https://medium.com/styled-components/component-folder-pattern-ee42df37ec68
[link-peakfijn-commits]: https://github.com/Peakfijn/Conventions/tree/develop/packages/commit-types-peakfijn
