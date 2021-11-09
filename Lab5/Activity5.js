MongoClient = require('mongodb').MongoClient;
ObjectId = require('mongodb').ObjectId;
url = "mongodb://localhost:27017/";
/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("mBusiness_DB");
    let myobj = [
        { "_id" : ObjectId("512bc95fe835e68f199c8686"), "author" : "dave", "score" : 80, "views" : 100 },
        { "_id" : ObjectId("512bc962e835e68f199c8687"), "author" : "dave", "score" : 85, "views" : 521 },
        { "_id" : ObjectId("55f5a192d4bede9ac365b257"), "author" : "ahn", "score" : 60, "views" : 1000 },
        { "_id" : ObjectId("55f5a192d4bede9ac365b258"), "author" : "li", "score": 55, "views" : 5000 },
        { "_id" : ObjectId("55f5a1d3d4bede9ac365b259"), "author" : "annT", "score" : 60, "views" : 50 },
        { "_id" : ObjectId("55f5a1d3d4bede9ac365b25a"), "author" : "li", "score": 94, "views" : 999 },
        { "_id" : ObjectId("55f5a1d3d4bede9ac365b25b"), "author" : "ty", "score": 95, "views" : 1000 }
    ];


    dbo.collection("articles").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Total document inserted", res.insertedCount);
        db.close().then(() => console.log("Database Closed"));
    });

});*/


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("mBusiness_DB");
    dbo.collection("articles").aggregate([{
        $match: {
            author: "li"
        }
    }]).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close().then(() => console.log("Database Closed"));
    })
});

