# Four Kitchens' Linting and Formatting Standards

Four Kitchens projects are expected to follow a consistent linting and formatting configuration so that developers can focus on solving problems, rather than making sure their code is formatted according to the preferences of one or more developer. This is accomplished through a variety of tools:

- [Prettier](https://prettier.io) for general code formatting across many file types.
- [Commitlint](https://github.com/conventional-changelog/commitlint) to ensure semantic versioning and changelogs can be fully and accurately updated automatically.
- [Stylelint](https://stylelint.io/) to ensure error-free and consistently formatted style sheets (scss).
- [ESLint](https://eslint.org/docs/user-guide/getting-started) to ensure error-free and consistently formatted JavaScript.

## Installation

<details><summary>Prerequisites</summary>

Each environment that needs to pull @fourkitchens packages from GitHub needs to be authenticated using a "Personal Access Token". This only needs to be done once per-environment.

- Go to `https://github.com/settings/tokens/new`
  - In the "Note" field add something like "Four Kitchens GitHub Packages"
  - Choose an expiration value
  - Check the box for "write:packages" (this will automatically check all of the "repo" boxes as well)
  - Click "Generate token"
- On your local machine, create an environment variable. *See the link below for details
  - The `key` for Four Kitchens projects needs to be `FOUR_KITCHENS_BUILD_TOKEN`
  - The `value` is the token you created above
- Done!

*[Here's a stack overflow post showing how to set persistent environment variables for various shells](https://unix.stackexchange.com/questions/117467/how-to-permanently-set-environmental-variables)

</details>

### Installing the package

There must be a `.npmrc` file in the project root that tells npm to get `@fourkitchens` packages from GitHub rather than npm.

- Create a `.npmrc` file in your project root (or modify an existing one) and add the following:

```bash
@fourkitchens:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${FOUR_KITCHENS_BUILD_TOKEN}
```

Then you can install the package like any other npm dependency.

```bash
npm install --save-dev @fourkitchens/eslint-config-and-other-formatting
```

## Usage

- If you're not familiar with linters, or how they work, there's a step-by-step example in [Usage.md](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/Usage.md) that walks you through everything documented here. Try it out!

## Tools Used

### Prettier: General Code Formatting

**All projects _must_ utilize [Prettier](https://prettier.io/docs/en/index.html).**

Opinionated code formatter with support for many file types. You can configure your [editor to use prettier](https://prettier.io/docs/en/editors.html) so that code is formatted on save, for example.

<details><summary>Prettier Setup</summary>

1. To implement Prettier, create the file `.prettierrc.js` in the project root and add the following:

```js
module.exports = {
  ...require('@fourkitchens/eslint-config-and-other-formatting/prettier.config'),
};
```

2. Then, add this script to the `package.json`:

```json
{
  "scripts": {
    "prettier": "prettier components --ignore-unknown --list-different"
  }
}
```

(Replace `components` with the path to the top-level directory that contains the project's source code.)

</details>

### Commitlint

**All projects _must_ utilize [Commitlint](https://commitlint.js.org).**

**Run via Husky.** Verifies commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for many reasons. In particular, that it facilitates automated release notes, and semantic version bumping.

<details><summary>Commitlint Setup</summary>

1. To use Commitlint, create the file `commitlint.config.js` in the project root and add the following:

```js
module.exports = {
  extends: [
    '@fourkitchens/eslint-config-and-other-formatting/commitlint.config',
  ],
};
```

2. Install husky in the repository `npx husky install`
3. Create the husky script by running this in the project root: `npx husky add .husky/commit-msg 'npm run husky:commit-msg'`
4. Then define the script in the `package.json`

```json
{
  "scripts": {
    "husky:commit-msg": "commitlint --edit $1"
  }
}
```

</details>

### Stylelint

[Stylelint](https://stylelint.io) must be implemented on projects that define custom stylesheets.

Stylelint is a linter that helps avoid errors and enforce conventions in style sheets. You can configure your [editor to use stylelint](https://stylelint.io/user-guide/integrations/editor) so that code is formatted on save, for example.

<details><summary>Stylelint Setup</summary>

1. To use it, create the file `stylelint.config.js` in the project root and add the following:

```js
module.exports = {
  extends: [
    '@fourkitchens/eslint-config-and-other-formatting/stylelint.config',
  ],
};
```

2. Then, add this script to the `package.json`:

```json
{
  "scripts": {
    "lint:styles": "stylelint 'components/**/*.scss'"
  }
}
```

(Replace `components` with the path to the top-level directory that contains the project's source code.)

</details>

### Eslint

[Eslint](https://eslint.org/docs/user-guide/getting-started0) must be implemented on projects that define custom javascript.

Eslint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

<details><summary>Eslint Setup</summary>

1. To use it, create the file `.eslintrc.js` in the project root and add the following:

```js
module.exports = {
  extends: ['@fourkitchens/eslint-config-and-other-formatting'],
};
```

2. Then, add this script to the `package.json`:

```json
{
  "scripts": {
    "lint:js": "eslint components"
  }
}
```

(Replace `components` with the path to the top-level directory that contains the project's source code.)

</details>

### Lint-staged

[Lint-staged](https://github.com/okonet/lint-staged) is _highly_ recommended since it will only lint modified files, making the development workflow significantly faster than linting an entire codebase whether or not files have changed.

**Run via Husky.** Used to lint only staged (changed) files, as opposed to the whole code base (Note: The whole code base will be linted later, as a check for anything that was forced through, etc. This mostly improves the day-to-day developer experience.)

<details><summary>Lint-staged Setup</summary>

1. Create the husky script by running this in the project root: `npx husky add .husky/pre-commit 'npm run husky:pre-commit'`
2. Then define the script in the `package.json`

```json
{
  "scripts": {
    "husky:pre-commit": "lint-staged"
  }
}
```

3. Finally, define which file types to lint in your `package.json`. Below is an example that runs stylelint on scss files, eslint on js files and prettier on js, scss, and php files. Each project's requirements will vary, and may or may not need all of these (or more) so adjust according to the project needs.

```json
{
  "lint-staged": {
    "components/**/*.scss": ["npm run lint:styles -- --fix"],
    "components/**/*.js": ["npm run lint:js -- --fix"],
    "components/**/*.{js,scss,php}": ["npm run prettier -- --write"]
  }
}
```

</details>

## TODO
The rest of this file needs updating. The PHP stuff should probably be removed entirely and released on packagist, rather than being a part of this npm package.

### PHP

- [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer): A PHP linter that ensures your code remains clean and consistent.
  - Files:
    - [`.phpcs.xml`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.phpcs.xml) In this repo, we're linting the demo-files folder. Update this file for an actual projects needs.
  - Affects Files:
    - [`package.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/package.json)

### Utilities

- [Composer](https://getcomposer.org/download/): A Dependency Manager for PHP
  - Files:
    - [`composer.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/composer.json)
- [nvm](https://github.com/nvm-sh/nvm): Define the supported node version in a `.nvmrc` file, and then type `nvm use` into the terminal to ensure a consistent developer experience across environments. (The `use` command [can be automated](https://github.com/nvm-sh/nvm#automatically-call-nvm-use) per environment as well)
  - Files
    - [`.nvmrc`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.nvmrc)
    - [`package.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/package.json) (This is not used directly by nvm, but by npm, which nvm installs...)
- [Husky](https://github.com/typicode/husky): Performs linting/formatting automatically around git commands. e.g. `git commit`, `git push`, etc.
  - Files:
    - [`.husky/commit-msg`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.husky/commit-msg)
    - [`.husky/pre-commit`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.husky/pre-commit)
  - Affects File: [`package.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/package.json)

## Local

There is very little you need to do locally to use this set of tools. An `nvm use && npm install` will handle most of it. You can, however configure your editor to use the config files defined in the project by following their recommendations. [Stylelint](https://stylelint.io/user-guide/integrations/editor) and [Prettier](https://prettier.io/docs/en/editors.html) each have documentation for setting up editor integration.

## CI (Build Environment)

_NOTE: This section is not complete._

- [semantic-release](https://github.com/semantic-release/semantic-release) or [standard-version](https://github.com/conventional-changelog/standard-version) for automated version bumping (based on commit messages.)
- Run fixes to ensure nothing was forced through
