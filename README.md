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

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

# Commitzen

## Install

- yarn add commitizen -D

- yarn commitizen init cz-conventional-changelog --yarn --dev --exact

## Config debug with Nodemon and TS

```
touch nodemon.json

```

```
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/**/node_modules"],
  "verbose": true,
  "execMap": { // [A]
    "ts": "node --require ts-node/register"
  },
  "watch": ["src/"],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json,ts"
}
```

```
"scripts": {
  // ...
  "dev:debug": "nodemon --inspect src/entry.ts"
}
```
