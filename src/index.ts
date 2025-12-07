#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';

const program = new Command();

// Define the CLI program
program
  .name('cli-template')
  .description('A TypeScript CLI template with interactive prompts')
  .version('1.0.0');

// Interactive mode command
program
  .command('interactive')
  .description('Run interactive mode with prompts')
  .action(async () => {
    console.log(chalk.blue.bold('\n🚀 Welcome to the CLI Template!\n'));

    try {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
          default: 'User',
        },
        {
          type: 'list',
          name: 'favoriteColor',
          message: 'What is your favorite color?',
          choices: ['Red', 'Blue', 'Green', 'Yellow', 'Purple'],
        },
        {
          type: 'checkbox',
          name: 'hobbies',
          message: 'Select your hobbies:',
          choices: [
            'Reading',
            'Coding',
            'Gaming',
            'Sports',
            'Music',
            'Traveling',
          ],
        },
        {
          type: 'confirm',
          name: 'subscribe',
          message: 'Would you like to subscribe to our newsletter?',
          default: false,
        },
        {
          type: 'number',
          name: 'age',
          message: 'What is your age?',
          default: 25,
        },
      ]);

      // Display the collected information
      console.log(chalk.green.bold('\n✅ Thank you for your input!\n'));
      console.log(chalk.cyan('Here is your information:'));
      console.log(chalk.white(`  Name: ${chalk.yellow(answers.name)}`));
      console.log(
        chalk.white(`  Favorite Color: ${chalk.yellow(answers.favoriteColor)}`)
      );
      console.log(
        chalk.white(
          `  Hobbies: ${chalk.yellow(answers.hobbies.join(', ') || 'None selected')}`
        )
      );
      console.log(
        chalk.white(
          `  Newsletter: ${chalk.yellow(answers.subscribe ? 'Yes' : 'No')}`
        )
      );
      console.log(chalk.white(`  Age: ${chalk.yellow(answers.age)}`));
      console.log();
    } catch (error) {
      if (error instanceof Error) {
        console.error(chalk.red('Error:', error.message));
      }
      process.exit(1);
    }
  });

// Simple greeting command with options
program
  .command('greet')
  .description('Greet a user')
  .option('-n, --name <name>', 'Name to greet', 'World')
  .option('-u, --uppercase', 'Output in uppercase')
  .action((options) => {
    let message = `Hello, ${options.name}!`;
    if (options.uppercase) {
      message = message.toUpperCase();
    }
    console.log(chalk.green(message));
  });

// Configuration wizard
program
  .command('setup')
  .description('Run setup wizard')
  .action(async () => {
    console.log(chalk.blue.bold('\n⚙️  Setup Wizard\n'));

    try {
      const config = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'Project name:',
          default: 'my-project',
        },
        {
          type: 'list',
          name: 'environment',
          message: 'Select environment:',
          choices: ['Development', 'Staging', 'Production'],
        },
        {
          type: 'input',
          name: 'port',
          message: 'Port number:',
          default: '3000',
          validate: (input: string) => {
            const port = parseInt(input, 10);
            if (isNaN(port) || port < 1 || port > 65535) {
              return 'Please enter a valid port number (1-65535)';
            }
            return true;
          },
        },
        {
          type: 'password',
          name: 'apiKey',
          message: 'API Key (hidden):',
          mask: '*',
        },
      ]);

      console.log(chalk.green.bold('\n✅ Configuration saved!\n'));
      console.log(chalk.cyan('Configuration:'));
      console.log(
        chalk.white(`  Project: ${chalk.yellow(config.projectName)}`)
      );
      console.log(
        chalk.white(`  Environment: ${chalk.yellow(config.environment)}`)
      );
      console.log(chalk.white(`  Port: ${chalk.yellow(config.port)}`));
      console.log(
        chalk.white(`  API Key: ${chalk.yellow('*'.repeat(config.apiKey.length))}`)
      );
      console.log();
    } catch (error) {
      if (error instanceof Error) {
        console.error(chalk.red('Error:', error.message));
      }
      process.exit(1);
    }
  });

// Parse command line arguments
program.parse(process.argv);

// Show help if no command is provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
