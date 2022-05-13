#!/bin/bash

pnpm remove lodash
pnpm remove typescript ts-node typesync @types/node ts-toolbelt type-fest tslib
pnpm remove @types/lodash
pnpm remove prettier eslint @types/eslint @types/prettier
pnpm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser
pnpm remove eslint-config-prettier eslint-config-xo eslint-plugin-jest eslint-plugin-prettier eslint-plugin-simple-import-sort
pnpm remove jest @types/jest expect-more-jest
pnpm remove release-it commitizen cz-conventional-changelog syncpack @faker-js/faker rimraf syncpack auto-changelog
pnpm remove @types/rimraf @types/eslint-plugin-prettier

pnpm add cosmiconfig
