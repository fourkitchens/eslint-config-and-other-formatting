## Tools

### Local

- [nvm](https://github.com/nvm-sh/nvm): Define the supported node version in a `.nvmrc` file, and then type `nvm use` into the terminal to ensure a consistent developer experience across environments. (The `use` command [can be automated](https://github.com/nvm-sh/nvm#automatically-call-nvm-use) per environment as well)
  - Files
    - [`.nvmrc`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.nvmrc)
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
- [Stylelint](https://stylelint.io/): A linter that helps avoid errors and enforce conventions in style sheets. You can configure your [editor to use stylelint](https://stylelint.io/user-guide/integrations/editor) so that code is formatted on save, for example.
  - Files:
    - [`.stylelintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.stylelintrc.json)
  - Integrations:
    - [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier): Configure Prettier to play nice with stylelint
      - Affects file: [`.stylelintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.stylelintrc.json)
    - [stylelint-prettier](https://github.com/prettier/stylelint-prettier): Runs Prettier as a Stylelint rule and reports differences as individual Stylelint issues.
      - Affects file: [`.stylelintrc.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.stylelintrc.json)
- [Prettier](https://prettier.io/docs/en/index.html): Opinionated code formatter with support for many file types. You can configure your [editor to use prettier](https://prettier.io/docs/en/editors.html) so that code is formatted on save, for example.
  - Files:
    - [`.prettier.json`](https://github.com/fourkitchens/linting-and-formatting-standards/blob/main/.prettier.json)
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


### CI (Build Environment)

- [semantic-release](https://github.com/semantic-release/semantic-release) or [standard-version](https://github.com/conventional-changelog/standard-version) for automated version bumping (based on commit messages.)
