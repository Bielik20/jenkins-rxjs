<p align="center">
  <img src="https://user-images.githubusercontent.com/13436218/62941457-5b10f600-bdd6-11e9-9daa-0903d6744ee1.png" width="300" alt="jenkins-rxjs">
</p>

# jenkins-rxjs

> A library for executing Jenkins Jobs with RxJs listeners

[![Build Status](https://travis-ci.org/Bielik20/jenkins-rxjs.svg?branch=master)](https://travis-ci.org/Bielik20/jenkins-rxjs)
[![NPM version](https://img.shields.io/npm/v/jenkins-rxjs.svg)](https://www.npmjs.com/package/jenkins-rxjs)
![Downloads](https://img.shields.io/npm/dm/jenkins-rxjs.svg)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

---

## ✨ Features

- runs entire jenkins job process
- returns stream of observables

## 🔧 Installation

```sh
yarn add jenkins jenkins-rxjs
```

## 🎬 Getting started

Let's demonstrate simple usage with an example:

```ts
import * as createJenkins from 'jenkins';
import { JenkinsRxJs } from 'jenkins-rxjs';

const jenkinsPromisified = createJenkins({
  baseUrl: myJenkinsUrl,
  promisify: true,
});
const jenkinsRxJs = new JenkinsRxJs(jenkinsPromisified);

jenkinsRxJs.run(jobBuildOptions).subscribe(console.log);
```

## 🎭 Examples

Go checkout [adeng-jenkins-cli](https://github.com/Bielik20/adeng-jenkins-cli) and [jenkins-jobs-runner](https://github.com/Bielik20/jenkins-jobs-runner) for examples of integration.

## 📜 API

Full API can be found [here](https://bielik20.github.io/jenkins-rxjs/).

### 🕵️ Troubleshooting

## 🥂 License

[MIT](./LICENSE.md) as always
