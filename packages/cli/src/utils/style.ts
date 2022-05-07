import chalk from 'chalk';
import { log } from 'console';

const PALLETE = {
  TEXT: {
    PRIMARY: '#ffffff',
    SECUNDARY: '#cccccc',
    WARN: '#fff70f',
    INFO: '#2ac8e8',
    ERROR: '#ff1212',
    DONE: '#02e84b',
    FAIL: '#ff0505',
  },
};

const hex = (hex: string) => chalk.hex(hex);

export const text = {
  log: (...args: string[]) => log(hex(PALLETE.TEXT.PRIMARY)(...args)),
  verbose: (...args: string[]) => log(hex(PALLETE.TEXT.SECUNDARY)(...args)),
  info: (...args: string[]) => log(hex(PALLETE.TEXT.INFO)(...args)),
  warn: (...args: string[]) => log(hex(PALLETE.TEXT.WARN)(...args)),
  error: (...args: string[]) => log(hex(PALLETE.TEXT.ERROR)(...args)),
  done: (...args: string[]) => log(hex(PALLETE.TEXT.DONE)(...args)),
  fail: (...args: string[]) => log(hex(PALLETE.TEXT.FAIL)(...args)),
};

export const showColorPallete = () => {
  log(hex(PALLETE.TEXT.PRIMARY)('PRIMARY primary'));
  log(hex(PALLETE.TEXT.SECUNDARY)('SECUNDARY secundary'));
  log(hex(PALLETE.TEXT.INFO)('INFO info'));
  log(hex(PALLETE.TEXT.WARN)('WARN warn'));
  log(hex(PALLETE.TEXT.ERROR)('ERROR error'));
  log(hex(PALLETE.TEXT.DONE)('DONE done'));
  log(hex(PALLETE.TEXT.FAIL)('FAIL primary'));

  log();
  log(hex(PALLETE.TEXT.PRIMARY).bold('PRIMARY primary'));
  log(hex(PALLETE.TEXT.SECUNDARY).bold('SECUNDARY secundary'));
  log(hex(PALLETE.TEXT.INFO).bold('INFO info'));
  log(hex(PALLETE.TEXT.WARN).bold('WARN warn'));
  log(hex(PALLETE.TEXT.ERROR).bold('ERROR error'));
  log(hex(PALLETE.TEXT.DONE).bold('DONE done'));
  log(hex(PALLETE.TEXT.FAIL).bold('FAIL primary'));
};
