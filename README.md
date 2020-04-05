## NodeJS from Frontend Masters

### Introduction

- use `nvm`
- node is pure logic

### Node.js modules

- browser has window, node has global
- [Can I use](https://caniuse.com/) to review fragmentation
- node is versioned, no fragmentation like browser
- broswer optional es6 modules
- node required modules (commonjs +)
- Async
- no browser based APIs
- globals _few important ones_
  - `process` information about the enviroment the program is running in
  - `require` function to find and use modules in current module (import)
  - `__dirname` the current directory path
  - `module` information about the current module, methods for making module consumable (export)
  - `global` like window, almost NEVER use this
- modules
  - encapsulated or packaged code, must be specifically ask for and only gives you what is set
  - modules in nodejs are CommonJs
  - ESM (ecmascript modules) are the new standard
  - regular code, just export it
  - must be explicit what you export using `module.exports = {}` for many, for single `module.export = function`
  - see node-modules directory

### Internal modules & npm

### Asynchronous node

### Debugging & testing

### Publishing & deploying
