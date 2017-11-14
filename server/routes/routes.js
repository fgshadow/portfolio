const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        title:  'Home',
        bundle: './dist/home.bundle.js',
        stylesheet: './static/css/home.css'
    });
});

router.get('/about', function(req, res) {
    res.render('index', {
        title:  'About',
        bundle: './dist/about.bundle.js',
        stylesheet: './static/css/style.css'
    });
});

router.get('/projects', function(req, res) {
    res.render('index', {
        title:  'Projects',
        bundle: './dist/projects.bundle.js',
        stylesheet: './static/css/style.css'
    });
});

router.get('/projects/hardware', function(req, res) {
    res.render('index', {
        title:  'Hardware Projects',
        bundle: '../dist/hardware.bundle.js',
        stylesheet: '../static/css/style.css'
    });
});

router.get('/projects/software', function(req, res) {
    res.render('index', {
        title:  'Software Projects',
        bundle: '../dist/software.bundle.js',
        stylesheet: '../static/css/style.css'
    });
});

router.get('/contact', function(req, res) {
    res.render('index', {
        title:  'Contact',
        bundle: './dist/contact.bundle.js',
        stylesheet: './static/css/style.css'
    });
});

router.post('/submit-success', function(req, res) {
    res.send('Form successfully submitted');
});

module.exports = router;
