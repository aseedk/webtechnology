MongoClient = require('mongodb').MongoClient;
ObjectId = require('mongodb').ObjectId;
url = "mongodb://localhost:27017/";
MongoClient.connect(url,function (err,db) {
    if (err) throw err;
    let dbo = db.db("mydb");
    dbo.collection('orders').aggregate([
        {
            $lookup:{
                from: "inventory",
                localField: "item",
                foreignField: "sku",
                as: "inventory_docs"
            }
        }
    ]).toArray(function (error, result) {
        if (error) throw error;
        console.log(JSON.stringify(result, null, 1))
        db.close().then(() => console.log("Database Closed"));
    })
})
