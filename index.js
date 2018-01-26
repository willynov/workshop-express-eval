let chalk = require('chalk');

const app = require('./src/app');

// port
const port = process.argv[2] || 3000

// start server here
console.log(chalk.green('Hello web server'));
app.listen(port)
