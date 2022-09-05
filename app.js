const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://netninja:12May2006@cluster0.g4o2u.mongodb.net/node-tuts?retryWrites=true&w=majority';

const app = express();
app.set('view engine', 'ejs');
//app.set('views', 'myviews');

mongoose.connect(dbURI);

app.listen(3000);
app.use(express.static('public'));
app.use(morgan('tiny'));

//index/home
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'}
      ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create A New Blog'});
});

//404 Request
app.use((req, res)=> {
    //res.status(404).sendFile('./views/404.html', {root:__dirname});
    res.status(404).render('404', {title: '404'});
});