import { Command } from 'commander';
import { execa } from 'execa';
import fs from 'fs-extra';
import f from 'lodash/fp';
import { join } from 'path';
import { stdout } from 'process';

import { CLI } from './utils/cli';

const { log } = console;

const command = new CLI('clean');

command
  .alias('c')
  .description('clean all generated files')
  .option('-a, --all', 'clean all workspace generated files')
  .option('-t, --target <directory>', 'target directory')
  .action(async (options) => {
    log(`~ options`, options);

    execa('echo', ['unicorns']).stdout?.pipe(stdout);
  });

export default () => command;
