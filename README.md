To get the project working:
- Run `yarn` to install all packages

To bundle and deploy:
- Run `lerna run prepare` to rollup all dependencies

--------------------------------------

WHY are we looking at MONOREPOS
WHAT do we want to SOLVE
WHAT are the drawbacks of MANYREPOS

On monorepos...
- Whether a monorepo brings more benefits than drawbacks to a project depends strongly on the project’s structure and organization. Simple rule-of-thumbs are "One repo per team" or "Release it together, keep it together." If you work in a team on the same project and/or if your services and libraries are part of the same project and deployment process, a monorepo is very likely something you should give a try. (https://medium.com/swlh/on-monorepos-and-the-deployment-with-gitlab-ci-cd-bc080cfc6dce)
    - If components should be released together (e.g. as part of the same feature), put them in a monorepo
    - One of the _benefits_ is that there is only one deploy...
    - With monorepos you don't have to manage PRs for 8 different repositories when adding a feature
- Reduces "contract area" between projects — not directly related to the package but related to how they rely on each other/are built/deployed
- Make multiple changes in multiple microapps at once — code changes across modules are faster and easier, with fewer errors and in one PR!
- More info...
    - https://danluu.com/monorepo/

#### ROLLUP:
- NOT necessarily a monorepo thing
- Module bundler
- Rollup allows you to write your code using ES Modules, and will then compile it back down to existing supported formats such as CommonJS modules, AMD modules, and IIFE-style scripts
- **Tree-shaking:** statically analyzes the code you are importing and will exclude anything that isn’t actually used, but needs a plugin to examine CommonJS dependencies
- **Code-splitting...**

#### LERNA:
- A monorepo thing
- Tool for managing JavaScript projects with multiple packages
- The two primary commands in Lerna are `lerna bootstrap` and `lerna publish`
    - `bootstrap` will link dependencies in the repo together
    - `publish` will help publish any updated packages
        - When you run `lerna publish`, if a module has been updated since the last release, it will be updated to the new version you're releasing. This means that you only publish a new version of a package when you need to.
        - In independent mode, you can increment package versions independently of each other.
- Lerna is _not_ a deployment tool for serverless monorepos
Questions...
- Running start/running parallel... Doesn't seem to work that well

DEPENDENCY MANAGEMENT
- How to handle multiple versions of a library or framework
    - Monorepo packages:
        - If modules are published to a registry (e.g. NPM), then older versions of the modules can be installed
        - If not, you can continue to use an older version of the module in your app if you've already installed it, but you can only ever install the latest version
    - Monorepo dependencies
        - Rollup allows each package to define its own dependencies, dev dependencies, and peer dependencies.

SCALING

NAMING STANDARDS

NAVIGATING CODE
- Your `finds` (etc.) will search the entire project structure. This can be a good thing (finding & replacing an outdated method that is used in many packages) or a bad thing.

UNIT TESTING
- Lerna allows all test scripts to be run at once, or you can specify which packages you want to run tests for. Each package defines its own test script in the package.json and defines its own unit tests.

DEPLOYMENT
- GitHub vs GitLab?
    - GitHub:
        - Currently being used
    - GitLab:
        - CI/CD pipeline
        - Private Docker registry
- Deploying packages separately... Is this necessary?
    - For separate projects we probably want separate repos VS for separate modules we can use a monorepo
- Likely will not actually be deploying anything for a component/module library — packages get published, then imported into a host app, host app is deployed
    - Need to redeploy the "parent" or "host" application in order to get the updated module (via NPM or direct Github url)

PROJECT COUPLING & HOW TO PREVENT IT

