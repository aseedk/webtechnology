MongoClient = require('mongodb').MongoClient
url = "mongodb://localhost:27017/mBusiness_DB";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close().then(() => console.log("Database Closed"));
});
