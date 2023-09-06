#!/usr/bin/env node

import { program, Command } from 'commander';
import { init } from '../commands/init';
import { generate } from '../commands/generate';

program
  .name('easy-mvc')
  .version('0.0.1')
  .description('Easy MVC CLI')

program
  .command('init')
  .action(() => {
    try {
      console.log('Initializing Easy MVC...')
      init();
    } catch (error) {
      console.error('This is the error', error);
    }
});

program
  .command('generate')
  .description('Generate controller and service files')
  .argument('<name>', 'Name of the controller and service')
  .alias('g')
  .action((name) => {
    try {
      if (!name || typeof name !== 'string') {
        throw new Error('Name is required');
      }
      generate(name);
    } catch (error) {
      console.error('erro aqui', error);
    }
});


program.parse(process.argv);