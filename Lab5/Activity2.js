MongoClient = require('mongodb').MongoClient;
url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    let dbo = db.db("mBusiness_DB");
    dbo.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close().then(() => console.log("Database Closed"));
    });
});
