var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', function(req, res, next) {
    res.render('search', { title: 'Random Gifs' }); //este "title" es lo que se imprimi dentro del ejs!
  });

module.exports = router;
