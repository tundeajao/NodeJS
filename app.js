const express = require('express');
const app = express();
app.set('view engine', 'ejs');
//app.set('views', 'myviews');

app.listen(3000);

app.use((req, res)=> {
    console.log('New Request Made');
    console.log('Host: ', req.hostname);
    console.log('Path: ', req.path);
    console.log('Method: ', req.method);
});

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