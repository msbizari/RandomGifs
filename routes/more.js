var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/more', function(req, res, next) {
    res.render('more', { title: 'Random Gifs' }); //este "title" es lo que se imprimi dentro del ejs!
  });

module.exports = router;
