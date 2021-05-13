var express = require('express');
var router = express.Router();
const DogController = require('../controllers/dogController');
const IdealController = require('../controllers/idealController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/featureDogs', DogController.getFeatureDogs);
router.get('/idealDogs', IdealController.getIdealDogs);
// router.get('/likeDogs', DogController.)

module.exports = router;
