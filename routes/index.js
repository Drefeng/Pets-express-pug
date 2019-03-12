var express = require('express');
var router = express.Router();

const petData = require('../data/pet.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// JSON PET DETAILS
router.get('/data', function(req, res, next) {
  res.json(petData);
});


// INFO
router.get('/info', function(req, res, next) {
  res.render('info',  {title : 'Info',
    data: petData});
});

// PET PICTURES
router.get('/pictures', function(req, res, next) {

  res.render('picture', );
});


module.exports = router;
