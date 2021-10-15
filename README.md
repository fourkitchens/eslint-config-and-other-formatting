## How to use and test this setup

- Clone this repo.
- Remove the `.demo` suffix from the js and scss files in the `demo-files` directory.
- Run `nvm use` to verify you're on the correct version of node/npm
- Run `npm install` to install the dependencies
- Run one (or more) of the following to see the linting and formatting options in action:
  - `npm run eslint` This will show you js errors in the console without fixing them.
  - `npm run stylelint` This will show you scss errors in the console without fixing them.
  - `npm run lint` This will run eslint and stylelint and show errors in the console without fixing them.
  - `npm run lint-fix` This will auto-fix all possible linting errors.
  - `npm run prettier` This will show you formatting (prettier) errors in the console without fixing them.
  - `npm run prettier-fix` This will auto-fix all possible formatting errors.
  - `npm run format` This will auto-fix all possible linting and formatting errors at once.
- Restore any auto-fixed files to the state they came in with this repo
- Try to submit a commit that does not follow the Conventional Commits standard `git commit -m "my awesome new feature"`
  - You'll see an error that you forgot to include the "subject" and the "type"
- Try to submit a commit that does not use an accepted type `git commit -m "foo: my awesome new feature"`
  - You'll see an error that your type "must be one of" and then lists acceptable types.
- Try to submit a commit message that follows the Conventional Commits standard `git commit -m "feat: my awesome new feature"`
  - You'll see that linting and formatting are run, andy auto-fixable issues are fixed, but one cannot be, so the commit fails'
  - Edit `example.js` and comment out, or delete the offending line. Save the file. (If your editor is set to auto-fix on save, you will see some things fix themselves.)
  - Stage the updated file, and try the same commit message again.
  - This time, you'll see new errors... I'm not sure why they didn't show up in the first place... but whatever...
  - Edit `example.js` again, and paste in the following (fixing all errors, but leaving the `console.log` warning).
  - ```
    const myInt = 5;
    let myString = `My integer is ${myInt}!`;

    const myFunction = function foo(myString2) {
      myString = myString2;

      return myString;
    };

    console.log(myFunction("Hello World"));
    ```
  - Stage the updated file, and try the same commit message again.
  - This time, you'll see the warning, but the js file will be committed and the commit proceeds. However, you'll now see an error in the scss.
  - Move the `.awesome .component` chunk to the end of the file and save it.
  - Stage the updated file, and try the same commit message again.
  - This time the commit will succeed! Everything was linted, and fixed (if necessary), and the commit message can be used for automated semantic releases and used to auto-generate a changelog! Win!

## Tools

### Project

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

### Local

There is very little you need to do locally to use this set of tools. An `nvm use && npm install` will handle most of it. You can, however configure your editor to use the config files defined in the project by following their recommendations. [Stylelint](https://stylelint.io/user-guide/integrations/editor) and [Prettier](https://prettier.io/docs/en/editors.html) each have documentation for setting up editor integration.
### CI (Build Environment)

- [semantic-release](https://github.com/semantic-release/semantic-release) or [standard-version](https://github.com/conventional-changelog/standard-version) for automated version bumping (based on commit messages.)
- Run fixes to ensure nothing was forced through
