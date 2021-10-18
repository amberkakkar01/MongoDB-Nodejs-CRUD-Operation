const express = require('express');
var app = express()

const userroute = require('./routes/users')
const productsroute = require('./routes/products')
const ordersroute = require('./routes/orders')
const rootroute = require('./routes/admin')

app.use('/user',userroute);
app.use('/product',productsroute);
app.use('/order',ordersroute);
app.use('/admin',rootroute);

app.listen(5000,() => {
  console.log('Server started on port 5000');
})
