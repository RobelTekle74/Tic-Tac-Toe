const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

app.get('/', function (req, res) {
    res.render('home');
});

function run() {
    app.listen(3000);
    console.log('Listening on port 3000');
}

run();