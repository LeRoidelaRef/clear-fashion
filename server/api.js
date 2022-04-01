const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const { MongoClient } = require('mongodb');

require('dotenv').config();
const MONGODB_DB_NAME= "clearfashion"
const MONGODB_URI="mongodb+srv://thomas:Thotor@cluster0.n0b5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const { calculateLimitAndOffset, paginate } = require('paginate-info');

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'test': true});
});

app.get('/products/search', (request, response) => {

  var filter ={};
  var limit = parseInt(request.query.limit);
  var brand;
  var price;
  const limit = parseInt(request.query.size, 10) || 12;
  const page = parseInt(request.query.page, 10) || 1;

  const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
  const db =  client.db(MONGODB_DB_NAME);
  const collection = db.collection('products');

  
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

    const result = await collection.find(filter).skip(offset).limit(limit).toArray();
    const count =await collection.find(filter).count;
    response.send({"success":true,"data":{"result":result,"meta":paginate(page, collection.count(), result, limit)}})
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
