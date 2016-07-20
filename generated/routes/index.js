var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/with-parms/:id', function(req, res, next) {
  res.render('with-parms', { id: req.params.id, name: req.query.secondary});
})

module.exports = router;
