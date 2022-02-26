const express = require('express');
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
const app = express();

app.use(express.static("src/public"));

// HTTP logger
app.use(morgan('comined'));

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set("views", "src/resources/views");

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/coming-soon', (req, res) => {
  res.render('COMING-SOON');
});

app.listen(3000);