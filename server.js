//NodeJS+Mongo Connection
//CRUD Operation through Postman
const express = require('express');
var app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/sports', function(err){
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log('MongoDB connection sucessfull')
  }

})

const GameModel = mongoose.model('games',{name: String, country: String, player: String})

app.post('/addgame',(req,res) => {

  var name = req.body.name
  var country = req.body.country
  var player = req.body.player

  var newgame = new GameModel({name: name,country:country,player: player})
  newgame.save(function(err){
    if(err)
    {
      res.send('Adding game failed');
    }
    else{
      res.send('Sucessfully Added to the database');
    }
  })

});

app.post('/deletegame',(req,res) => {

  GameModel.findOneAndDelete({
    name:req.body.name
  }, function(err){
    if(err)
    {
      res.send('Deleting document failed');
    }
    else
    {
      res.send('Document delete successfull')
    }
  })
  
});

app.post('/getgames',(req,res) => {

  GameModel.find({}, function(err,documents){
    if(err)
    {
      res.send('Something went wrong');
    }
    else{
      res.send(documents);
    }
  })
});

app.post('/updategame',(req,res) => {

  GameModel.findOneAndUpdate({

    name:req.body.name

  }, {

    player:'xyz'

  }, function(err){

    if(err)
    {
      res.send('Updating Document')
    }
    else
    {
      res.send('Document Updated sucessfully')
    }

  })

});

app.listen(5000,() => {

  console.log('Server started on port')
});