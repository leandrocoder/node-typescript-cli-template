# node-typescript-cli-template

A comprehensive template for building interactive Command Line Interface (CLI) applications using Node.js and TypeScript. This template demonstrates best practices for creating CLI tools with user input, option selection, and interactive prompts.

## Features

- 🚀 **TypeScript Support**: Fully typed with TypeScript for better development experience
- 🎨 **Colored Output**: Beautiful terminal output using Chalk
- 📝 **Interactive Prompts**: User-friendly prompts with Inquirer.js
- ⚙️ **Command Arguments**: Parse command-line arguments with Commander.js
- 🔧 **Multiple Input Types**: Support for text input, lists, checkboxes, confirmations, numbers, and password fields
- 📦 **Easy to Build**: Simple build process with TypeScript compiler

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/leandrocoder/node-typescript-cli-template.git
cd node-typescript-cli-template
npm install
```

## Usage

### Development

Run the CLI in development mode (without building):

```bash
npm run dev
```

### Build

Build the TypeScript project:

```bash
npm run build
```

### Run

After building, run the compiled CLI:

```bash
npm start
# or
node dist/index.js
```

## Available Commands

### 1. Interactive Mode

Run the interactive mode with multiple prompts:

```bash
node dist/index.js interactive
```

This command demonstrates:
- Text input (name)
- List selection (favorite color)
- Checkbox selection (hobbies)
- Confirmation prompt (newsletter subscription)
- Number input (age)

### 2. Greet Command

Simple greeting command with options:

```bash
# Basic greeting
node dist/index.js greet

# Greet with a name
node dist/index.js greet --name John

# Greet with uppercase
node dist/index.js greet --name John --uppercase
```

Options:
- `-n, --name <name>`: Name to greet (default: "World")
- `-u, --uppercase`: Output in uppercase

### 3. Setup Wizard

Run a configuration setup wizard:

```bash
node dist/index.js setup
```

This command demonstrates:
- Project name input
- Environment selection (Development, Staging, Production)
- Port number input with validation
- Password input (hidden)

### Help

Display help information:

```bash
node dist/index.js --help
node dist/index.js <command> --help
```

## Project Structure

```
node-typescript-cli-template/
├── src/
│   └── index.ts          # Main CLI application
├── dist/                 # Compiled JavaScript (generated)
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Dependencies

### Production Dependencies
- **chalk**: Terminal string styling
- **commander**: Command-line interface solution
- **inquirer**: Interactive command line user interfaces

### Development Dependencies
- **typescript**: TypeScript compiler
- **ts-node**: TypeScript execution for Node.js
- **@types/node**: TypeScript definitions for Node.js
- **@types/inquirer**: TypeScript definitions for Inquirer

## Customization

### Adding New Commands

To add a new command, edit `src/index.ts` and add a new command using Commander:

```typescript
program
  .command('mycommand')
  .description('My custom command')
  .action(() => {
    // Your command logic here
  });
```

### Adding New Prompts

To add new interactive prompts, use Inquirer's prompt method:

```typescript
const answers = await inquirer.prompt([
  {
    type: 'input',
    name: 'myField',
    message: 'Enter your value:',
  },
]);
```

Supported prompt types:
- `input`: Text input
- `number`: Numeric input
- `confirm`: Yes/no confirmation
- `list`: Single selection from a list
- `checkbox`: Multiple selections from a list
- `password`: Hidden text input

## Scripts

- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the compiled CLI application
- `npm run dev`: Run the CLI in development mode using ts-node
- `npm run clean`: Remove the compiled dist directory

## License

ISC

## Contributing

Feel free to use this template as a starting point for your own CLI applications. Customize it to fit your needs!
