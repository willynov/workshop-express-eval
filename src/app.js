const express = require('express')
const app = express();
var fs = require('fs'); 
app.get('/bingo', function(req, res) {
    fs.readFile(__dirname + '/numbers.txt', function (err, data) {
        //il faut que le fichier ne termine pas par un retour chariot sinon data mettra une virgule à la fin
        res.end(data.toString().split(/\r/).join(',').replace(/\n|\r/g,''));
    });
})

module.exports = app;