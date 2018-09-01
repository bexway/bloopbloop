var path = require('path');
var express = require("express");
var fs = require('fs');

var router = express.Router();

router.use(function(req, res) {
  res.render("home");
});

module.exports = router;