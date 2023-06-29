# Mongo DB Cheatsheet

## 00-Links:

### 00A: Learning & Syntax Links:

Link 1: [ *MongoDB Docs* : "*Master* Level Docs"] => `https://docs.atlas.mongodb.com/getting-started/`
Link 2: [ *MongoClient DocsA* : "From *Master* Docs"] => `https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html`
Link 3: [ **MongoClient DocsB** : "From W3School, Tested and Ready"] => `https://www.w3schools.com/nodejs/nodejs_mongodb.asp`
Link 4: [ **MongoCheetSheet** : "This is a .pdf file ready to view" => `https://blog.codecentric.de/files/2012/12/MongoDB-CheatSheet-v1_0.pdf`



### 00B: Functional Links:
Link 1: [ *Atlas GUI* : "For Database Connection"] => `https://account.mongodb.com/account/login?n=%2Fv2%2F5fc5b43380517e0088a0c8b5&nextHash=%23clusters%2Fdetail%2FClusterTest`







## A-Database structure and mindset:
We have several dependencies we can use in MongoDB world,
1. MongoClient - use more for backend CLIs 
2. mongojs - if app runs without mongoose
3. bluebird - promise handling middleware
4. mongoose - used to create constructor schemas for validation
5. body-parser - validation tool? (Look up again later for confirmation)
6. morgan - used to log information for development purposes

If using MongoClient, then remember to use this so I dont see the Deprication error:
``` js

 const url = 'mongodb://localhost:27017';

 const client = new MongoClient(url, {useUnifiedTopology: true});


```

## B-Config Info:
Before anything can happen, a couple of things need to happen:
1. Environment Shell for viewing data (quickly)
2. Going to MongoDB Atlas and signing in
3. Creating a cluster / switching to the proper cluster
4. Know username & password
5. Get the connection string and edit it so that credentials = true
6. Be mindful that connection string will need to be used in an .env file in production
7. Just as for mySQL we had a .mysql file to organize database criteria, a .js file will be needed
8. Organize the .js model file like below:

   ``` js
    // #################################

    // # name of database:

    // # - collection name(s)

    // # - db.collectionNameA commands:

    // # - db.collectionNameB commands:

    // # - db.collectionNameC commands:

    // =================================

    // # - db.collectionNameA DataModel:

    // # - db.collectionNameB DataModel:

    // # - db.collectionNameC DataModel:

    // etc.

    // #################################
    

    // --- Having this information ahead before we create anything keeps us organize as we create documents. 
   ```



## C-Top Level Structure

- Cluster
  - Databases
    - Collections
      - Documents
  

Example1:

``` js

var EXAMPLE1 = {
  Cluster1_Pokemon: {
    Database_1_PokemonList: {
      Collection1_Trainer1: {
        Document1: {
          id: "###########",
          trainerName: "Ash_Ketchum",
          pokeball1: "Pikachu",
          pokeball2: "Charmander",
          pokeball3: "Squirtle",
          pokeball4: "Bulbasaur",
          pokeball5: "Skammory",
          pokeball6: "Metagross",
          pokeball7: "Raichu",
        } // etc. 
      },
      Collection2_Trainer2: {

      },
      Collection3_Trainer3: {

      }
    },
    Database_2_Pokeballs: {

    },
    Database_3_PokeRegions: {

    }
    
  } 
}

```

## D-Commands

``` js

// CREATING A DATABASE
use databasedb // creates a new database

// BASIC COMMANDS
// every functional method below, takes in an object:
{object: "data"}

db.nameOfCollection.insert() // creates a collection with data = object
db.nameOfCollection.find().pretty() // reads data and shows it in a proper format
db.nameOfCollection.update() // select data to be updated (closed object) then new data (open Object)
db.nameOfCollection.remove() // removes an entry
db.nameOfCollection.drop() // drops a collection
db.dropDatabase() // drops the whole database
db.differentNameOfCollection.insert() // creates a different collection

```

## E-Using MongoClient 

Here we will have sample code for the CRUD operations

Order below: READ, CREATE, UPDATE, and DELETE

First "READ" which which we can do for a whole collection or just a document
``` js

// -- [ FIND ONE ] --
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});

// -- [ FIND ALL ] -- 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

// -- [ FIND SOME ] -- 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

``` 

Second "CREATE" which makes an entry in our database
``` js

// For adding one into a collection
// [ -- CREATE ONE -- ]
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});


// For "CREATE" multiple multiple documents 
// [ -- CREATE MULTIPLE -- ]
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});


// For "CREATE" with IDs defined
// [ -- CREATE with IDs -- ]
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { _id: 154, name: 'Chocolate Heaven'},
    { _id: 155, name: 'Tasty Lemon'},
    { _id: 156, name: 'Vanilla Dream'}
  ];
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});

```


## F-Mongoose userValidation Example

``` js

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ExampleSchema2 = new Schema({

  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  number: {
    type: Number,
    unique: true,
    required: true
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  boolean: Boolean,
  array: Array,

  date: {
    type: Date,
    default: Date.now
  },
  longstring: {
    type: String,
    validate: [
      function (input) {
        return input.length >= 6;
      },
      // Error Message
      "Longstring should be longer."
    ]
  },
  superlongString: {
    type: String,
    validate: [
      function (input) {
        return input.length >= 15;
      },
      // Error Message
      "superlongString should be longer."
    ]
  }
});



// This creates our model from the above schema, using mongoose's model method
var Example2 = mongoose.model("Example2", ExampleSchema2);

// Export the Example model
module.exports = Example2;


// `string` must be of type String. We "trim" it to remove any trailing white space
// `string` is a required field, and a custom error message is thrown if it is not supplied

// `number` is of type Number
// `number` must be unique
// `number` is required. The default mongoose error message is thrown if it is not supplied

// `email` is of type String
// `email` must match the regex pattern below and throws a custom error message if it does not
// You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html

// `boolean` must be of type Boolean

// `array` must be an Array

// `date` must be of type Date. The default value is the current date

// `longstring` must be of type String
// `longstring` uses a custom validation function to only accept values 6 characters or more
// A custom error message is thrown if the validation fails



```


