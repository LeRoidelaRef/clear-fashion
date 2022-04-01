const express = require('express');
const MongoClient = require('mongodb');
const products = require('./products.json')
const MONGODB_DB_NAME= "clearfashion"
const client = require('./mongodb-client')
const app = express();

const { calculateLimitAndOffset, paginate } = require('paginate-info');


app.get('/', (request, response) => {
  response.send({'test': true});
});

app.get('/products/search', async (request, response) => {

  var filter ={};
  var brand;
  var price;
  const count = parseInt(request.query.size, 10) || 12;
  const page = parseInt(request.query.page, 10) || 1;

  const clien = await client;
  const collection = clien.db(MONGODB_DB_NAME).collection("products");
  
  if (request.query.brand != undefined){
    filter['brand']=request.query.brand;
  }

  if(request.query.price != undefined){
    filter["price"]=request.query.price;
  }

  const {limit,offset} = calculateLimitAndOffset(page,size);

  collection.find(filter).skip(offset).limit(limit).toArray((error,result)=>{
    if (error){
      return response.status(500).send(error)
    }
    response.send({"success":true,"data":{"result":result,"meta":paginate(page, collection.count(), result, limit)}})
  });
});


app.get('/products/:id', async(request, response) => {

  const clien = await client
  const collection = clien.db(MONGODB_DB_NAME).collection("products");


  collection.findOne({ "_id": request.params.id}, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  });
});

app.get('/products/', async(request, response) => {

  const clien = await client;
  response.send({"aest":true});
  //const collection = clien.db(MONGODB_DB_NAME).collection("products");
  
  /*collection.find({ }).toArray((error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send({"eest":true});
      response.send({result});
  });*/
});

module.exports = app;
