const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        title:  'Home',
        bundle: './dist/home.bundle.js'
    });
});

router.get('/about', function(req, res) {
    res.render('index', {
        title:  'About',
        bundle: './dist/about.bundle.js'
    });
});

router.get('/projects', function(req, res) {
    res.render('index', {
        title:  'Projects',
        bundle: './dist/projects.bundle.js'
    });
});

router.get('/projects/hardware', function(req, res) {
    res.render('index', {
        title:  'Hardware Projects',
        bundle: '../dist/hardware.bundle.js'
    });
});

router.get('/projects/software', function(req, res) {
    res.render('index', {
        title:  'Software Projects',
        bundle: '../dist/software.bundle.js'
    });
});

router.get('/contact', function(req, res) {
    res.render('index', {
        title:  'Contact',
        bundle: './dist/contact.bundle.js'
    });
});

router.post('/submit-success', function(req, res) {
    res.send('Form successfully submitted');
});

module.exports = router;
