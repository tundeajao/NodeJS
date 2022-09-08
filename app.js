const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://netninja:12May2006@cluster0.g4o2u.mongodb.net/node-tuts?retryWrites=true&w=majority';
const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.set('view engine', 'ejs');

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.log9(err));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

//index/home
app.get('/', (req, res) => {
    res.redirect('blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

app.use(blogRoutes);

//404 Request
app.use((req, res)=> {
    //res.status(404).sendFile('./views/404.html', {root:__dirname});
    res.status(404).render('404', {title: '404'});
});