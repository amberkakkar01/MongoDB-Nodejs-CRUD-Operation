const express = require('express');
const router = express.Router()

router.get('/showorder',(req,res) => {

  var arr=['iphone-x: 2','Dell Elite book: 1','Wireless Adaptor: 2'];

  res.send('This is about the orders');
  res.send(arr);

});

module.exports = router