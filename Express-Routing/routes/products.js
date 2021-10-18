const express = require('express');
const router = express.Router()

router.get('/getproducts',(req,res) => {

  var products = ['iphone x','one plus t','samsung note 5']
  res.send(products);

});

router.get('/addproduct',(req,res) => {

  res.send('This is about adding products');

});

module.exports = router