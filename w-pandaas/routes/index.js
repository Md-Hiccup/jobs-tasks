var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Dashboard = require('../models/Dashboard');

var data = [
    { title: "Blog Post", caption: "400 - 500 Words"},
    { title: "White Paper", caption: "2500 - 3000 Words"},
    { title: "Website Content", caption: "250 - 350 Words"},
    { title: "Press Release", caption: "350 -450 Words"},
    { title: "Product Description", caption: "150 - 200 Words"},
    { title: "Social Media", caption: "30 -35 Words"},
    { title: "Book/Story Writing", caption: "500 -1000 Words"},
    { title: "Video Script", caption: "1000 - 4000 Words"},
    { title: "Newsletter", caption: "400 - 500 Words"},
    { title: "Brochure Content", caption: "850 - 1000 Words"},
    { title: "Custom Content", caption: "850 - 1000 Words"},
    { title: "Contest", caption: "10 -20 Words"},
    { title: "Order from Template", caption: "You can give an order from template"},
    { title: "Order via Spreadsheets", caption: "It's useful when giving Bulk Orders"}
]

/*  To GET all The Dashboard data    */
router.get('/', function(req, res, next){
    // res.json('In Dashboard');
    Dashboard.find(function(err, prod){
        if(err) return next(err);
        res.json(prod);
    });
})
/*  To Insert multiple data from 'data' in Dashboard */
router.post('/post', function(req, res, next){
    Dashboard.collection.insert(post, function(err, docs){
        if(err) return next(err);
        console.log("Multiple Documents inserted to Collection");
        res.json(docs);
   });
})
router.post('/', function(req, res, next) {
    Dashboard.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
/*  To Drop the Dashboard data */
router.delete('/delete', function(req, res, next){
    Dashboard.collection.drop()
    res.json("Empty the Dashboard");
})


module.exports = router;