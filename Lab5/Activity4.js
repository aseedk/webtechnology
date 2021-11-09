MongoClient = require('mongodb').MongoClient;
url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("mydb");
    dbo.collection("customers").find({name: "John"}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close().then(() => console.log("Database Closed"));
    });
});

MongoClient = require('mongodb').MongoClient;
url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.address);
        db.close().then(() => console.log("Database Closed"));
    });
});
