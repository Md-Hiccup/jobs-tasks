var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
// var Trix = require('../models/Trix');

router.get('/', function(req, res, next){
    res.json('In Trix Get Method');
})

router.post('/', function(req, res, next){
    res.json('In Trix Post Method')
})

module.exports = router;