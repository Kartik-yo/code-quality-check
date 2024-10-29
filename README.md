# Code Quality Checker with ESLint

This repository is a small project to demonstrate code quality checks using [ESLint](https://eslint.org/), a static analysis tool for identifying and fixing problematic patterns in JavaScript code. It includes basic configurations, sample code, and a GitHub Actions workflow to automate the linting process on every push.

## Project Structure
```
code-quality-checker/ 
├── index.js # A sample JavaScript file with intentional lint errors 
├── eslint.config.mjs # ESLint configuration file  
└── .github/ 
       └── workflows/ 
              └── eslint.yml # GitHub Actions workflow file for automated linting
```
## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Kartik-yo/code-quality-check.git
    cd code-quality-check
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run ESLint**:
    ```bash
    npm run lint
    ```

## Configuration

- The `.eslintrc.json` file contains ESLint rules and environment settings.
- You can adjust these settings to match your coding standards or team requirements. The initial configuration includes:
  - **Indentation**: 2 spaces
  - **Quotes**: Single quotes for strings
  - **Semicolons**: Required at the end of each statement

## Usage

To check the code quality of JavaScript files, run:

```bash
npm run lint
```
