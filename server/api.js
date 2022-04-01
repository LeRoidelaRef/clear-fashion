const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const { MongoClient } = require('mongodb');
const  MONGODB_DB_NAME = "clearfashion";

client = new MongoClient(uri, options).connect();
const collection = client.db(MONGODB_DB_NAME).collection("products");
const uri = "mongodb+srv://thomas:Thotor@cluster0.n0b5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

app.get('/products/search', async (request, response) => {

  var filter ={};
  var brand;
  var price;
  var size = 12;
  var page = 1;
  
  if (request.query.brand !== undefined){
    filter['brand']=request.query.brand;
  }

  if(request.query.price !== undefined){
    filter["price"]=request.query.price;
  }

  if (request.query.size!==undefined){
    size=request.query.size
  }

  if (request.query.page!==undefined){
    page=request.query.page
  }

  const {limit,offset} = calculateLimitAndOffset(page,size);
  const count = await collection.count()

  collection.find(filter).skip(offset).limit(limit).toArray((error,result)=>{
    if (error){
      return response.status(500).send(error)
    }
    response.send({"success":true,"data":{"result":result,"meta":paginate(page, count, result, limit)}})
  });
});


app.get('/products/', async(request, response) => {

  collection.find({ }).toArray((error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send({result});
  });
});





app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);