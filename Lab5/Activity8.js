MongoClient = require('mongodb').MongoClient
url = "mongodb://localhost:27017/";
/*MongoClient.connect(url, function (err,db) {
    if (err) throw err;
    let dbo = db.db('mydb')
    dbo.collection('inventory').deleteOne({_id : 6}, function (err, res) {
        if (err) throw err;
        console.log(res.deletedCount)
    })
})*/

MongoClient.connect(url, function (err,db) {
    if (err) throw err;
    let dbo = db.db('mydb')
    dbo.collection('inventory').updateOne({description: "product 1"}, {$set: {"instock": 130}}, function (err, res) {
        if (err) throw err;
        console.log(res.modifiedCount)
    })
})
