const express = require('express');
const router = express.Router()

router.get('/rootuser',(req,res) => {
  
  res.send('This is root user => Username: 123@erpi Password: 123455');
  
});

module.exports = router