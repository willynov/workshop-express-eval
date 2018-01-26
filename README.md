# workshop-express-eval

Workshop to evaluate students on the basics of framework Express on Node.js.

## Commands

### Installation

Please install dependencies first.

	npm install

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

### Exercise 4

Now when you request (with GET) the web server (port 4400) on URL /bingo, it should return you a serie of numbers separated by comma '31, 10, 80, 44, 66'.

These numbers are written in the file numbers.txt. So your web server should read this file and return the values.

:point_right: function[`split`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split) should help you.

:point_right: function[`join`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join) should help you.

After finish this exercise, please commit the files appropriated with message "Exercise 4".

### Exercise 5

Now when you request (with GET) the web server (port 4400) on URL /bingo, you should be able to add parameter to your request and the server return an appropriate response:

- /bingo : 'The bingo game is already started and known numbers are 31, 10, 80, 44, 66'

- /bingo?mynumbers=12,44,66 : 'The bingo game is already started, sorry your numbers doesn't match with known numbers 31, 10, 80, 44, 66 ; so you can not say Bingo'

- /bingo?mynumbers=80,66,44,31,10 : 'Bingo'

After finish this exercise, please commit the files appropriated with message "Exercise 5".