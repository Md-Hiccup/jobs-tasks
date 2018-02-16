var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trix = require('../models/Trix');

/*  To GET editor   */
router.get('/', function(req, res, next){
    console.log("in trix get method");
    res.json('In Trix input');
    // Trix.find(function(err, prod){
    //     if(err) return next(err);
    //     res.json(prod);
    // });
})

/*  To POST content */
router.post('/', function(req, res, next){
    console.log('in trix post method');
    res.json('In Trix output')
})

module.exports = router;