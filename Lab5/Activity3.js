MongoClient = require('mongodb').MongoClient;
url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    let dbo = db.db("mBusiness_DB");

    let myobj = {name: "Company Inc", address: "Highway 37"};
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

MongoClient = require('mongodb').MongoClient;
url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("mydb");

    let myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close().then(() => console.log("Database Closed"));
    });
});


