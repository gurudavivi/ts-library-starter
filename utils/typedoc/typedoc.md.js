module.exports = {
  entryPoints: ['../src/index.ts'],
  out: '../docs',
  categorizeByGroup: true,
  name: '@guru/fp',
  includeVersion: true,
  sort: ['alphabetical'],
  plugin: ['typedoc-plugin-markdown'],
  namedAnchors: true,
  cleanOutputDir: false,
};
