# Goals
1. Introduction to TDD
2. Follow Red->Green->Refactor
3. Introduce the minimum amount of code to make the test pass
3. Implement strong-style pairing with navigator/driver
4. Introduce ZOMBIES (maybe not needed for this as the test cases are very straight-forward)
5. Smaller steps
6. Proper Abstracting/Remove Duplication
7. 15 minute retrospective at end of session 

# Description

Direct link to Kata Description: https://kata-log.rocks/roman-numerals-kata

Write a method String convert(int) that takes a number and converts it to the according String representation.

Examples
```
    1 ➔ I
    2 ➔ II
    3 ➔ III
    4 ➔ IV
    5 ➔ V
    9 ➔ IX
    21 ➔ XXI
    50 ➔ L
    100 ➔ C
    500 ➔ D
    1000 ➔ M
```

# TypeScript Jest boilerplate

This boilerplate uses TypeScript and Jest as testing framework.
Test files should are picked based on their name, here's a few examples that will get picked up by Jest:

- `MyClass.test.ts`
- `MyJavaScriptModule.test.js`
- `MyComponent.test.tsx`
- `SubFolder/MyClass.test.ts`

You can customize the regexp and jest configuration by editing the `package.json` file.

## Installing dependencies

```bash
# Get Yarn
npm install -g yarn

# Install dependencies
yarn install
```

## Running tests

```bash
# Run tests once
yarn test

# Run tests with Jest-CLI custom arguments (https://jestjs.io/docs/en/cli.html)
yarn test --clearCache --debug

# Run tests for a specific file
yarn test MyFile.test.ts
```

A few other NPM scripts are provided for convenience, they all support custom arguments as described above.

```
# Run tests once with coverage
# Coverage report available in ./coverage/index.html
yarn test:cover

# Run all tests in watch mode without coverage
yarn test:watch

# Run the tests with watch mode only for files changed since the last Git commit
yarn test:changed

# Run tests for CI environment (optimized for TravisCI)
yarn test:ci
```