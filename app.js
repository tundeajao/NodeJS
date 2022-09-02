const express = require('express');
const app = express();
app.set('view engine', 'ejs');
//app.set('views', 'myviews');

app.listen(3000);

app.get('/', (req, res) => {
    //res.sendFile('./views/index.html', {root:__dirname});
    res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) => {
    //res.sendFile('./views/about.html', {root:__dirname});
    res.render('about', {title: 'About'});
});

app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create A New Blog'});
});

app.use((req, res)=> {
    //res.status(404).sendFile('./views/404.html', {root:__dirname});
    res.status(404).render('404', {title: '404'});
});