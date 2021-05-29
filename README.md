# Angular + NestJS Full-Stack Monorepo Starterkit

<p align="left">
<img alt="License MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
<img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg" />
<img alt="Contributions Welcome" src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" />

### Motivation :star:

Setting up boiler plates when starting new projects is tedious sometimes and I often found myself setting it up from scratch 🥱

Hence I made this starterkit following some of the best patterns and practices I learnt from some of the larger codebase and fantastic developers I've had a chance to work with 🙌

The main purpose of this repository is to provide a scalable monorepo starterkit which follows good architecture patterns (might be opinionated) and code decoupling which becomes significant as the project grows or new developers are onboarded

This project is inspired by [Karan Pratap Singh's Full-Stack Starterkit](https://github.com/karanpratapsingh/fullstack-starterkit)

#### Features

- **Yarn Workspaces Monorepo**
  This project is structured to maximise dependency hoisting using Yarn Workspaces

- **All in Typescript**
  Because TypeScript is awesome, and types are important 😃

- **Eslint + Prettier**
  This project uses [Eslint](https://eslint.org/) with [Prettier](https://prettier.io/) for beautiful & well linted code free of bugs & code smells

- **Husky + Lint-Staged**
  Project uses automation powered by [Husky](https://typicode.github.io/husky/#/) & [Lint-Staged](https://github.com/okonet/lint-staged#readme) in order to prevent you from pushing ugly code 😁

**Please leave a :star: as motivation if you liked the idea :smile:**

### :rocket: Technologies Used

<p align="left">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt='Typescript' width='auto' height='48px'>
<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt='Angular' width='auto'  height='48px'>
<img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt='NestJS' width='auto'  height='48px'>
<img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt='Eslint' width='auto'  height='48px'>
<img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt='Prettier' width='auto'  height='48px'>

### 📖 Contents

- [Architecture](#architecture)
  - [Server](#server)
  - [Web](#web)
- [Getting started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [License](#license)

### 🏭 <a id="architecture">Architecture</a>

The project is structured as a monorepo with the help of Yarn Workspaces. All the development dependencies are present in the <i>tools</i> package & are hoisted to the root of the project, while runtime dependencies for individual projects are there in respective projects.

```
monorepo
├── .husky
├── packages
│   ├── common          <--- Common package for shared code
│   ├── server          <--- NestJS application
│   ├── tools           <--- All the development dependencies
│   └── web             <--- Angular application
├── .eslintignore
├── .eslintrc.js
├── .prettierignore
├── .prettierrc.json
├── CODE_OF_CONDUCT.md
├── LICENSE
├── README.md
├── tsconfig.json
├── yarn.lock
└── package.json
```

#### <a id="server">Server</a>

Here is the folder structure for `server`, it uses [NestJS](https://nestjs.com/) for the backend services, providing API endpoints for the front-end application.

```
server
├── src
├── test
├── nest-cli.json
├── tsconfig.build.json
├── tsconfig.json
└── package.json
```

#### <a id='web'>Web</a>

Here is the folder structure for `web`, it is a standard Angular CLI produced [Angular](https://angular.io/) application that interfaces with back-end's API

```
web
├── e2e
│   ├── src
│   ├── protractor.config.js
│   └── tsconfig.json
├── src
├── .browserslistrc
├── .editorconfig
├── angular.json
├── karma.config.js
├── tsconfig.app.json
├── tsconfig.spec.json
├── tsconfig.json
└── package.json
```

### 🏃 <a id="getting-started">Getting Started</a>

**Install dependencies**

I recommend using `yarn` instead of `npm` as this project heavily uses `yarn workspaces`. All the project dependencies are hoisted to the root & will be automatically downloaded. A prepare script will build common's package required by both `web` & `server` along with setting up husky's pre-commit hook.

```
yarn
```

**Running server**

```
yarn start:server
```

**Running web**

```
yarn start:web
```

<i>
Feel free to open a new issue if you're facing any problem 🙋
</i>

### 👏 <a id="how-to-contribute">How to Contribute</a>

Contributions are welcome as always, before submitting a new PR please make sure to open a new
issue so community members can discuss.

Additionally you might find existing open issues which can helps with improvements.

This project follows standard [code of conduct](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### 📄 <a id="license">License</a>

This project is MIT licensed, as found in the [LICENSE](/LICENSE)

<p>
  <p  style="margin: 0">  
    Built and maintained with 🌮 by <a href="https://www.linkedin.com/in/shubham1chawla/">Shubham</a>
  </p>
</p>
