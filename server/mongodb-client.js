//const uri = "mongodb+srv://thomas:Thotor@cluster0.n0b5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
"use strict";

// Import the dependency.
const { MongoClient } = require('mongodb');

//const uri = "mongodb+srv://thomas:Thotor@cluster0.n0b5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const uri = "mongodb+srv://user1:TpuZmxHYE0QeV8IK@clear-fashion.j8y68.mongodb.net/products?retryWrites=true&w=majority";
const options = {
   useUnifiedTopology: true,
   useNewUrlParser: true,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {

  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (hot module replacement).
   if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
   }

   clientPromise = global._mongoClientPromise;
} else {

  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
}

  // Export a module-scoped MongoClient promise. By doing this in a
  // separate module, the client can be shared across functions.
module.exports = clientPromise;