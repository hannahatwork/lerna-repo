To get the project working:
- Run `yarn` to install all packages

To bundle and deploy:
- Run `lerna run prepare` to rollup all dependencies

--------------------------------------

#### ROLLUP:
- NOT necessarily a monorepo thing
- Module bundler
- Rollup allows you to write your code using ES Modules, and will then compile it back down to existing supported formats such as CommonJS modules, AMD modules, and IIFE-style scripts
- **Tree-shaking:** statically analyzes the code you are importing and will exclude anything that isn’t actually used, but needs a plugin to examine CommonJS dependencies
- **Code-splitting...**

#### LERNA:
- Monorepo thing
- Tool for managing JavaScript projects with multiple packages
- The two primary commands in Lerna are `lerna bootstrap` and `lerna publish`
    - `bootstrap` will link dependencies in the repo together
    - `publish` will help publish any updated packages
        - When you run `lerna publish`, if a module has been updated since the last release, it will be updated to the new version you're releasing. This means that you only publish a new version of a package when you need to.
        - In independent mode, you can increment package versions independently of each other.
- Lerna is _not_ a deployment tool for serverless monorepos

DEPENDENCY MANAGEMENT
- How to handle multiple versions of a library or framework

SCALING

NAMING STANDARDS

NAVIGATING CODE

UNIT TESTING

DEPLOYMENT

PROJECT COUPLING & HOW TO PREVENT IT

