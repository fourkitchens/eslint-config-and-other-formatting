## Quick Setup

- To install the JS tools below, use the following command: `npm install --save-dev eslint@^7 eslint-config-airbnb-base@^14 eslint-config-prettier@^8 eslint-plugin-import@^2 eslint-plugin-prettier@^4 eslint-plugin-security@^1 prettier@2.4.1`
- To install the CSS tools below, use the following command: `npm install --save-dev stylelint@^13 stylelint-config-prettier@^9 stylelint-config-standard@^22 stylelint-prettier@^1 prettier@2.4.1`
- To install the PHP tools below, use the following command: `composer require drupal/coder:^8.3.13 phpcompatibility/php-compatibility:^9.3 dealerdirect/phpcodesniffer-composer-installer:^0.7`
- Then you'll need to copy the config files for each linter into your project (see the respective sections below).
- Finally, update the scripts in your `package.json` file according to the one in this project.

## Usage

- If you're not familiar with linters, or how they work, there's a step-by-step example in [Usage.md](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/Usage.md) that walks you through everything documented here. Try it out!

## Tools Used

### Javascript

- [Eslint](https://eslint.org/docs/user-guide/getting-started0): A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
  - Files:
    - [`.eslintignore`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.eslintignore)
    - [`.eslintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.eslintrc.json)
  - Integrations:
    - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Configure Prettier to play nice with eslint
      - Affects file: [`.eslintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.eslintrc.json)
    - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
      - Affects file: [`.eslintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.eslintrc.json)
    - [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security): Helps identify potential security hotspots.
      - Affects file: [`.eslintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.eslintrc.json)

### CSS (SCSS)

- [Stylelint](https://stylelint.io/): A linter that helps avoid errors and enforce conventions in style sheets. You can configure your [editor to use stylelint](https://stylelint.io/user-guide/integrations/editor) so that code is formatted on save, for example.
  - Files:
    - [`.stylelintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.stylelintrc.json)
    - [`.stylelintignore`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.stylelintignore)
  - Integrations:
    - [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier): Configure Prettier to play nice with stylelint
      - Affects file: [`.stylelintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.stylelintrc.json)
    - [stylelint-prettier](https://github.com/prettier/stylelint-prettier): Runs Prettier as a Stylelint rule and reports differences as individual Stylelint issues.
      - Affects file: [`.stylelintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.stylelintrc.json)

### PHP

- [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer): A PHP linter that ensures your code remains clean and consistent.
  - Files:
    - [`.phpcs.xml`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.phpcs.xml) In this repo, we're linting the demo-files folder. Update this file for an actual projects needs.
  - Affects Files:
    - [`package.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/package.json)

### General Code Formatting

- [Prettier](https://prettier.io/docs/en/index.html): Opinionated code formatter with support for many file types. You can configure your [editor to use prettier](https://prettier.io/docs/en/editors.html) so that code is formatted on save, for example.
  - Files:
    - [`.prettierrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.prettierrc.json)
    - [`.prettierignore`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.prettierignore)
  - Integrations:
    - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Configure Prettier to play nice with eslint
      - Affects file: [`.eslintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.eslintrc.json)
    - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
      - Affects file: [`.eslintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.eslintrc.json)
    - [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier): Configure Prettier to play nice with stylelint
      - Affects file: [`.stylelintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.stylelintrc.json)
    - [stylelint-prettier](https://github.com/prettier/stylelint-prettier): Runs Prettier as a Stylelint rule and reports differences as individual Stylelint issues.
      - Affects file: [`.stylelintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.stylelintrc.json)

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
- [lint-staged](https://github.com/okonet/lint-staged): **Run via Husky.** Used to lint only staged (changed) files, as opposed to the whole code base (Note: The whole code base will be linted later, as a check for anything that was forced through, etc. This mostly improves the day-to-day developer experience.)
  - Affects Files:
    - [`package.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/package.json)
    - [`.husky/pre-commit`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.husky/pre-commit)
- [Commit Lint](https://commitlint.js.org/#/): **Run via Husky.** Verifies commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for many reasons. In particular, that it facilitates automated release notes, and semantic version bumping.
  - Files:
    - [`commitlint.config.js`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/commitlint.config.js)
  - Affects File: [`.husky/commit-msg`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.husky/commit-msg)

## Local

There is very little you need to do locally to use this set of tools. An `nvm use && npm install` will handle most of it. You can, however configure your editor to use the config files defined in the project by following their recommendations. [Stylelint](https://stylelint.io/user-guide/integrations/editor) and [Prettier](https://prettier.io/docs/en/editors.html) each have documentation for setting up editor integration.

## CI (Build Environment)

_NOTE: This section is not complete._

- [semantic-release](https://github.com/semantic-release/semantic-release) or [standard-version](https://github.com/conventional-changelog/standard-version) for automated version bumping (based on commit messages.)
- Run fixes to ensure nothing was forced through
