const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const db = require('./db');

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

const { calculateLimitAndOffset, paginate } = require('paginate-info');

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.get('/products/search', (request, response) => {

  var filter ={};
  var brand = parseInt(request.query.limit);
  var price = parseInt(request.query.limit);
  const limit = parseInt(request.query.size, 10) || 12;
  const page = parseInt(request.query.page, 10) || 1;
  
  if (brand != undefined){
    filter['brand']=request.query.brand;
  }

  if(price != undefined){
    filter["price"]=request.query.price;
  }

  const {offset } = calculateLimitAndOffset(page, limit);

    const result = await db.find(filter).skip(offset).limit(limit).toArray();
    response.send({"success":true,"data":{"result":result,"meta":paginate(page, collection.count(), result, limit)}})
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
