
I Room
=========================================

This repository contains server & client side code using `TypeScript` language

# Visuals

![image](https://github.com/IreneHey/I-Room/blob/b798684305397ec27d9cf5be98bb5b27c37757c2/enter.png)

![image](https://github.com/IreneHey/I-Room/blob/b798684305397ec27d9cf5be98bb5b27c37757c2/chat.png)

# Running Server and Client locally
## Prerequisites

First, ensure you have the following installed:

1. NodeJS - Download and Install latest version of Node: [NodeJS](https://nodejs.org)
2. Git - Download and Install [Git](https://git-scm.com)
3. Angular CLI - Install Command Line Interface for Angular [https://cli.angular.io/](https://cli.angular.io/)

After that, use `Git bash` to run all commands if you are on Windows platform.

## Clone repository

In order to start the project use:

```bash
$ git clone https://github.com/IreneHey/I-Room.git
$ cd I-Room
```

## Run Server

To run server locally, just install dependencies and run `gulp` task to create a build:

```bash
$ cd server
$ npm install -g gulp-cli
$ npm install
$ gulp build
$ npm start
```

The `socket.io` server will be running on port `8080`

## Run Angular Client

Open other command line window and run following commands:

```bash
$ cd client
$ npm install
$ ng serve
```

*If you hit an `ERR_OSSL_EVP_UNSUPPORTED` error in your application with `Node.js 17`, it’s likely that your application or a module you’re using is attempting to use an algorithm or key size which is no longer allowed by default with OpenSSL 3.0. A new command-line option, `--openssl-legacy-provider`, has been added to revert to the legacy provider as a temporary workaround for these tightened restrictions.

```bash
$ export NODE_OPTIONS=--openssl-legacy-provider
```

Now open your browser in following URL: [http://localhost:4200](http://localhost:4200/)


