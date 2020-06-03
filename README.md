# fx94

Fork of [electron-boilerplate](https://github.com/sindresorhus/electron-boilerplate) with the following changes:

- Rewritten in TypeScript
- Bundles and compiles renderer process code with [rollup](https://github.com/rollup/rollup)
- Lints files [eslint-typescript](https://github.com/typescript-eslint/typescript-eslint)
- Watches source files in dev mode (no auto refresh, you have to do a manual refresh in electron)
- Added lit-element
- Migrated `package.json` scripts to [daizong](https://github.com/mgenware/daizong)

### Usage

Start dev build and watch files:

```sh
yarn r dev
```

Lint files:

```sh
yarn r lint
```
