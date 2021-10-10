var express = require('express');
var router = express.Router();

var maincontroller = require('../controllers/mainController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Random Gifs' }); //este "title" es lo que se imprimi dentro del ejs!
});

router.get('/more', maincontroller.more);


module.exports = router;
