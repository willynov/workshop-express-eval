# workshop-express-eval

Workshop to evaluate students on the basics of framework Express on Node.js.

## Commands

### Installation

Please install dependencies first.

	npm install

### Tests & lint

To launch the tests.

	npm test

To lint sources.

	npm run lint

### Start

To start program.

	npm start

## Exercises

### Exercise 1

Your program must use the framework Express into 2 files **_src/app.js_** and **_index.js_**.

- **_src/app.js_** declare your Express web server.

- **_index.js_** start your Express web server on listen him on a port.

You should be able to start a web server on port 3000 by default with command :

```sh
node index.js
```

After finish this exercise, please commit the files appropriated with message "Exercise 1".

### Exercise 2

You should be able to start the web server on a port specified with the command line interface, for example 4400 :

```sh
node index.js 4400
```

After finish this exercise, please commit the files appropriated with message "Exercise 2".

### Exercise 3

You should be able to request (with GET) the web server (port 4400) on URL /bingo and it should return you 'Bingo'.

After finish this exercise, please commit the files appropriated with message "Exercise 3".