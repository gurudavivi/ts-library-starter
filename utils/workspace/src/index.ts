import { Command } from 'commander';
import { execa } from 'execa';
import fs from 'fs-extra';
import f from 'lodash/fp';
import { join } from 'path';
import { stdout } from 'process';

import { CLI } from './utils/cli';

const { log } = console;
import clean from './clean';

const program = new CLI('workspace');

program
  .name('workspace')
  .description('Create a config file')
  .version('0.2.1')
  .alias('ws');

program.addCommand(clean());

program
  .command('help', { isDefault: true })
  .name('help')
  .description('show context help')
  .action(async () => {
    program.help();
  });

program
  .parseAsync()
  .then(() => {
    setTimeout(() => {
      process.exit(0);
    }, 100);
  })
  .catch((e) => {
    program.error(e.message);
    process.exit(1);
  });
