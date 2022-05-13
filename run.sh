#!/bin/bash



pnpm add -D typescript ts-node typesync @types/node ts-toolbelt type-fest tslib

pnpm add -D prettier eslint @types/eslint @types/prettier @typescript-eslint/eslint-plugin \\
            @typescript-eslint/parser @types/eslint-plugin-prettier eslint-config-prettier \\
            eslint-config-xo eslint-plugin-jest eslint-plugin-prettier eslint-plugin-simple-import-sort

pnpm add -D jest @types/jest ts-jest

pnpm add -D release-it auto-changelog 

pnpm add -D commitizen cz-conventional-changelog 

pnpm add -D syncpack  rimraf @types/rimraf @faker-js/faker 

pnpm add -D typedoc



pnpm add lodash
pnpm add -D @types/lodash
  
# pnpm add cosmiconfig bluebird fs-extra core.js
