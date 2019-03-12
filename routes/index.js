var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// JSON PET DETAILS
router.get('/data', function(req, res, next) {
  res.render('data', { title: 'data' });
});


// INFO
router.get('/info', function(req, res, next) {
  res.render('info', { title: 'dogo' });
});

// PET PICTURES
router.get('/pictures', function(req, res, next) {
  res.render('picture', { title: 'pets' });
});


module.exports = router;
