## How to use and test this setup

If you've never used linters or tools like Husky and linst-staged, it can be helpful to get a first-hand experience with them. Follow the steps below to do just that.

- Clone this repo.
- Remove the `.demo` suffix from the example files in the `demo-files` directory.
- Run `nvm use` to verify you're on the correct version of node/npm.
- Run `npm install` to install the node dependencies.
- Run `composer install` to install the php dependencies.
- Run one (or more) of the following to see the linting and formatting options in action:
  - `npm run lint-js` This will show you js errors in the console without fixing them.
  - `npm run lint-styles` This will show you scss errors in the console without fixing them.
  - `npm run lint-php` This will show you php code sniffer errors.
  - `npm run lint` This will run eslint and stylelint and show errors in the console without fixing them.
  - `npm run lint-fix` This will auto-fix all possible linting errors.
  - `npm run prettier` This will show you formatting (prettier) errors in the console without fixing them.
  - `npm run prettier-fix` This will auto-fix all possible formatting errors.
  - `npm run format` This will auto-fix all possible linting and formatting errors at once.
- Restore the content of any auto-fixed files to the state they came in with this repo and add them for commit `git add .`
- Try to submit a commit message that follows the Conventional Commits standard `git commit -m "feat: my awesome new feature"` (more about this below)

  - You'll see that linting and formatting are run, and any auto-fixable issues are fixed, but there are some that need manual fixing, so the commit fails.
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

  - Edit `example.scss` and move the `.awesome .component` chunk to the end of the file.
  - Edit `Example.php` and paste in the following:
  - ```
    <?php

    /**
    * Class comment.
    */
    class Example {

      /**
      * Function comment.
      */
      public function bar() {
        /*
        * Comment line 1.
        * Comment line 2.
        */
        if ($foo) {
          echo 'foo';
        }
      }

    }
    ```

  - Save all of the files and stage them. Now, everything should pass linting, so let's test the commit linter.

- Try to submit a commit that does not follow the Conventional Commits standard `git commit -m "my awesome new feature"`
  - You'll see an error that you forgot to include the "subject" and the "type"
- Try to submit a commit that does not use an accepted type `git commit -m "foo: my awesome new feature"`
  - You'll see an error that your type "must be one of" and then lists acceptable types.
- Try again with a proper commit message `git commit -m "feat: my awesome new feature"`
  - This time the commit will succeed! Everything was linted, and fixed (if necessary), and the commit message can be used for automated semantic releases and used to auto-generate a changelog! Win!
