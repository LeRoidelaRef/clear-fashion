const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const { MongoClient } = require('mongodb');
const products = require('./products.json')
const MONGODB_DB_NAME= "ClearFashion"
require('dotenv').config();

const MONGODB_URI = "mongodb+srv://thomas:<password>@cluster0.n0b5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const MONGODB_URI = process.env.MONGODB_URI;

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.get('/products/search', (request, response) => {

  var filter ={};
  var limit = parseInt(request.query.limit);
  var brand;
  var price;
  
  if (request.query.brand != undefined){
    filter['brand']=request.query.brand;
  }

  if(request.query.price != undefined){
    filter["price"]=request.query.price;
  }

  collection.find(filter).toArray((error,result)=>{
    if (error){
      return response.status(500).send(error)
    }
    response.send(result)
  });
});


app.get('/products/:id', (request, response) => {
  collection.findOne({ "_id": request.params.id}, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  });
});

app.listen(PORT, () => {
  MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true}, (error, client)=>{
    if(error) {
      throw error;
  }
    db = client.db(MONGODB_DB_NAME);
    collection = db.collection("products");
    console.log("Connected to `" + MONGODB_DB_NAME + "`!");
  });

});

console.log(`📡 Running on port ${PORT}`);
