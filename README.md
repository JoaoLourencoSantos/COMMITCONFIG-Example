# Config Commitlint

## Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
## For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

## Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# Config Husky integration

## Install Husky v6
npm install husky --save-dev
## or
yarn add husky --dev

## Activate hooks
npx husky install
## or
yarn husky install

## Add hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

# Commit definition

## Model

type(scope?): subject
body? - optional 
footer? - optional

## Types

* build
* ci
* chore
* docs
* feat
* fix
* perf
* refactor
* revert
* style
* test
